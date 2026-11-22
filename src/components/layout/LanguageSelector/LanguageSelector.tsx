import React, { useState, useRef, useEffect } from 'react';
import { LANGUAGES_DATA } from '../../../data/languages';
import { LanguageOption } from '../../../types/navigation';
import { Pill } from '../../common/Pill/Pill';
import styles from './LanguageSelector.module.css';

export const LanguageSelector: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<LanguageOption>(LANGUAGES_DATA[0]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSelect = (lang: LanguageOption) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.lang} ${isOpen ? styles.open : ''}`} ref={containerRef}>
      <Pill
        className={styles.langBtn}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {selectedLang.code} ▾
      </Pill>
      <ul className={styles.dropdown} role="listbox">
        {LANGUAGES_DATA.map((lang) => (
          <li
            key={lang.code}
            className={`${styles.item} ${selectedLang.code === lang.code ? styles.activeItem : ''}`}
            onClick={() => handleSelect(lang)}
            role="option"
            aria-selected={selectedLang.code === lang.code}
          >
            {lang.nativeName}
          </li>
        ))}
      </ul>
    </div>
  );
};
