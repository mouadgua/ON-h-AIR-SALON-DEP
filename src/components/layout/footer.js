'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext'; // 1. Import du Context de traduction

// 2. Importation propre des icônes
import { 
  FaArrowUp, 
  FaInstagram, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaPhoneAlt 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);
  
  // 3. Récupération des fonctions de traduction
  const { t, lang } = useLanguage(); 

  // Gérer l'apparition du bouton "Retour en haut" au scroll
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 200) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 200) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Footer principal */}
      <footer id="contact" className="bg-black text-white pt-12 pb-8 border-t-2 border-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
            
            {/* Colonne 1 : Logo & Réseaux */}
            <div className="mb-8 md:mb-0 md:w-1/4">
              <Link href="/" className="text-2xl font-serif font-bold text-white mb-4 inline-block">
                <span className="text-white">ON h'AIR salon</span>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('footerSlogan')}
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/onhair_maroc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-beige-600 transition-colors transform hover:scale-110">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="https://wa.me/212678915564" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-beige-600 transition-colors transform hover:scale-110">
                  <FaWhatsapp className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Colonne 2 : Liens rapides */}
            <div className="mb-8 md:mb-0">
              <h3 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-wider">{t('footerQuickLinks')}</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">{t('navAccueil')}</Link></li>
                <li><Link href="/#about-content" className="text-gray-400 hover:text-white transition-colors">{t('navAPropos')}</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{t('navServices')}</Link></li>
                <li><Link href="/galerie" className="text-gray-400 hover:text-white transition-colors">{t('navGalerie')}</Link></li>
                <li><Link href="/#booking-content" className="text-gray-400 hover:text-white transition-colors">{t('navContact')}</Link></li>
              </ul>
            </div>

            {/* Colonne 3 : Services */}
            <div className="mb-8 md:mb-0">
              <h3 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-wider">{t('footerServices')}</h3>
              <ul className="space-y-3">
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{t('footerServiceCoiffure')}</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{t('footerServiceColoration')}</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{t('footerServiceSoinsVisage')}</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{t('footerServiceManucurePedicure')}</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{t('footerServiceMaquillage')}</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{t('footerServiceMassage')}</Link></li>
              </ul>
            </div>

            {/* Colonne 4 : Contact */}
            <div>
              <h3 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-wider">{t('footerContact')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="w-5 h-5 text-gray-400 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Place Rabea Aladaouya,<br />100 résidence Kays, Rabat 10100</span>
                </li>
                <li className="flex items-center mt-4">
                  <FaPhoneAlt className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                  <a href="tel:+212669577172" className="text-gray-300 hover:text-white transition-colors">+212 6 69 57 71 72</a>
                </li>
              </ul>
            </div>
            
          </div>

          {/* Section Copyright (Traduction dynamique) */}
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {currentYear} ON h'air. {lang === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}</p>
          </div>
        </div>
      </footer>

      {/* Bouton Retour en haut (Animation Tailwind fluide) */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 z-[90] ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Retour en haut"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </>
  );
};

export default Footer;