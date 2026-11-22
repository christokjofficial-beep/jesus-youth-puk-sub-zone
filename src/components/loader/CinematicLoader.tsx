import React, { useEffect, useState } from 'react';
import styles from './CinematicLoader.module.css';

interface CinematicLoaderProps {
  onComplete?: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isFinishedText, setIsFinishedText] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 7 + 2;
        if (next >= 100) {
          clearInterval(timer);
          setIsFinishedText(true);
          setTimeout(() => {
            setIsDone(true);
            onComplete?.();
          }, 700);
          return 100;
        }
        return next;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`${styles.loader} ${isDone ? styles.done : ''}`}
      aria-hidden={isDone}
      role="status"
      aria-label="Loading Grace Fellowship"
    >
      <div className={styles.brand}>Grace Fellowship</div>

      <div className={styles.mid}>
        <div className={styles.cross} />
        <div className={styles.bar}>
          <div className={styles.line} />
          <div
            className={styles.fill}
            style={{ width: `${(Math.min(progress, 100) / 100) * 260}px` }}
          />
          <div className={styles.pct}>
            {isFinishedText ? 'complete' : Math.floor(progress)}
          </div>
        </div>
      </div>

      <div className={styles.hint}>
        Click anywhere to enable worship atmosphere
      </div>
    </div>
  );
};
