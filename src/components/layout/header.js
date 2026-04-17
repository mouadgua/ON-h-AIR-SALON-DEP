'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

import { 
  FaInstagram, 
  FaWhatsapp, 
  FaPhone, 
  FaGlobe, 
  FaChevronDown, 
  FaBars, 
  FaTimes,
  FaGoogle
} from 'react-icons/fa';

const Header = () => {
  const { t, lang, switchLanguage } = useLanguage(); 

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCallDropdownOpen, setIsCallDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);

  useEffect(() => {
    const closeAll = () => {
      setIsCallDropdownOpen(false);
      setIsLangDropdownOpen(false);
      setIsMobileLangOpen(false);
    };
    window.addEventListener('click', closeAll);
    
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => window.removeEventListener('click', closeAll);
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full relative">
      
      {/* --- 1. PROMOTION BAR (Technique du Double Marquee = 0 espace blanc) --- */}
      <div className="bg-[#daa570] text-white overflow-hidden py-2.5 text-sm w-full flex whitespace-nowrap">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: flex;
            min-width: 100%;
            flex-shrink: 0;
            animation: marquee 20s linear infinite;
          }
          .marquee-container:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}} />
        <div className="flex marquee-container w-full">
          {/* Bloc 1 */}
          <div className="animate-marquee justify-around items-center">
            {[...Array(6)].map((_, i) => (
              <span key={`a-${i}`} className="px-8 font-medium drop-shadow-sm">
                {t('promoOffer')}
              </span>
            ))}
          </div>
          {/* Bloc 2 (Clone parfait pour boucler sans vide) */}
          <div className="animate-marquee justify-around items-center" aria-hidden="true">
            {[...Array(6)].map((_, i) => (
              <span key={`b-${i}`} className="px-8 font-medium drop-shadow-sm">
                {t('promoOffer')}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- 2. LOGO SECTION (Couleurs réchauffées) --- */}
      <div className="bg-black py-8 md:py-10 text-center">
        <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
          <div className="relative inline-block">
            <Image 
              src="/images/OH/log-shiny-blanc.png" 
              alt="Logo ON h'AIR" 
              width={500} 
              height={150} 
              className="mx-auto h-auto w-[250px] md:w-[400px]" 
              priority 
            />
          </div>
        </Link>
        <p className="font-serif italic text-xl md:text-3xl mt-4" style={{color: '#ac9362'}}>
          {t('slogan')}
        </p>
      </div>

      {/* --- 3. NAVIGATION DESKTOP --- */}
      <nav className="hidden md:block w-full bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-center lg:justify-between items-center gap-4">
          
          <div className="flex flex-grow justify-center gap-9 max-w-4xl">
            {[
              { name: t('navAccueil'), href: '/' },
              { name: t('navAPropos'), href: '/#about-content' },
              { name: t('navServices'), href: '/services' },
              { name: t('navGalerie'), href: '/galerie' },
              { name: t('navContact'), href: '/#booking-content' }
            ].map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-[#daa570] hover:bg-[#fff9f5] transition-colors py-2 px-4 text-center border border-gray-200 rounded-sm font-semibold text-sm flex-1 max-w-[150px]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 ml-4">
            <div className="relative">
              <button 
                onClick={(e) => { e.stopPropagation(); setIsCallDropdownOpen(!isCallDropdownOpen); }}
                className="bg-black text-white px-5 py-2.5 rounded-sm font-semibold flex items-center hover:bg-[#daa570] transition-colors text-sm shadow-sm"
              >
                <FaPhone className="mr-2" /> 
                {t('navAppeler')} 
                <FaChevronDown className="ml-2 text-[10px]" />
              </button>
              {isCallDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-md shadow-xl py-1 border border-gray-100 z-50">
                  <a href="tel:+212669577172" className="block px-4 py-3 text-sm text-gray-800 hover:bg-[#fff9f5] hover:text-[#daa570] font-semibold transition-colors">Nabil: +212 6 69 57 71 72</a>
                  <a href="tel:+212678915564" className="block px-4 py-3 text-sm text-gray-800 hover:bg-[#fff9f5] hover:text-[#daa570] font-semibold border-t border-gray-100 transition-colors">Fahd: +212 6 78 91 55 64</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button 
                onClick={(e) => { e.stopPropagation(); setIsLangDropdownOpen(!isLangDropdownOpen); }}
                className="bg-[#fff9f5] border border-[#daa570]/30 text-gray-800 px-4 py-2.5 rounded-sm font-semibold flex items-center hover:bg-[#daa570] hover:text-white transition-all text-sm shadow-sm"
              >
                <FaGlobe className="mr-2 text-lg" /> 
                {lang === 'fr' ? 'Français' : 'English'} 
                <FaChevronDown className="ml-2 text-[10px]" />
              </button>
              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-md shadow-xl py-1 border border-gray-100 z-50">
                  <button onClick={() => switchLanguage('fr')} className={`block w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-[#fff9f5] hover:text-[#daa570] transition-colors ${lang === 'fr' ? 'font-bold text-[#daa570]' : 'font-medium'}`}>Français</button>
                  <button onClick={() => switchLanguage('en')} className={`block w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-[#fff9f5] hover:text-[#daa570] transition-colors ${lang === 'en' ? 'font-bold text-[#daa570]' : 'font-medium'}`}>English</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* --- 4. BOUTONS FLOTTANTS DROITE (Mobile) --- */}
      <div className="fixed top-[45px] right-4 z-50 md:hidden flex flex-col items-end space-y-3 pointer-events-none">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="bg-white border border-gray-200 p-3 rounded-md shadow-md text-gray-800 pointer-events-auto flex items-center justify-center w-12 h-12 hover:text-[#daa570] transition-colors"
        >
          <FaBars className="text-xl" />
        </button>

        <div className="relative pointer-events-auto">
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMobileLangOpen(!isMobileLangOpen); }}
            className="bg-[#daa570] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 border-2 border-white"
          >
            <FaGlobe className="text-xl" />
          </button>
          
          {isMobileLangOpen && (
            <div className="absolute top-14 right-0 bg-white rounded-lg shadow-xl py-2 min-w-[120px] border border-gray-100">
              <button onClick={() => {switchLanguage('fr'); setIsMobileLangOpen(false);}} className={`block w-full text-center px-4 py-3 text-sm font-bold border-b border-gray-50 ${lang === 'fr' ? 'text-[#daa570]' : 'text-gray-800'}`}>FRANÇAIS</button>
              <button onClick={() => {switchLanguage('en'); setIsMobileLangOpen(false);}} className={`block w-full text-center px-4 py-3 text-sm font-bold ${lang === 'en' ? 'text-[#daa570]' : 'text-gray-800'}`}>ENGLISH</button>
            </div>
          )}
        </div>
      </div>

      {/* --- 5. MENU MOBILE OVERLAY --- */}
      <div className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[#fff9f5]/90 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)}></div>
        
        <div className="relative h-full flex flex-col px-8 py-10 z-10">
          <div className="flex justify-end mb-10">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 p-2 hover:text-[#daa570] transition-colors">
              <FaTimes className="text-3xl" />
            </button>
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-[#daa570] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t('navAccueil')}</Link>
            <Link href="/#about-content" className="text-2xl font-bold text-gray-900 hover:text-[#daa570] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t('navAPropos')}</Link>
            <Link href="/services" className="text-2xl font-bold text-gray-900 hover:text-[#daa570] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t('navServices')}</Link>
            <Link href="/galerie" className="text-2xl font-bold text-gray-900 hover:text-[#daa570] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t('navGalerie')}</Link>
            <Link href="/#booking-content" className="text-2xl font-bold text-gray-900 hover:text-[#daa570] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{t('navContact')}</Link>
          </div>
          
          <div className="mt-auto flex flex-col space-y-4">
            <a href="tel:+212669577172" className="bg-black text-white py-4 rounded-md font-bold flex items-center justify-center shadow-lg text-sm hover:bg-[#daa570] transition-colors">
              <FaPhone className="mr-3" /> Nabil - +212 6 69 57 71 72
            </a>
            <a href="tel:+212678915564" className="bg-black text-white py-4 rounded-md font-bold flex items-center justify-center shadow-lg text-sm hover:bg-[#daa570] transition-colors">
              <FaPhone className="mr-3" /> Fahd - +212 6 78 91 55 64
            </a>
          </div>
        </div>
      </div>

      {/* --- 6. RÉSEAUX SOCIAUX FLOTTANTS --- */}
      <div className="fixed bottom-6 left-4 z-50 flex flex-col space-y-3">
        <a href="https://instagram.com/onhair_maroc" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110" style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}>
          <FaInstagram className="text-xl" />
        </a>
        <a href="https://wa.me/212669577172" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110">
          <FaWhatsapp className="text-xl" />
        </a>
        <a href="https://www.google.com/search?q=ON+h%27AIR+salon+Avis" target="_blank" rel="noopener noreferrer" className="bg-white w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-[#daa570] shadow-lg transition-transform hover:scale-110 border-2 border-[#fff9f5]">
          <FaGoogle className="text-xl" />
        </a>
      </div>

    </header>
  );
};

export default Header;