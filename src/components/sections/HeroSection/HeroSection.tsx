import React from 'react';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
  return (
    <section className="scene" id="top" data-theme="dark">
      <div className="wrap row">
        <div>
          <div className="sub rv">
            <span className="dot" />
            From heaven <span className="bordered">to heart</span>
          </div>
          <h1 className="headline rv d1">
            Fa<em>i</em>th
          </h1>
          <div className="headline2 rv d2">begins here.</div>
        </div>

        <div className="rv d2">
          <p className="tag">
            Journey into the <i>wonderful world</i> of Grace Fellowship
          </p>
          <div className={styles.scroll}>
            scroll to begin <b className={styles.bobIcon}>↓</b>
          </div>
        </div>
      </div>
    </section>
  );
};
