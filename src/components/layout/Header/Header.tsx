import React, { useState } from 'react';
import { MAIN_NAV_LINKS } from '../../../data/navigation';
import { Pill } from '../../common/Pill/Pill';
import { CrossMark } from '../../common/CrossMark/CrossMark';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { ThemeMode } from '../../../types/theme';
import styles from './Header.module.css';

interface HeaderProps {
  theme: ThemeMode;
}

export const Header: React.FC<HeaderProps> = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`${styles.header} ${theme === 'light' ? styles.light : ''}`}
        id="hdr"
      >
        <div className={styles.left}>
          <Pill href="#give" className={styles.giveBtn}>
            Give
          </Pill>
          <nav className={styles.navLinks} aria-label="Main Navigation">
            {MAIN_NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <a href="#top" className={styles.logo} aria-label="Grace Fellowship Home">
          <CrossMark />
          Grace
        </a>

        <div className={styles.right}>
          <a href="#" className={`${styles.navLink} ${styles.login}`}>
            <span>Member Login</span>
          </a>
          <LanguageSelector />
          <Pill href="#visit" circle aria-label="Prayer Request" className={styles.prayerBtn}>
            🙏
          </Pill>
          <Pill
            circle
            className={styles.burger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMenuOpen}
          >
            ≡
          </Pill>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
