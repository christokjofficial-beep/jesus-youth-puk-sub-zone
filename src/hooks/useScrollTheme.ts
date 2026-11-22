import { useEffect, useState, useMemo } from 'react';
import { SCENES_DATA } from '../data/scenes';
import { ThemeMode, DepthMode } from '../types/theme';
import { hexToRgb, lerpColor, rgbToCss } from '../utils/color';

interface ScrollThemeState {
  theme: ThemeMode;
  depth: DepthMode;
  backgroundGradient: string;
}

export function useScrollTheme(): ScrollThemeState {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [depth, setDepth] = useState<DepthMode>('space');
  const [backgroundGradient, setBackgroundGradient] = useState<string>(
    'linear-gradient(180deg, rgb(9, 11, 24), rgb(23, 24, 51))'
  );

  const parsedScenes = useMemo(() => {
    return SCENES_DATA.map((scene) => ({
      ...scene,
      topRgb: hexToRgb(scene.topColor),
      bottomRgb: hexToRgb(scene.bottomColor)
    }));
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      const scrollY = window.scrollY;
      const centerY = scrollY + window.innerHeight * 0.5;

      const sceneElements = SCENES_DATA.map((s) => document.getElementById(s.id)).filter(
        Boolean
      ) as HTMLElement[];

      if (sceneElements.length === 0) return;

      const scenePositions = sceneElements.map((el, index) => {
        const rect = el.getBoundingClientRect();
        return {
          index,
          center: rect.top + scrollY + rect.height / 2,
          data: parsedScenes[index]
        };
      });

      let activeIndex = 0;
      while (
        activeIndex < scenePositions.length - 1 &&
        centerY > scenePositions[activeIndex + 1].center
      ) {
        activeIndex++;
      }

      const current = scenePositions[activeIndex];
      const next = scenePositions[Math.min(activeIndex + 1, scenePositions.length - 1)];

      let progress = 0;
      if (current !== next) {
        progress = Math.min(
          1,
          Math.max(0, (centerY - current.center) / (next.center - current.center))
        );
      }

      // Smooth hermite ease curve: t = t*t*(3 - 2*t)
      const smoothedT = progress * progress * (3 - 2 * progress);

      const blendedTop = lerpColor(current.data.topRgb, next.data.topRgb, smoothedT);
      const blendedBottom = lerpColor(current.data.bottomRgb, next.data.bottomRgb, smoothedT);

      const gradient = `linear-gradient(180deg, ${rgbToCss(blendedTop)}, ${rgbToCss(blendedBottom)})`;
      setBackgroundGradient(gradient);

      const dominantScene = smoothedT < 0.5 ? current.data : next.data;
      setTheme(dominantScene.theme);
      setDepth(dominantScene.depth);
    };

    updateTheme();
    window.addEventListener('scroll', updateTheme, { passive: true });
    window.addEventListener('resize', updateTheme);

    return () => {
      window.removeEventListener('scroll', updateTheme);
      window.removeEventListener('resize', updateTheme);
    };
  }, [parsedScenes]);

  return { theme, depth, backgroundGradient };
}
