import React, { useEffect } from 'react';
import { MOBILE_MENU_LINKS } from '../../../data/navigation';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }
    return () => {
      document.body.classList.remove('locked');
    };
  }, [isOpen]);

  return (
    <div
      className={`${styles.menu} ${isOpen ? styles.open : ''}`}
      aria-hidden={!isOpen}
    >
      <ul className={styles.list}>
        {MOBILE_MENU_LINKS.map((link) => (
          <li key={link.label} className={styles.item}>
            <a href={link.href} onClick={onClose} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.cr}>
        <span>Grace Fellowship</span>
        <span>©2026</span>
      </div>
    </div>
  );
};
