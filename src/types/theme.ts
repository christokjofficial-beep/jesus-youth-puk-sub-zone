export type ThemeMode = 'light' | 'dark';
export type DepthMode = 'space' | 'sky' | 'deep';

export interface SceneColorData {
  id: string;
  theme: ThemeMode;
  depth: DepthMode;
  topColor: string;
  bottomColor: string;
}

export interface RGBColor {
  r: number;
  g: number;
  b: number;
}
