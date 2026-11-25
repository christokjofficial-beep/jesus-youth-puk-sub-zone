export interface Pillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  scripture: string;
  reference: string;
  description: string;
  keyPractices: string[];
  spiritualFruit: string;
  accentColor: string;
}

export interface Ministry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  targetAudience: string;
  initiatives: string[];
  icon: string;
}

export interface BaptismSceneStage {
  id: number;
  phase: string;
  title: string;
  subtitle: string;
  scripture: string;
  narrative: string;
  visualCue: string;
  spiritualMeaning: string;
  bgColor: string;
  accentColor: string;
}

export interface MovementStatistic {
  label: string;
  value: string;
  subtext: string;
}

export interface FaithTestimony {
  id: string;
  name: string;
  role: string;
  country: string;
  quote: string;
  pillarImpact: string;
}
