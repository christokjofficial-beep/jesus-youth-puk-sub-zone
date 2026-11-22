import React from 'react';
import styles from './Pill.module.css';

export interface PillProps extends React.HTMLAttributes<HTMLElement> {
  href?: string;
  circle?: boolean;
  active?: boolean;
  children: React.ReactNode;
}

export const Pill: React.FC<PillProps> = ({
  href,
  circle = false,
  active = false,
  children,
  className = '',
  ...props
}) => {
  const combinedClass = [
    styles.pill,
    circle ? styles.circle : '',
    active ? styles.active : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={combinedClass} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};
