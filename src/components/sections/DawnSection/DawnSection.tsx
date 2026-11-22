import React from 'react';
import styles from './DawnSection.module.css';

export const DawnSection: React.FC = () => {
  return (
    <section className="scene" id="dawn" data-theme="light">
      <div className="wrap center dark-text">
        <div className="sub rv" style={{ justifyContent: 'center' }}>
          100% free &amp; welcoming
        </div>
        <h2 className="big rv d1">
          Grace freely given to <em>every</em> soul.
        </h2>
        <div className={`side rv d2 ${styles.centerCallout}`}>
          <div className="sub" style={{ justifyContent: 'center' }}>
            <span className="bordered">Open doors</span> for all
          </div>
          <p>
            No matter your background, your questions, or your past — there is a seat at our table.
            Come as you are.
          </p>
        </div>
      </div>
    </section>
  );
};
