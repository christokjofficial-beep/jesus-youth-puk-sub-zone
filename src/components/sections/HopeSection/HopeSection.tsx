import React from 'react';
import { Button } from '../../common/Button/Button';
import styles from './HopeSection.module.css';

export const HopeSection: React.FC = () => {
  return (
    <section className="scene" id="hope" data-theme="light">
      <div className="wrap center dark-text">
        <div className="sub rv" style={{ justifyContent: 'center' }}>
          Hope · Grace · Truth
        </div>
        <h2 className="big rv d1">
          The only hope you will <em>ever</em> need.
        </h2>
        <Button href="#visit" className="rv d2">
          Plan a visit →
        </Button>
        <div className={`side rv d2 ${styles.callout}`}>
          <div className="sub">
            <span className="bordered">Scripture</span> centered
          </div>
          <p>
            Grace Fellowship is built on two foundations: the Word of God and the love of Jesus
            Christ.
          </p>
        </div>
      </div>
    </section>
  );
};
