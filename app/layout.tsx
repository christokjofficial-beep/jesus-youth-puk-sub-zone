import type { Metadata } from "next";
import "./globals.css";
import { SITE_METADATA } from "@/lib/constants";
import OrganimoEngineLoader from "@/components/3d/OrganimoEngineLoader";
import DoveSkyOverlay from "@/components/3d/DoveSkyOverlay";
import HeroHeader from "@/components/ui/HeroHeader";

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: [
    "Jesus Youth",
    "Catholic Youth Movement",
    "Pontifical Right",
    "Christian Fellowship",
    "Baptism in the Holy Spirit",
    "Six Pillars Jesus Youth",
    "Rexband Catholic Music",
    "Youth Evangelisation",
    "Catholic Missionaries"
  ],
  authors: [{ name: "Jesus Youth International Secretariat" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: SITE_METADATA.canonicalUrl,
    siteName: "Jesus Youth",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="no-js" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=1" />
        
        {/* Preload fonts for Organimo WebGL UI */}
        <link rel="preload" crossOrigin="anonymous" href="/fonts/Fracktif-SemiBold.woff2" as="font" type="font/woff2" />
        <link rel="preload" crossOrigin="anonymous" href="/fonts/Manrope-Medium.woff2" as="font" type="font/woff2" />
        <link rel="preload" crossOrigin="anonymous" href="/fonts/Manrope-Regular.woff2" as="font" type="font/woff2" />
        <link rel="preload" crossOrigin="anonymous" href="/fonts/Mauren-Light.woff2" as="font" type="font/woff2" />
        <link rel="preload" crossOrigin="anonymous" href="/fonts/Mauren-LightItalic.woff2" as="font" type="font/woff2" />

        {/* Global configuration required by Organimo 3D WebGL Engine */}
        <script
          id="organimo-global-data"
          dangerouslySetInnerHTML={{
            __html: `
              window.globalData = {
                publicUrl: "/",
                assetsUrl: "/resources/assets/"
              };
            `,
          }}
        />
        {/* jQuery dependency for Organimo Taxi & fragments */}
        <script src="/build/jquery.min.js" />

        {/* Organimo Production Stylesheet for 3D Engine & Typography */}
        <link rel="stylesheet" href="/build/style-70bb85ec.css" media="all" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        
        {/* Header with Jesus Youth Sacred Identity */}
        <header className="header pointer-events-none | container-fluid d-flex items-center justify-between py-12 py-20@sm py-30@md | js-header">
          <div className="d-none d-flex@md items-center pointer-events-auto">
            <a
              className="button relative t-fractif d-inline-block t-dark-gray js-button button--simple button--nav js-header:dynamicLink"
              href="#0-underwater"
            >
              <span className="button--simple__bg"></span>
              <span className="button__text | d-flex justify-center relative z-10">
                <span className="relative js-button-text">
                  <span className="d-block js-header:shopLink">Baptism</span>
                  <span className="d-block button--nav__alt-text srp js-header:homeLink">Home</span>
                </span>
              </span>
              <div className="button__glow absolute z-negative"></div>
            </a>
            <nav className="navigation | js-nav" aria-label="Main navigation">
              <ul role="menubar" className="d-flex items-center m-0 p-0">
                <li role="none" className="list-unstyled d-inline-block ml-15 ml-20@md">
                  <a href="#0-sky" className="link header__link | js-header:link d-block" role="menuitem">
                    <span className="d-block">The 6 Pillars</span>
                    <span className="d-block" aria-hidden="true">The 6 Pillars</span>
                  </a>
                </li>
                <li role="none" className="list-unstyled d-inline-block ml-15 ml-20@md">
                  <a href="#2-underwater" className="link header__link | js-header:link d-block" role="menuitem">
                    <span className="d-block">Ministries</span>
                    <span className="d-block" aria-hidden="true">Ministries</span>
                  </a>
                </li>
                <li role="none" className="list-unstyled d-inline-block ml-15 ml-20@md">
                  <a href="#2-underwater" className="link header__link | js-header:link d-block" role="menuitem">
                    <span className="d-block">Rexband</span>
                    <span className="d-block" aria-hidden="true">Rexband</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>



          {/* Right Action / Pontifical Right */}
          <div className="d-flex items-center pointer-events-auto">
            <div className="d-none d-block@md" style={{ marginRight: '16px' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.4)', padding: '4px 10px', borderRadius: '12px' }}>
                Pontifical Right
              </span>
            </div>
            <a
              className="button relative t-fractif d-inline-block t-dark-gray js-button button--glow bg-white"
              href="#2-underwater"
              style={{ padding: '6px 18px', borderRadius: '20px', background: '#D4AF37', color: '#091124', fontWeight: 'bold', fontSize: '13px' }}
            >
              Join Mission
            </a>
          </div>
        </header>

        {/* 1. Required WebGL Loader Section */}
        <section
          className="loader d-flex justify-center align-center items-center | js-loader"
          style={{ backgroundColor: '#040814', position: 'fixed', width: '100vw', height: '100vh', zIndex: 9999 }}
        >
          <div className="d-flex flex-column justify-between h-1/1 items-center">
            
            {/* Loader emblem placeholder */}
            <div className="mt-12 mt-20@sm mt-30@md loader__logo"></div>

            {/* Sprite animation container required by Organimo engine */}
            <div>
              <div className="loader__sprite-container">
                <div className="loader__sprite-container__child js-loader:container">
                  <div className="loader__sprite js-loader:sprite">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/atlas.png" alt="Loading animation" />
                  </div>
                </div>
                <div className="loader__reveal js-loader:reveal">
                  <svg aria-hidden="true">
                    <use xlinkHref="#logomark"></use>
                  </svg>
                </div>
              </div>

              {/* Progress Bar required by Organimo engine */}
              <div className="loader__progress d-flex justify-center relative mt-40 | js-loader:progress">
                <div className="loader__progress__end loader__progress__end--left">
                  <div>
                    <div className="loader__progress__circle | js-loader:left"></div>
                  </div>
                </div>
                <div className="loader__progress__middle t-fractif t-ls-2 t-14 | js-loader:middle" style={{ width: 0 }}>
                  <span className="opacity-0 visibility-hidden js-loader:complete">complete</span>
                </div>
                <div className="loader__progress__end">
                  <div>
                    <div className="loader__progress__circle | js-loader:right"></div>
                  </div>
                </div>
                <div className="absolute center-xy t-fractif t-ls-2 t-14 | js-loader:percent">0</div>
              </div>
            </div>

            <div className="mb-20 t-mid-gray t-12 t-16@md js-loader:audio">
              <span className="d-none d-inline@touch">Tap</span>
              <span className="d-inline d-none@touch">Click</span> anywhere to enter
            </div>

          </div>
        </section>

        {/* 2. Required Page Transition Section */}
        <section className="page-transition d-flex justify-center align-center items-center bg-magnolia | js-page-transition">
          <div className="loader__sprite-container">
            <div className="loader__sprite-container__child">
              <div className="loader__sprite">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/atlas.png" alt="Loading animation" />
              </div>
            </div>
          </div>
          <div className="page-transition__gradient"></div>
        </section>

        {/* Page Content */}
        {children}

        {/* WebGL 3D Canvas & CSS3D layer for Organimo 3D Engine */}
        <canvas
          id="webgl"
          className="fixed fill z-negative"
          style={{ opacity: 0, visibility: 'hidden' }}
          suppressHydrationWarning
        ></canvas>
        <div id="css3d" className="fixed fill pointer-events-none" suppressHydrationWarning></div>

        {/* 3D Floating Bubbles Container for The Six Pillars of Jesus Youth */}
        <div className="bubbles-container">
          {/* Bubble 0: Daily Personal Prayer */}
          <div id="js-bubble-0" className="bubble">
            <div className="bubble__inner">
              <div className="bubble__init js-bubble-init">
                <div className="bubble__title">Daily Personal Prayer</div>
                <div className="bubble__icon js-bubble-icon">
                  <div className="bubble__plus">+</div>
                </div>
              </div>
              <div className="bubble__content js-bubble-content">
                <div className="bubble__borderEl">
                  <div className="top"></div>
                  <div className="center"><div className="center__sides"></div></div>
                  <div className="bottom"></div>
                </div>
                <div className="bubble__border bubble__border__top bubble__top">
                  <div className="bubble__number bubble__number__top">01</div>
                  <div className="bubble__text bubble__text__top">Dedicated 20–30 min Quiet Time every morning in silence with Jesus.</div>
                </div>
                <div className="bubble__border bubble__border__bottom bubble__bottom">
                  <div className="bubble__number bubble__number__bottom">02</div>
                  <div className="bubble__text bubble__text__bottom">Eucharistic Adoration and intimacy with the Holy Trinity.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bubble 1: The Word of God */}
          <div id="js-bubble-1" className="bubble">
            <div className="bubble__inner">
              <div className="bubble__init js-bubble-init">
                <div className="bubble__title">The Word of God</div>
                <div className="bubble__icon js-bubble-icon">
                  <div className="bubble__plus">+</div>
                </div>
              </div>
              <div className="bubble__content js-bubble-content">
                <div className="bubble__borderEl">
                  <div className="top"></div>
                  <div className="center"><div className="center__sides"></div></div>
                  <div className="bottom"></div>
                </div>
                <div className="bubble__border bubble__border__top bubble__top">
                  <div className="bubble__number bubble__number__top">01</div>
                  <div className="bubble__text bubble__text__top">Daily Lectio Divina: Read, Meditate, Pray, and Contemplate Scripture.</div>
                </div>
                <div className="bubble__border bubble__border__bottom bubble__bottom">
                  <div className="bubble__number bubble__number__bottom">02</div>
                  <div className="bubble__text bubble__text__bottom">Carrying God&apos;s living Word into university campuses and workplaces.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bubble 2: Sacramental Life */}
          <div id="js-bubble-2" className="bubble">
            <div className="bubble__inner">
              <div className="bubble__init js-bubble-init">
                <div className="bubble__title">Sacramental Life</div>
                <div className="bubble__icon js-bubble-icon">
                  <div className="bubble__plus">+</div>
                </div>
              </div>
              <div className="bubble__content js-bubble-content">
                <div className="bubble__borderEl">
                  <div className="top"></div>
                  <div className="center"><div className="center__sides"></div></div>
                  <div className="bottom"></div>
                </div>
                <div className="bubble__border bubble__border__top bubble__top">
                  <div className="bubble__number bubble__number__top">01</div>
                  <div className="bubble__text bubble__text__top">Frequent participation in Holy Mass and reception of the Holy Eucharist.</div>
                </div>
                <div className="bubble__border bubble__border__bottom bubble__bottom">
                  <div className="bubble__number bubble__number__bottom">02</div>
                  <div className="bubble__text bubble__text__bottom">Regular Sacrament of Reconciliation (Confession) for spiritual renewal.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bubble 3: Christian Fellowship */}
          <div id="js-bubble-3" className="bubble">
            <div className="bubble__inner">
              <div className="bubble__init js-bubble-init">
                <div className="bubble__title">Christian Fellowship</div>
                <div className="bubble__icon js-bubble-icon">
                  <div className="bubble__plus">+</div>
                </div>
              </div>
              <div className="bubble__content js-bubble-content">
                <div className="bubble__borderEl">
                  <div className="top"></div>
                  <div className="center"><div className="center__sides"></div></div>
                  <div className="bottom"></div>
                </div>
                <div className="bubble__border bubble__border__top bubble__top">
                  <div className="bubble__number bubble__number__top">01</div>
                  <div className="bubble__text bubble__text__top">Weekly cell groups and prayer households for mutual accountability.</div>
                </div>
                <div className="bubble__border bubble__border__bottom bubble__bottom">
                  <div className="bubble__number bubble__number__bottom">02</div>
                  <div className="bubble__text bubble__text__bottom">Deep emotional and spiritual healing through fraternal brotherhood.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bubble 4: Evangelisation */}
          <div id="js-bubble-4" className="bubble">
            <div className="bubble__inner">
              <div className="bubble__init js-bubble-init">
                <div className="bubble__title">Evangelisation</div>
                <div className="bubble__icon js-bubble-icon">
                  <div className="bubble__plus">+</div>
                </div>
              </div>
              <div className="bubble__content js-bubble-content">
                <div className="bubble__borderEl">
                  <div className="top"></div>
                  <div className="center"><div className="center__sides"></div></div>
                  <div className="bottom"></div>
                </div>
                <div className="bubble__border bubble__border__top bubble__top">
                  <div className="bubble__number bubble__number__top">01</div>
                  <div className="bubble__text bubble__text__top">Lifestyle witness in colleges, corporations, hospitals, and media.</div>
                </div>
                <div className="bubble__border bubble__border__bottom bubble__bottom">
                  <div className="bubble__number bubble__number__bottom">02</div>
                  <div className="bubble__text bubble__text__bottom">Rexband contemporary Catholic concerts and cultural festivals.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bubble 5: Option for the Poor */}
          <div id="js-bubble-5" className="bubble">
            <div className="bubble__inner">
              <div className="bubble__init js-bubble-init">
                <div className="bubble__title">Option for the Poor</div>
                <div className="bubble__icon js-bubble-icon">
                  <div className="bubble__plus">+</div>
                </div>
              </div>
              <div className="bubble__content js-bubble-content">
                <div className="bubble__borderEl">
                  <div className="top"></div>
                  <div className="center"><div className="center__sides"></div></div>
                  <div className="bottom"></div>
                </div>
                <div className="bubble__border bubble__border__top bubble__top">
                  <div className="bubble__number bubble__number__top">01</div>
                  <div className="bubble__text bubble__text__top">Visiting slums, homes for the destitute, hospitals, and prisons.</div>
                </div>
                <div className="bubble__border bubble__border__bottom bubble__bottom">
                  <div className="bubble__number bubble__number__bottom">02</div>
                  <div className="bubble__text bubble__text__bottom">Loving Jesus in the distressing disguise of the poorest and forgotten.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bubble 6: Full-Time Volunteers */}
          <div id="js-bubble-6" className="bubble">
            <div className="bubble__inner">
              <div className="bubble__init js-bubble-init">
                <div className="bubble__title">Full-Time Volunteers</div>
                <div className="bubble__icon js-bubble-icon">
                  <div className="bubble__plus">+</div>
                </div>
              </div>
              <div className="bubble__content js-bubble-content">
                <div className="bubble__borderEl">
                  <div className="top"></div>
                  <div className="center"><div className="center__sides"></div></div>
                  <div className="bottom"></div>
                </div>
                <div className="bubble__border bubble__border__top bubble__top">
                  <div className="bubble__number bubble__number__top">01</div>
                  <div className="bubble__text bubble__text__top">One full year consecrated to pioneer missionary service.</div>
                </div>
                <div className="bubble__border bubble__border__bottom bubble__bottom">
                  <div className="bubble__number bubble__number__bottom">02</div>
                  <div className="bubble__text bubble__text__bottom">Radical discipleship and apostolic outreach across unreached lands.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bubble 7: Rexband & Arts */}
          <div id="js-bubble-7" className="bubble">
            <div className="bubble__inner">
              <div className="bubble__init js-bubble-init">
                <div className="bubble__title">Rexband &amp; Arts</div>
                <div className="bubble__icon js-bubble-icon">
                  <div className="bubble__plus">+</div>
                </div>
              </div>
              <div className="bubble__content js-bubble-content">
                <div className="bubble__borderEl">
                  <div className="top"></div>
                  <div className="center"><div className="center__sides"></div></div>
                  <div className="bottom"></div>
                </div>
                <div className="bubble__border bubble__border__top bubble__top">
                  <div className="bubble__number bubble__number__top">01</div>
                  <div className="bubble__text bubble__text__top">30+ years of World Youth Days and global evangelistic concerts.</div>
                </div>
                <div className="bubble__border bubble__border__bottom bubble__bottom">
                  <div className="bubble__number bubble__number__bottom">02</div>
                  <div className="bubble__text bubble__text__bottom">Praising the King of Kings through contemporary rock and world beats.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic client-side WebGL engine injector (runs after React hydration) */}
        <OrganimoEngineLoader />
        {/* Cloud screen + dove scene + dive, played over the (hidden) sky section */}
        <DoveSkyOverlay />
        <HeroHeader />
      </body>
    </html>
  );
}
