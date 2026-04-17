"use client";

import React from 'react';

const Lightbox = ({ src, onClose, onNext, onPrev }) => {
  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-0 md:p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Bouton Fermer */}
      <button 
        className="absolute top-10 right-4 md:top-10 md:right-6 text-white text-3xl md:text-4xl hover:text-beige-600 transition z-[110] w-12 h-12 flex items-center justify-center bg-black/50 md:bg-transparent rounded-full"
        onClick={onClose}
        aria-label="Fermer"
      >
        &times;
      </button>

      {/* Bouton Précédent */}
      <button 
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-beige-600 w-12 h-12 flex items-center justify-center z-[110] bg-black/40 md:bg-transparent rounded-full"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Image précédente"
      >
        &#8249;
      </button>

      {/* Conteneur de l'image */}
      <div 
        className="relative w-full max-w-5xl h-[75vh] md:h-[85vh] mx-auto flex items-center justify-center" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* CORRECTION : Utilisation de la balise HTML standard <img> */}
        <img 
          src={src} 
          alt="Image agrandie de la galerie" 
          className="max-w-full max-h-full object-contain shadow-2xl"
        />
      </div>

      {/* Bouton Suivant */}
      <button 
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-beige-600 w-12 h-12 flex items-center justify-center z-[110] bg-black/40 md:bg-transparent rounded-full"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Image suivante"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Lightbox;