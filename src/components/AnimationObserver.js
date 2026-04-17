"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimationObserver() {
  const pathname = usePathname(); // Détecte le changement de page

  useEffect(() => {
    // 1. On cherche tous les éléments qui doivent s'animer
    const fadeElements = document.querySelectorAll('.fade-in, .slide-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    // Nettoyage pour éviter les fuites de mémoire
    return () => observer.disconnect();
  }, [pathname]); // <--- TRÈS IMPORTANT : Le script se relance à chaque changement de page

  return null;
}