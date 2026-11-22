import React from 'react';
import styles from './CrossMark.module.css';

interface CrossMarkProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const CrossMark: React.FC<CrossMarkProps> = ({ size = 'sm', className = '' }) => {
  return (
    <span
      className={`${styles.mark} ${size === 'lg' ? styles.large : ''} ${className}`}
      aria-hidden="true"
    />
  );
};
