export interface BeliefItem {
  id: string;
  title: string;
  points: [string, string];
  position: {
    left: number; // percentage
    top: number; // percentage
    size: number; // px diameter
    floatDuration: number; // seconds
    driftX: number; // px
    driftY: number; // px
  };
}

export interface MarqueeItem {
  icon: string;
  label: string;
}
