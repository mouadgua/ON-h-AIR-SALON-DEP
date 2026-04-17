'use client'

import React, { useState } from 'react';
import Lightbox from '@/components/galerie/Lightbox';
import { useLanguage } from '@/context/LanguageContext'; // 1. L'import du contexte de traduction

// Les données de la galerie
const photos = [
  { src: "/gallerie/im58.jpg", delay: "0.85s" },
  { src: "/gallerie/im59.jpg", delay: "0.85s" },
  { src: "/gallerie/im60.jpg", delay: "0.85s" },
  { src: "/gallerie/im61.jpg", delay: "0.85s" },
  { src: "/gallerie/im62.jpg", delay: "0.85s" },
  { src: "/gallerie/im63.jpg", delay: "0.85s" },
  { src: "/gallerie/im65.jpg", delay: "0.85s" },
  { src: "/gallerie/im66.jpg", delay: "0.85s" },
  { src: "/gallerie/im67.jpg", delay: "0.85s" },
  { src: "/gallerie/im68.jpg", delay: "0.85s" },
  { src: "/gallerie/im54.jpg", delay: "0.1s" },
  { src: "/gallerie/im55.jpg", delay: "0.15s" },
  { src: "/gallerie/im2.jpeg", delay: "0.2s" },
  { src: "/gallerie/im6.jpeg", delay: "0.25s" },
  { src: "/gallerie/im7.jpeg", delay: "0.3s" },
  { src: "/gallerie/im9.jpeg", delay: "0.35s" },
  { src: "/gallerie/im12.JPG", delay: "0.45s" },
  { src: "/gallerie/im14.JPG", delay: "0.5s" },
  { src: "/gallerie/im16.jpeg", delay: "0.55s" },
  { src: "/gallerie/im17.jpeg", delay: "0.6s" },
  { src: "/gallerie/im19.JPG", delay: "0.7s" },
  { src: "/gallerie/im21.jpeg", delay: "0.8s" },
  { src: "/gallerie/im23.jpeg", delay: "0.85s" },
  { src: "/gallerie/im25.JPG", delay: "0.85s" },
  { src: "/gallerie/im26.jpeg", delay: "0.85s" },
  { src: "/gallerie/im27.jpeg", delay: "0.85s" },
  { src: "/gallerie/im28.JPG", delay: "0.85s" },
  { src: "/gallerie/im29.jpeg", delay: "0.85s" },
  { src: "/gallerie/im31.JPG", delay: "0.85s" },
  { src: "/gallerie/im32.JPG", delay: "0.85s" },
  { src: "/gallerie/im33.jpeg", delay: "0.85s" },
  { src: "/gallerie/im35.jpeg", delay: "0.85s" },
  { src: "/gallerie/im36.jpeg", delay: "0.85s" },
  { src: "/gallerie/im38.JPG", delay: "0.85s" },
  { src: "/gallerie/im40.JPG", delay: "0.85s" },
  { src: "/gallerie/im42.JPG", delay: "0.85s" },
  { src: "/gallerie/im43.JPG", delay: "0.85s" },
  { src: "/gallerie/im44.jpeg", delay: "0.85s" },
  { src: "/gallerie/im45.JPG", delay: "0.85s" },
  { src: "/gallerie/im48.JPG", delay: "0.85s" },
  { src: "/gallerie/im49.jpeg", delay: "0.85s" },
  { src: "/gallerie/im50.JPG", delay: "0.85s" },
  { src: "/gallerie/im51.jpeg", delay: "0.85s" },
  { src: "/gallerie/im53.jpeg", delay: "0.85s" },
  { src: "/gallerie/im55.jpg", delay: "0.85s" },
  { src: "/gallerie/im56.png", delay: "0.85s" },
  { src: "/gallerie/im69.jpg", delay: "0.85s" }
];

export default function Galerie() {
  const { t } = useLanguage(); // 2. L'appel de la traduction
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = () => setSelectedIndex((prev) => (prev + 1) % photos.length);
  const showPrev = () => setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section id="gallery-page" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        
        {/* En-tête de la page */}
        <div className="text-center mb-16 fade-in">
          {/* dangerouslySetInnerHTML est utilisé car tes traductions contiennent du HTML (<span>) */}
          <h2 
            className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4" 
            dangerouslySetInnerHTML={{ __html: t('galleryPageTitle') }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('galleryPageIntro')}
          </p>
        </div>

        {/* Titre de section */}
        <div className="text-center mb-10 fade-in" style={{ transitionDelay: '0.6s' }}>
          <h3 
            className="font-serif text-2xl md:text-3xl font-semibold text-gray-700 border-b-2 border-beige-300 pb-3 inline-block" 
            dangerouslySetInnerHTML={{ __html: t('galleryPageSnapshotsTitle') }}
          />
        </div>

        {/* Grille d'images générée dynamiquement */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-lg fade-in shadow-md hover:shadow-xl transition-shadow duration-300 h-64 md:h-80 cursor-pointer group"
              style={{ transitionDelay: photo.delay }} 
              onClick={() => openLightbox(index)}
            >
              <img 
                src={photo.src} 
                alt={`Photo de la galerie ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Composant Lightbox */}
        {selectedIndex !== null && (
          <Lightbox 
            src={photos[selectedIndex].src} 
            onClose={closeLightbox}
            onNext={showNext}
            onPrev={showPrev}
          />
        )}

        {/* Bouton Instagram */}
        <div className="text-center mt-12 fade-in" style={{ transitionDelay: '0.9s' }}>
          <a 
            href="https://www.instagram.com/onhair_maroc/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-beige-600 hover:bg-beige-700 text-white px-8 py-3 rounded-sm font-medium transition inline-block" 
          >
            {t('galleryPageInstagramButton')}
          </a>
        </div>

      </div>
    </section>
  );
}