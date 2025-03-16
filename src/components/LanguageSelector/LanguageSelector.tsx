import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import esFlag from './esFlag.png';
import enFlag from './enFlag.png';
import ptFlag from './ptFlag.png';

interface LanguageSelectorProps {
  onChange?: (language: string) => void;
}

const languages = [
  { code: 'en', label: 'EN', flag: enFlag },
  { code: 'es', label: 'ES', flag: esFlag },
  { code: 'pt', label: 'PT', flag: ptFlag },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onChange }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

console.log(i18n); // Verifica que i18n esté definido y tenga la función changeLanguage

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    if (onChange) onChange(language);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', color:'black' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '8px 12px', 
          background: 'white', 
          border: '1px solid #ccc', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        <img 
          src={languages.find(lang => lang.code === i18n.language)?.flag} 
          alt="flag" width="24" height="16" 
          style={{ marginRight: '8px' }}
        />
        {languages.find(lang => lang.code === i18n.language)?.label}
      </button>
      {isOpen && (
        <ul 
          style={{ 
            position: 'absolute', 
            top: '100%', 
            left: 0, 
            background: 'white', 
            listStyle: 'none', 
            padding: '5px 0', 
            margin: 0, 
            border: '1px solid #ccc', 
            borderRadius: '5px', 
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)' 
          }}
        >
          {languages.map((lang) => (
            <li key={lang.code} 
                onClick={() => changeLanguage(lang.code)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '8px 12px', 
                  cursor: 'pointer', 
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#f0f0f0')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
            >
              <img src={lang.flag} alt={lang.label} width="24" height="16" style={{ marginRight: '8px' }} />
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
