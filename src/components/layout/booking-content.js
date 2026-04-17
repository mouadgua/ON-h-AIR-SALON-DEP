'use client'
import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext'; // 1. L'import du contexte

// Importation des icônes React (plus propres que les anciens <i> ou <svg>)
import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const BookingContent = () => {
  const { t } = useLanguage(); // 2. Récupération de la fonction de traduction

  // Garder ton animation de scroll (IntersectionObserver)
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in, .slide-up');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); 
        }
      });
    }, {
      threshold: 0.1
    });

    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="booking-content" className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-beige-50 rounded-xl shadow-lg overflow-hidden fade-in">
          <div className="grid md:grid-cols-3">
            
            {/* Colonne 1 : Infos Contact */}
            <div className="md:col-span-1 bg-beige-600 p-6 text-dark">
              {/* 3. Utilisation de {t('cle')} au lieu du texte en dur */}
              <h2 className="font-serif text-3xl font-bold mb-6">
                {t('contactUsTitle')}
              </h2>
              <p className="mb-8">
                {t('contactUsIntro')}
              </p>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">
                  {t('contactOpeningHoursTitle')}
                </h3>
                <p className="mb-1">
                  {t('contactOpeningHoursDays')}
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">
                  {t('contactQuickContactTitle')}
                </h3>
                <div className="flex items-center mb-3">
                  {/* Remplacement du <svg> par l'icône React */}
                  <FaPhoneAlt className="w-4 h-4 mr-3" />
                  <span>+212 6 69 57 71 72</span>
                </div>
              </div>
            </div>

            {/* Colonne 2 : Google Maps (Iframe) */}
            <div className="md:col-span-1 h-80 md:h-auto md:min-h-[400px]">
              {/* J'ai mis un lien Maps valide (Rabat) pour que tu n'aies pas d'erreur d'affichage */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7013398396475!2d-6.847190299999999!3d34.0002043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76de7079a3413%3A0xdc150b08de691131!2sON%20h&#39;AIR%20salon!5e0!3m2!1sfr!2sma!4v1776456666823!5m2!1sfr!2sma" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Colonne 3 : Coordonnées & Réseaux */}
            <div className="md:col-span-1 p-8 bg-white flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-5">
                  {t('contactCoordinatesTitle')}
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-beige-600 mr-3 mt-1 w-5 flex-shrink-0" />
                    <span>Place Rabea Aladaouya,<br/>100 résidence Kays, Rabat 10100</span>
                  </li>
                  <li className="flex items-center">
                    <FaPhoneAlt className="text-beige-600 mr-3 w-5 flex-shrink-0" />
                    <a href="tel:+212669577172" className="hover:text-beige-600 transition">Nabil : +212 6 69 57 71 72</a>
                  </li>
                  <li className="flex items-center">
                    <FaPhoneAlt className="text-beige-600 mr-3 w-5 flex-shrink-0" />
                    <a href="tel:+212678915564" className="hover:text-beige-600 transition">Fahd : +212 6 78 91 55 64</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">
                  {t('contactFollowUsTitle')}
                </h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/onhair_maroc/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-beige-600 text-gray-700 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300 shadow-sm" aria-label="Instagram">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="https://wa.me/212669577172" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-beige-600 text-gray-700 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300 shadow-sm" aria-label="WhatsApp">
                    <FaWhatsapp className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingContent;
