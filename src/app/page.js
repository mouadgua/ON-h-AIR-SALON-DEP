'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext'; // 1. L'import du contexte

// Importation propre des icônes React
import { FaInstagram, FaWhatsapp, FaGoogle, FaChevronLeft, FaChevronRight, FaVrCardboard } from 'react-icons/fa';

// LES DONNÉES 
const data = {
  services: [
    { id: 'Coiffure', img: '/images/service_preview/coiffure.jpg', delay: '0.2s', tTitle: 'servicePreviewCoiffureTitle', tText: 'servicePreviewCoiffureText' },
    { id: 'Coloration', img: '/images/service_preview/coloration.jpg', delay: '0.3s', tTitle: 'servicePreviewColorationTitle', tText: 'servicePreviewColorationText' },
    { id: 'Esthétique', img: '/images/service_preview/esthetique.JPG', delay: '0.4s', tTitle: 'servicePreviewEsthetiqueTitle', tText: 'servicePreviewEsthetiqueText' },
    { id: 'Nail bar', img: '/images/service_preview/nailbar.JPG', delay: '0.1s', tTitle: 'servicePreviewNailBarTitle', tText: 'servicePreviewNailBarText' }
  ],
  gallery: [
    "/gallerie/im59.jpg", "/gallerie/im63.jpg", "/gallerie/im55.jpg", "/gallerie/im49.jpeg",
    "/gallerie/im68.jpg", "/gallerie/im38.JPG", "/gallerie/im54.jpg", "/gallerie/im9.jpeg", "/gallerie/im27.jpeg"
  ],
  team: [
    { img: '/images/NABIL.jpeg', delay: '0.1s', tRole: 'teamNabilRole', tBio: 'teamNabilBio', tTitle: 'teamNabilTitle', link: 'https://www.instagram.com/nabilhaircare/' },
    { img: '/images/FAHD.jpeg', delay: '0.2s', tRole: 'teamFahdRole', tBio: 'teamFahdBio', tTitle: 'teamFahdTitle', link: 'https://www.instagram.com/fahd_coiff' },
    { img: '/images/NEZHA.jpeg', delay: '0.3s', tRole: 'teamNezhaRole', tBio: 'teamNezhaBio', tTitle: 'teamNezhaTitle', link: 'https://www.instagram.com/n_on_nails' }
  ],
  testimonials: [
    { name: 'Halima Lahbab', mt: 'mt-10', tText: 'testimonial1Text' },
    { name: 'Rim EL', mt: 'mt-4', tText: 'testimonial2Text' },
    { name: 'Oulfa Chlieh', mt: 'mt-4', tText: 'testimonial3Text' }
  ],
  googleLink: 'https://www.google.com/search?q=ON+h%27AIR+salon+Avis',
  partners: Array.from({ length: 21 }, (_, i) => `/images/partenaires/par${i + 1}.png`)
};

export default function Home() {
  const { t } = useLanguage(); // 2. Récupération de la fonction de traduction
  const partnerScrollRef = useRef(null); // Ref pour le carousel des partenaires

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

  // Fonction pour faire défiler les partenaires au clic
  const scrollPartners = (direction) => {
    if (partnerScrollRef.current) {
      const scrollAmount = 300;
      partnerScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const StarIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );

  return (
    <div id="accueil" className="content-section">

      {/* --- SECTION : À PROPOS --- */}
      <section id="about-content" className="py-16 bg-white fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* Utilisation de dangerouslySetInnerHTML pour lire les balises <span> stockées dans la traduction */}
            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              dangerouslySetInnerHTML={{ __html: t('aboutTitle') }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('aboutIntro')}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 fade-in">
              <img src="/gallerie/im47.jpeg" alt="Intérieur du salon" className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]" />
            </div>
            <div className="md:w-1/2 fade-in" style={{ transitionDelay: '0.1s' }}>
              <h3 className="font-serif text-2xl font-semibold text-gray-700 mb-4">{t('aboutCommitmentTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('aboutCommitmentText')}
              </p>

              <div className="space-y-4 mb-8">
                {/* Feature 1 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-beige-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-800">{t('aboutFeature1Title')}</h4>
                    <p className="text-gray-600">{t('aboutFeature1Text')}</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-beige-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-800">{t('aboutFeature2Title')}</h4>
                    <p className="text-gray-600">{t('aboutFeature2Text')}</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-beige-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-800">{t('aboutFeature3Title')}</h4>
                    <p className="text-gray-600">{t('aboutFeature3Text')}</p>
                  </div>
                </div>
              </div>
              <Link href="/services" className="inline-block bg-beige-600 hover:bg-beige-700 text-white px-8 py-3 rounded-sm font-medium transition">
                {t('aboutDiscoverServices')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION : SERVICES PREVIEW --- */}
      <section id="services-preview" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              dangerouslySetInnerHTML={{ __html: t('servicesPreviewTitle') }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('servicesPreviewIntro')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {data.services.map((service, index) => (
              <div key={index} className="relative group overflow-hidden h-80 md:h-96 fade-in" style={{ transitionDelay: service.delay }}>
                {/* Image with zoom effect only on desktop hover */}
                <img
                  src={service.img}
                  alt={service.id}
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                />

                {/* Overlay: Always visible on mobile, Hover-only on Desktop */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 transition-opacity duration-500 text-center bg-black/50 md:bg-black/0 md:opacity-0 md:group-hover:bg-black/70 md:group-hover:opacity-100">
                  <h3 className="font-serif text-2xl font-bold mb-2">{t(service.tTitle)}</h3>
                  <p className="mb-4 text-sm opacity-90">{t(service.tText)}</p>
                  <Link href="/services" className="inline-block bg-beige-600 hover:bg-beige-700 text-white py-2 px-6 rounded-sm text-sm font-medium transition-colors">
                    {t('servicePreviewSeeMore')}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in">
            <Link href="/services" className="border border-beige-600 text-beige-600 hover:bg-beige-50 px-8 py-3 rounded-sm font-medium transition-all inline-block">
              {t('servicesPreviewExploreAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION : GALERIE PREVIEW --- */}
      <section id="gallery-preview" className="py-12 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              dangerouslySetInnerHTML={{ __html: t('galleryPreviewTitle') }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('galleryPreviewIntro')}
            </p>
          </div>

          <div className="gallery-preview-carousel-outer-container overflow-hidden w-full py-4 mb-8 fade-in" style={{ transitionDelay: '0.1s' }}>
            <div className="gallery-preview-carousel-inner-container whitespace-nowrap">
              <div className="gallery-preview-set inline-flex animate-scroll-gallery-preview items-stretch">
                {[...data.gallery, ...data.gallery].map((src, index) => (
                  <img key={index} src={src} alt="Aperçu Galerie" className="h-64 md:h-64 object-cover" />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center fade-in" style={{ transitionDelay: '0.5s' }}>
            <Link href="/galerie" className="border border-beige-600 text-beige-600 hover:bg-beige-50 px-8 py-3 rounded-sm font-medium transition inline-block">
              {t('galleryPreviewVisitFull')}
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION : VISITE VIRTUELLE --- */}
      <section id="visite-virtuelle" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              dangerouslySetInnerHTML={{ __html: t('virtualTourTitle') }}
            />
            <p className="text-dark-600 max-w-2xl mx-auto">
              {t('virtualTourIntro')}
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-beige-50 rounded-xl shadow-xl overflow-hidden fade-in" style={{ transitionDelay: '0.1s' }}>
            <img className="w-full object-cover" src="/images/front/im_front.png" alt="Aperçu visite 360" />
            <div className="p-8 text-center">
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-4">{t('virtualTourCardTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('virtualTourCardText')}
              </p>
              <a href="https://app.aio360.ma/bien-etre-esthetique-coiffure/soins-beaute-feminine/salon/rabat/onhair/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark inline-flex items-center justify-center bg-beige-600 hover:bg-beige-700 px-8 py-4 rounded-sm font-semibold text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg text-dark">
                <FaVrCardboard className="mr-3 text-xl" /> {t('virtualTourButton')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION : ÉQUIPE --- */}
      <section id="team-presentation" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              dangerouslySetInnerHTML={{ __html: t('teamTitle') }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('teamIntro')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.team.map((member, index) => (
              <div key={index} className="bg-beige-50 rounded-xl shadow-lg p-6 text-center fade-in slide-up hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300" style={{ transitionDelay: member.delay }}>
                <img src={member.img} alt={t(member.tTitle)} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-md" />
                <h3 className="font-serif text-2xl font-bold mb-2">{t(member.tTitle)}</h3>
                <p className="text-beige-600 font-medium mb-3">{t(member.tRole)}</p>
                <p className="text-gray-600 text-sm mb-4">{t(member.tBio)}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-beige-600 transition">
                    <FaInstagram className="text-2xl" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION : TÉMOIGNAGES --- */}
      <section id="testimonials-content" className="py-12 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              dangerouslySetInnerHTML={{ __html: t('testimonialsTitle') }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('testimonialsIntro')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.testimonials.map((testi, index) => (
              <div key={index} className="p-6 rounded-xl testimonial-card shadow-md fade-in bg-white" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center mb-6">
                  <img src="/images/la-personne.png" alt="Client" className="w-16 h-16 rounded-full object-cover" />
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">{testi.name}</h4>
                    <div className="flex text-beige-600">
                      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  {t(testi.tText)}
                </p>
                <div className={testi.mt}>
                  <a href={data.googleLink} target="_blank" rel="noopener noreferrer" className="border border-black bg-beige-600 hover:bg-beige-700 text-dark px-5 py-2 rounded-sm font-medium transition text-sm shadow-sm hover:shadow-md inline-flex items-center">
                    <FaGoogle className="mr-3" /> {t('testimonialsGoogleButton')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION : PARTENAIRES --- */}
      <section id="partner-logos" className="py-16 bg-white fade-in">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12">
            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              dangerouslySetInnerHTML={{ __html: t('partnersTitle') }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('partnersIntro')}
            </p>
          </div>

          <div className="relative group">
            {/* Ajout du ref pour activer le scroll via les boutons */}
            <div ref={partnerScrollRef} className="partner-logos-outer-container overflow-x-auto w-full py-4 scrollbar-hide">
              <div className="partner-logos-inner-container whitespace-nowrap">
                <div className="partner-logo-set inline-flex animate-scroll-logos items-center">
                  {[...data.partners, ...data.partners].map((logo, index) => (
                    <img key={index} src={logo} alt={`Partenaire ${index}`} className="h-44 md:h-40 mx-4 md:mx-6 filter grayscale hover:grayscale-0 transition-all duration-300" />
                  ))}
                </div>
              </div>
            </div>

            {/* Boutons fonctionnels avec la méthode scrollPartners */}
            <button
              onClick={() => scrollPartners('left')}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none z-10 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scrollPartners('right')}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none z-10 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
