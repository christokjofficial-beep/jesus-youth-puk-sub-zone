import { RGBColor } from '../types/theme';

/**
 * Converts a hex color string (#rrggbb) to an RGB object
 */
export function hexToRgb(hex: string): RGBColor {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) || 0;
  const g = parseInt(cleanHex.substring(2, 4), 16) || 0;
  const b = parseInt(cleanHex.substring(4, 6), 16) || 0;
  return { r, g, b };
}

/**
 * Linearly interpolates between two RGB colors
 */
export function lerpColor(c1: RGBColor, c2: RGBColor, t: number): RGBColor {
  const clampT = Math.max(0, Math.min(1, t));
  return {
    r: Math.round(c1.r + (c2.r - c1.r) * clampT),
    g: Math.round(c1.g + (c2.g - c1.g) * clampT),
    b: Math.round(c1.b + (c2.b - c1.b) * clampT)
  };
}

/**
 * Converts RGB object to CSS rgb string
 */
export function rgbToCss(c: RGBColor): string {
  return `rgb(${c.r}, ${c.g}, ${c.b})`;
}
