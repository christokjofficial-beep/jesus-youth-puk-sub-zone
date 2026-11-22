# Jesus Youth / Grace Fellowship — Cinematic UI

A modern, high-performance cinematic single-page application built with **React 18**, **TypeScript**, **Vite**, and **GSAP**. Features ambient celestial particle canvases, dynamic scroll-driven background interpolation, interactive floating physics bubbles, and a responsive drawer navigation system.

---

## 🏛 Architecture & Folder Structure

```
jesus_youth_cinematic_ui/
├── public/                     # Static public assets (favicons, icons)
│   └── favicon.svg
├── src/
│   ├── assets/                 # Static visual media & icons
│   ├── components/
│   │   ├── canvas/             # Ambient canvas particle rendering engine
│   │   │   ├── AmbientCanvas.tsx
│   │   │   └── AmbientCanvas.module.css
│   │   ├── common/             # Reusable atomic UI components
│   │   │   ├── Button/         # Glass & gold cinematic action buttons
│   │   │   ├── CrossMark/      # Distinctive geometrical gold cross mark
│   │   │   └── Pill/           # Frosted glass pill controls
│   │   ├── layout/             # Global layout & chrome
│   │   │   ├── Footer/         # Collapsible interactive drawer footer
│   │   │   ├── Header/         # Dynamic glassmorphic navbar with theme reaction
│   │   │   ├── LanguageSelector/# Accessible multilingual dropdown selector
│   │   │   └── MobileMenu/     # Full-screen responsive drawer navigation
│   │   ├── loader/             # Pre-flight cinematic loading sequence
│   │   │   ├── CinematicLoader.tsx
│   │   │   └── CinematicLoader.module.css
│   │   └── sections/           # Modular story-driven page sections
│   │       ├── BeliefsSection/ # Interactive floating bubbles with detail cards
│   │       ├── CommunitySection/# Seamless looping marquee ticker
│   │       ├── DawnSection/    # Dawn theme narrative section
│   │       ├── HeroSection/    # Celestial hero scene
│   │       ├── HopeSection/    # Sky-themed scripture focal section
│   │       └── VisitSection/   # Sunday service timings & CTA
│   ├── context/                # React context providers (ThemeContext)
│   ├── data/                   # Structured, decoupled static content & data
│   │   ├── beliefs.ts
│   │   ├── languages.ts
│   │   ├── marquee.ts
│   │   ├── navigation.ts
│   │   └── scenes.ts
│   ├── hooks/                  # Custom React hooks
│   │   ├── useScrollAnimation.ts # GSAP ScrollTrigger orchestration
│   │   └── useScrollTheme.ts   # Real-time background gradient interpolation
│   ├── styles/                 # Design tokens and global CSS
│   │   ├── global.css
│   │   ├── reset.css
│   │   └── variables.css
│   ├── types/                  # Strict TypeScript domain interfaces
│   │   ├── beliefs.ts
│   │   ├── navigation.ts
│   │   └── theme.ts
│   ├── utils/                  # Mathematical and color conversion utilities
│   │   └── color.ts
│   ├── App.tsx                 # Main application orchestration component
│   ├── App.module.css
│   ├── main.tsx                # Application entry point
│   └── vite-env.d.ts
├── index.html                  # Vite HTML entry point
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript compiler configuration
├── tsconfig.node.json          # Node TypeScript configuration
└── vite.config.ts              # Vite build configuration
```

---

## ⚡ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Animation Engine**: [GSAP 3](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Styling**: CSS Modules + Modern CSS custom properties (Design Tokens)
- **Typography**: *Cormorant Garamond* & *Manrope* (Google Fonts)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will be accessible at [http://localhost:3000](http://localhost:3000).

### 3. Production Build
```bash
npm run build
```

### 4. Preview Build
```bash
npm run preview
```

---

## ✨ Key Features

1. **Dynamic Background Interpolation**: Continuously recalculates RGB gradients between deep space, bright daytime sky, and deep ocean based on scroll position using cubic Hermite interpolation.
2. **Dual-Mode Canvas Engine**: An ambient 60 FPS canvas particle system rendering twinkling stars in the celestial hero section and floating bubbles in the living water section with seamless cross-fading.
3. **Interactive Floating Faith Bubbles**: Autonomous floating motion with sinusoidal drift. Clicking any bubble pauses physics, expands a frosted glass detail card, and blurs surrounding elements.
4. **Cinematic Loading Sequence**: Glowing golden cross animation with realistic progress counter that unlocks scrolling on completion.
5. **Accessible & Responsive**: Fully responsive layout supporting mobile touch drawers, reduced-motion preferences (`prefers-reduced-motion`), and keyboard navigation.
