import React from 'react';
import { Button } from '../../common/Button/Button';
import styles from './VisitSection.module.css';

export const VisitSection: React.FC = () => {
  return (
    <section className="scene" id="visit" data-theme="light">
      <div className="wrap row dark-text">
        <div>
          <h2 className="headline rv">
            A better y<em>o</em>u
          </h2>
          <div className="headline2 rv d1">starts here</div>
        </div>

        <div className="rv d2" id="give">
          <p className={`tag ${styles.timesTag}`}>
            Sundays at <b>9:00 &amp; 11:00 AM</b>. Wednesday prayer at 7 PM. Friday youth night at 6:30 PM.
          </p>
          <Button href="#" variant="gold">
            Join us Sunday →
          </Button>
        </div>
      </div>
    </section>
  );
};
