import React, { useState } from 'react';
import {
  FOOTER_LINKS_LEFT,
  FOOTER_LINKS_RIGHT,
  SOCIAL_LINKS
} from '../../../data/navigation';
import { CrossMark } from '../../common/CrossMark/CrossMark';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.fbar} ${isOpen ? styles.open : ''}`}>
        <div
          className={styles.ftop}
          onClick={toggleOpen}
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
          aria-label="Toggle Footer Navigation"
        >
          <span className={styles.chev} aria-hidden="true">
            ⌃
          </span>
          <span className={styles.flogo}>
            <CrossMark />
            Grace
          </span>
          <span className={styles.chev} aria-hidden="true">
            ⌃
          </span>
        </div>

        <div className={`${styles.fbody} ${isOpen ? styles.fbodyOpen : ''}`}>
          <div className={styles.fin}>
            <ul className={styles.linkList}>
              {FOOTER_LINKS_LEFT.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className={styles.scriptureNote}>
              &ldquo;Scripture quotations are shared for encouragement. Grace Fellowship is
              a non-profit church; all gifts are voluntary.&rdquo;
            </p>

            <ul className={`${styles.linkList} ${styles.rightList}`}>
              {FOOTER_LINKS_RIGHT.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.soc}>
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={styles.socLink}
                aria-label={item.ariaLabel}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
