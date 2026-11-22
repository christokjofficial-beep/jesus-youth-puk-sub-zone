import React, { useState } from 'react';
import { BELIEFS_DATA } from '../../../data/beliefs';
import { BeliefBubble } from './BeliefBubble';
import styles from './BeliefsSection.module.css';

export const BeliefsSection: React.FC = () => {
  const [openBubbleId, setOpenBubbleId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenBubbleId((prev) => (prev === id ? null : id));
  };

  const handleClose = () => {
    setOpenBubbleId(null);
  };

  return (
    <section className="scene tall" id="beliefs" data-theme="dark">
      <div className="wrap">
        <div className="row">
          <div>
            <h2 className="headline rv" style={{ fontSize: 'clamp(3.4rem, 9vw, 8rem)' }}>
              Th<em>e</em> living
            </h2>
            <div className="headline2 rv d1">water.</div>
          </div>
          <div className="side rv d2">
            <div className="sub">
              discover what we <span className="bordered">believe</span>
            </div>
            <p>Tap each bubble to explore the heart of our faith, and dive deeper.</p>
          </div>
        </div>

        <div
          className={`${styles.bubblesContainer} ${openBubbleId ? styles.hasOpen : ''}`}
          id="bubbles"
        >
          {BELIEFS_DATA.map((belief) => (
            <BeliefBubble
              key={belief.id}
              belief={belief}
              isOpen={openBubbleId === belief.id}
              onToggle={() => handleToggle(belief.id)}
              onClose={handleClose}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
