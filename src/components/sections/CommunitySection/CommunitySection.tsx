import React from 'react';
import { MARQUEE_DATA } from '../../../data/marquee';
import styles from './CommunitySection.module.css';

export const CommunitySection: React.FC = () => {
  // Duplicated list for seamless infinite loop
  const duplicatedMarquee = [...MARQUEE_DATA, ...MARQUEE_DATA];

  return (
    <section className="scene" id="community" data-theme="dark">
      <div className="wrap center">
        <div className="sub rv" style={{ justifyContent: 'center' }}>
          the gift of community
        </div>
        <h2 className="big rv d1">
          100% biblical and <em>warmly</em> human.
        </h2>
        <div className={`rv d2 ${styles.reassure}`}>
          <ul className={styles.tickerList}>
            {duplicatedMarquee.map((item, index) => (
              <li key={`${item.label}-${index}`} className={styles.tickerItem}>
                <i className={styles.icon}>{item.icon}</i>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
