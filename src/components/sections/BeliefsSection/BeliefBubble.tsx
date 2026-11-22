import React from 'react';
import { BeliefItem } from '../../../types/beliefs';
import styles from './BeliefsSection.module.css';

interface BeliefBubbleProps {
  belief: BeliefItem;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const BeliefBubble: React.FC<BeliefBubbleProps> = ({
  belief,
  isOpen,
  onToggle,
  onClose
}) => {
  const { position, title, points } = belief;

  const bubbleStyle: React.CSSProperties = {
    left: `${position.left}%`,
    top: `${position.top}%`,
    ['--s' as string]: `${position.size}px`,
    ['--t' as string]: `${position.floatDuration}s`,
    ['--dx' as string]: `${position.driftX}px`,
    ['--dy' as string]: `${position.driftY}px`
  };

  return (
    <div
      className={`bubble ${styles.bubble} ${isOpen ? styles.open : ''}`}
      style={bubbleStyle}
    >
      <div
        className={styles.face}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-label={`Learn more about ${title}`}
      >
        <div className={styles.faceTitle}>{title}</div>
        <div className={styles.plusBtn}>+</div>
      </div>

      <div className={styles.card} aria-hidden={!isOpen}>
        <h4 className={styles.cardHeader}>
          {title}
          <button
            className={styles.closeBtn}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close card"
          >
            ×
          </button>
        </h4>

        <div className={styles.pt}>
          <span>01</span>
          <p>{points[0]}</p>
        </div>

        <div className={styles.pt}>
          <span>02</span>
          <p>{points[1]}</p>
        </div>
      </div>
    </div>
  );
};
