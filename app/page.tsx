import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="scroll-container" suppressHydrationWarning>
      <div data-taxi="">
        <div data-taxi-view="home" className="">
          <div className="home js-home">
            
            {/* ============================================================== */}
            {/* 1. CELESTIAL HEAVENS: THE CALL OF CHRIST (Space Scene)         */}
            {/* ============================================================== */}
            <div className="js-section-space home-scrolling-area">
              <div className="landing-title__container landing-title__side">
                <div id="0-space" className="js-space-landing-ui landing-ui space-0">
                  <div className="landing-title__container landing-title__side d-flex flex-column flex-row@md justify-start justify-between@md items-end@md w-1/1 w-6/7@md">
                    
                    <div className="landing-title__container_headlines mb-25 mb-40@sm mb-0@md">
                      <div className="landing-title__subheading t-ls-2">
                        <span className="dot"></span>
                        <p>A Missionary Movement</p>
                        <span className="bordered">of the Church</span>
                      </div>
                      <div className="landing-title__text">
                        <div className="js-home:titles">
                          <div className="headline t-mauren">
                            Je<em>s</em>us
                          </div>
                          <div className="headline__bottom t-manrope">
                            Youth Global.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="landing-title__container_cta">
                      <div className="tagline d-flex mb-20@md">
                        <span className="dot mr-8 mr-0@md absolute@md"></span>
                        <p className="t-manrope t-14 t-18@sm t-24@md bold mb-0">
                          Encounter Christ. Live the Six Pillars. <br />
                          <span className="t-mauren t-italic">Sent to 40+ nations </span> across 5 continents.
                        </p>
                      </div>
                      <div className="cta d-flex items-center t-manrope">
                        <p className="mb-0 mr-15 t-14 t-uppercase t-ls-2 d-none d-block@md bold">
                          scroll to enter the waters
                        </p>
                        <button className="scroll-cta relative@md absolute" aria-label="Scroll to begin" suppressHydrationWarning>
                          <div className="scroll-cta__inner absolute fill d-flex items-center justify-center">
                            <svg aria-hidden="true" className="scroll-icon">
                              <use xlinkHref="#scroll"></use>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* ============================================================== */}
            {/* 2. THE HEAVENS OPENED: THE HOLY SPIRIT (Sky Scene)             */}
            {/* ============================================================== */}
            <div className="js-section-sky home-scrolling-area">
              
              {/* Station 0-Sky: The Descent of the Dove */}
              <div id="0-sky" className="js-sky-landing-ui landing-ui sky-0">
                <div className="landing-title__container landing-title__center">
                  <div className="landing-title__subheading">
                    Decree of Pontifical Right • Holy See
                  </div>
                  <div className="landing-title__text landing-title__text--special-case centered js-home:titles">
                    The Holy Spirit descends as a <i>l</i><em>u</em><strong>minous</strong> <em>d</em><strong>ove.</strong>
                  </div>
                  <a
                    className="button relative t-fractif d-inline-block t-dark-gray js-button button--icon button--glow bg-white"
                    href="#0-underwater"
                    data-audio-enter="audio.hover"
                  >
                    <span className="button--simple__bg"></span>
                    <span className="button__text | d-flex justify-center relative z-10">
                      <span className="relative js-button-text">
                        The Baptism Journey
                      </span>
                    </span>
                    <div className="absolute fill overflow-hidden z-10">
                      <div className="button__icon | left absolute -x-100">
                        <div className="button__icon-inner | absolute fill">
                          <svg aria-hidden="true" className="center-y button__svg">
                            <use xlinkHref="#chevron-right"></use>
                          </svg>
                        </div>
                      </div>
                      <div className="button__icon | absolute right">
                        <div className="button__icon-inner | absolute fill | js-button-icon">
                          <svg aria-hidden="true" className="center-y button__svg">
                            <use xlinkHref="#chevron-right"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="button__glow absolute z-negative"></div>
                  </a>
                </div>

                <div className="landing-title__container landing-title__side _sub-content">
                  <div className="landing-title__subheading t-ls-2">
                    <span className="bordered">Matthew 3:16–17</span> Divine Voice
                  </div>
                  <p className="max-w-300 t-14 t-18@sm t-24@md t-lh-1.5 t-lh-1.2@sm">
                    &ldquo;And a voice from heaven said: This is my beloved Son, with whom I am well pleased.&rdquo;
                  </p>
                </div>
              </div>

              {/* Station 1-Sky: The Six Spiritual Pillars */}
              <div id="1-sky" className="js-sky-landing-ui landing-ui sky-1">
                <div className="landing-title__container landing-title__center">
                  <div className="landing-title__subheading">
                    Foundations of Daily Holiness
                  </div>
                  <div className="landing-title__text centered js-home:titles">
                    The Six Pillars of <strong>Jesus</strong> <strong>Y<em>o</em>uth</strong> Lifestyle.
                  </div>
                </div>
                <div className="landing-title__container landing-title__side _centered _sub-content">
                  <div className="landing-title__subheading t-ls-2">
                    <span className="bordered">Holiness in Everyday Life</span>
                  </div>
                  <p className="max-w-670">
                    Daily Personal Prayer (Quiet Time), Word of God (Lectio Divina), Sacramental Life (Eucharist & Confession), 
                    Christian Fellowship, Evangelisation, and Option for the Poor. Together they form an authentic path to Christ.
                  </p>
                </div>
              </div>

            </div>

            {/* ============================================================== */}
            {/* 3. THE SACRED WATERS: BAPTISM & MISSION (Underwater Scene)     */}
            {/* ============================================================== */}
            <div className="js-section-underwater home-scrolling-area">
              
              {/* Station 0-Underwater: The Jordan Immersion */}
              <div id="0-underwater" className="js-underwater-landing-ui landing-ui underwater-0">
                <div className="landing-title__container landing-title__side d-flex flex-column flex-row@md justify-start justify-between@md items-end@md w-1/1 w-6/7@md">
                  
                  <div className="landing-title__container_headlines mb-25 mb-40@sm mb-0@md">
                    <div className="landing-title__text">
                      <div className="js-home:titles">
                        <div className="headline t-mauren">
                          T<em>h</em>e Sacred
                        </div>
                        <div className="headline__bottom t-manrope">
                          waters of Jordan.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="landing-title__container_cta _sub-content">
                    <div className="tagline">
                      <p className="landing-title__subheading t-ls-2 mb-18@md">
                        Romans 6:3–4 <span className="bordered">Baptismal Grace</span>
                      </p>
                      <p className="max-w-360 t-14 t-lh-22 t-18@sm t-lh-24@sm t-24@md t-lh-30@md mb-0">
                        Submerged in grace: dying to sin with Christ, our old self is washed away. We arise reborn as adopted sons and daughters of God.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Station 1-Underwater: Sacraments & Christian Practices */}
              <div id="1-underwater" className="js-underwater-landing-ui landing-ui underwater-1">
                <div className="landing-title__container landing-title__center last">
                  <div className="landing-title__subheading">
                    Source & Summit of Christian Life
                  </div>
                  <div className="landing-title__text centered centered--wildcrafted js-home:titles">
                    The Holy Eucharist and <strong>Sacramental Grace.</strong>
                  </div>
                  
                  {/* Catholic Lifestyle Practices */}
                  <div className="landing-ui_reassurance">
                    <ul>
                      <li>
                        <p style={{ fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          † Daily Prayer
                        </p>
                      </li>
                      <li>
                        <p style={{ fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          † Lectio Divina
                        </p>
                      </li>
                      <li>
                        <p style={{ fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          † Holy Mass
                        </p>
                      </li>
                      <li>
                        <p style={{ fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          † Confession
                        </p>
                      </li>
                      <li>
                        <p style={{ fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          † Fellowship
                        </p>
                      </li>
                      <li>
                        <p style={{ fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          † Option for Poor
                        </p>
                      </li>
                    </ul>

                    <ul className="copy">
                      <li>
                        <p style={{ fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          † Daily Prayer
                        </p>
                      </li>
                      <li>
                        <p style={{ fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          † Lectio Divina
                        </p>
                      </li>
                      <li>
                        <p style={{ fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          † Holy Mass
                        </p>
                      </li>
                      <li>
                        <p style={{ fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          † Confession
                        </p>
                      </li>
                      <li>
                        <p style={{ fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          † Fellowship
                        </p>
                      </li>
                      <li>
                        <p style={{ fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          † Option for Poor
                        </p>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Station 2-Underwater: The Great Commission */}
              <div id="2-underwater" className="js-underwater-landing-ui landing-ui underwater-2">
                <div className="landing-title__container landing-title__side d-flex flex-column flex-row@md justify-start justify-between@md items-end@md w-1/1 w-6/7@md">
                  
                  <div className="landing-title__container_headlines mb-16 mb-24@sm mb-0@md">
                    <div className="landing-title__text">
                      <div className="js-home:titles">
                        <div className="headline t-mauren">
                          Go into a<em>l</em>l
                        </div>
                        <div className="headline__bottom t-manrope">
                          the world.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="landing-title__container_cta">
                    <div className="tagline">
                      <p className="t-14 t-lh-22 t-18@sm t-lh-24@sm t-24@md t-lh-30@md mb-16 mb-19@sm mb-30@md">
                        &ldquo;Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.&rdquo; (Matthew 28:19)
                      </p>
                      <a
                        className="button relative t-fractif d-inline-block t-dark-gray js-button button--icon button--glow bg-white mb-5 mb-14@sm mb-0@md"
                        href="https://jesusyouth.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-audio-enter="audio.hover"
                      >
                        <span className="button--simple__bg"></span>
                        <span className="button__text | d-flex justify-center relative z-10">
                          <span className="relative js-button-text">
                            Join Jesus Youth
                          </span>
                        </span>
                        <div className="absolute fill overflow-hidden z-10">
                          <div className="button__icon | left absolute -x-100">
                            <div className="button__icon-inner | absolute fill">
                              <svg aria-hidden="true" className="center-y button__svg">
                                <use xlinkHref="#chevron-right"></use>
                              </svg>
                            </div>
                          </div>
                          <div className="button__icon | absolute right">
                            <div className="button__icon-inner | absolute fill | js-button-icon">
                              <svg aria-hidden="true" className="center-y button__svg">
                                <use xlinkHref="#chevron-right"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="button__glow absolute z-negative"></div>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>


            {/* Footer */}
            <footer className="footer home-footer container pb-9 pb-20@sm">
              <div className="relative">
                <div className="bg-black d-flex justify-between justify-center@md pointer-events-none@md items-center pt-20 pt-40@md pb-20 pb-70@1840 relative z-10 js-home-toggle pl-22 pr-22" aria-controls="footer-toggle">
                  <div className="d-flex justify-center items-center">
                    <span style={{ fontSize: '24px', color: '#D4AF37', marginRight: '8px' }}>†</span>
                    <span className="t-mauren" style={{ fontSize: '20px', letterSpacing: '2px', color: '#ffffff' }}>
                      Jesus Youth International
                    </span>
                  </div>
                </div>

                <div className="container d-none d-block@md bg-black relative z-0" id="footer-toggle">
                  <div className="d-flex flex-wrap items-end justify-center justify-between@1840 pb-20 pb-30@sm">
                    
                    <div className="w-1/1 w-auto@md w-10/32@1840 d-flex justify-center justify-end@md justify-start@1840 pr-20@md pr-0@1840 | order-1">
                      <ul className="d-flex list-unstyled m-0 mb-24@sm mb-0@md flex-column flex-row@sm items-center">
                        <li className="ml-40@1840 mb-20 mb-0@sm">
                          <a href="https://jesusyouth.org" target="_blank" rel="noopener noreferrer" className="t-fractif link t-uppercase t-ls-2 t-no-underline t-white t-12 t-14@1840">
                            <span className="d-block">International Secretariat</span>
                            <span className="d-block" aria-hidden="true">International Secretariat</span>
                          </a>
                        </li>
                        <li className="ml-40@sm mb-20 mb-0@sm">
                          <a href="https://www.vatican.va" target="_blank" rel="noopener noreferrer" className="t-fractif link t-uppercase t-ls-2 t-no-underline t-white t-12 t-14@1840">
                            <span className="d-block">The Holy See</span>
                            <span className="d-block" aria-hidden="true">The Holy See</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="w-1/1 w-28/32@sm w-20/32@md w-18/32@lg w-10/32@1840 w-11/32@xxlg t-12 t-14@sm t-light-gray t-center mt-30@md mt-0@1840 max-w-400 max-w-1/1@sm | order-3 order-2@1840">
                      An International Private Association of the Faithful of Pontifical Right. Recognized and approved by the Pontifical Council for the Laity. &ldquo;You will be my witnesses to the ends of the earth.&rdquo; (Acts 1:8)
                    </div>

                    <div className="w-1/1 w-auto@md w-10/32@1840 d-flex justify-center justify-start@md justify-end@1840 mb-30 mb-0@md pl-20@md pl-0@1840 | order-2 order-3@1840">
                      <ul className="d-flex list-unstyled flex-column flex-row@sm items-center m-0 trim-vertical">
                        <li className="mb-20 mb-0@sm">
                          <span className="t-fractif link t-uppercase t-ls-2 t-no-underline t-white t-12 t-14@1840">
                            © {new Date().getFullYear()} Jesus Youth
                          </span>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </footer>

          </div>
        </div>
      </div>
    </main>
  );
}
