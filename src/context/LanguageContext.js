"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translate'; 

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    // Récupérer la langue sauvegardée au chargement
    const savedLang = localStorage.getItem('selectedLanguage') || 'fr';
    setLang(savedLang);
  }, []);

  const switchLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('selectedLanguage', newLang);
  };

  // La fonction magique pour traduire
  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);