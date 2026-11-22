import { BeliefItem } from '../types/beliefs';

export const BELIEFS_DATA: BeliefItem[] = [
  {
    id: 'scripture',
    title: 'Scripture',
    points: [
      "The Bible is God's inspired Word and our guide for life.",
      'We read it, study it, and let it shape how we love.'
    ],
    position: { left: 4, top: 4, size: 190, floatDuration: 6, driftX: 16, driftY: -14 }
  },
  {
    id: 'jesus',
    title: 'Jesus',
    points: [
      'Jesus is the Son of God, fully God and fully man.',
      'He died for our sins and rose again on the third day.'
    ],
    position: { left: 34, top: 0, size: 160, floatDuration: 7, driftX: -16, driftY: -17 }
  },
  {
    id: 'grace',
    title: 'Grace',
    points: [
      'Salvation is a free gift, received by faith alone.',
      'We are forgiven, made new, and welcomed home.'
    ],
    position: { left: 64, top: 6, size: 200, floatDuration: 8, driftX: 16, driftY: -20 }
  },
  {
    id: 'holy-spirit',
    title: 'Holy Spirit',
    points: [
      'The Spirit lives in every believer to guide and comfort.',
      'He grows love, joy, peace, and patience in us.'
    ],
    position: { left: 84, top: 18, size: 150, floatDuration: 9, driftX: -16, driftY: -23 }
  },
  {
    id: 'prayer',
    title: 'Prayer',
    points: [
      'Prayer is a daily conversation with our loving Father.',
      'We pray together, for each other and our city.'
    ],
    position: { left: 10, top: 34, size: 170, floatDuration: 6, driftX: 16, driftY: -26 }
  },
  {
    id: 'community',
    title: 'Community',
    points: [
      'The church is a family, not just a Sunday event.',
      'Small groups meet weekly to share meals and burdens.'
    ],
    position: { left: 44, top: 30, size: 210, floatDuration: 7, driftX: -16, driftY: -29 }
  },
  {
    id: 'worship',
    title: 'Worship',
    points: [
      'We worship in song, in service, and in everyday life.',
      'Every gift, big or small, is offered to glorify God.'
    ],
    position: { left: 74, top: 46, size: 170, floatDuration: 8, driftX: 16, driftY: -32 }
  },
  {
    id: 'mission',
    title: 'Mission',
    points: [
      'We are sent to love our neighbors as ourselves.',
      'Food drives, mentoring, and outreach near and far.'
    ],
    position: { left: 28, top: 62, size: 190, floatDuration: 9, driftX: -16, driftY: -35 }
  }
];
