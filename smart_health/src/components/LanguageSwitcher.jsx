import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button 
        onClick={() => changeLanguage('en')} 
        disabled={i18n.language === 'en'}
      >
        English
      </button>
      <button 
        onClick={() => changeLanguage('hi')} 
        disabled={i18n.language === 'hi'}
      >
        हिन्दी
      </button>
    </div>
  );
};

export default LanguageSwitcher;