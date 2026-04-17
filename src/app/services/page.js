"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext'; // 1. L'import du système de traduction
import { FaConciergeBell } from 'react-icons/fa'; // Import propre de l'icône

// 1. BASE DE DONNÉES DES SERVICES
// Toutes tes données sont centralisées ici. Ultra facile à modifier plus tard ou à connecter à un CMS !
const servicesData = [
    {
        id: "serviceCategoryCoiffure", title: "COIFFURE", tTitle: "serviceCategoryCoiffure",
        note: "*à déduire de toutes prestations techniques + à partir de",
        items: [
            { title: "Brushing", price: "50 dh", tTitle: "serviceBrushingTitle" },
            { title: "SHP+ Masque+ Brushing", price: "70 dh", tTitle: "serviceShampooMaskBrushingTitle" },
            { title: "SHP spécifique+Masque traitant+ Brush", price: "100 dh", tTitle: "serviceSpecificShampooMaskBrushingTitle" },
            { title: "Wavy", price: "100 dh", tTitle: "serviceWavyTitle" },
            { title: "Wavy + SHP+ Masque", price: "120 dh" }, // Pas de tTitle, s'affichera par défaut
            { title: "Coupe correction et pointes", price: "140 dh", tTitle: "serviceCutTitle" },
            { title: "Coupe transformation", price: "+250 dh", tTitle: "serviceTransformationCutTitle" },
            { title: "Coupe enfant", price: "100 dh" }, // Pas de tTitle, s'affichera par défaut
            { title: "Consultation et diagnostique", price: "200 dh", tTitle: "serviceConsultationDiagnosisTitle" },
            { title: "Diagnostique et mèche test*", price: "300 dh", tTitle: "serviceDiagnosisStrandTestTitle" },
        ]
    },
    {
        id: "serviceCategoryColoration", title: "COLORATION", tTitle: "serviceCategoryColoration",
        items: [
            { title: "Coloration", price: "350 dh", tTitle: "serviceColoringTitle" },
            { title: "Coloration sans ammoniaque", price: "400 dh", tTitle: "serviceAmmoniaFreeColoringTitle" },
            { title: "Coloration racines", price: "250 dh", tTitle: "serviceRootColoringTitle" },
            { title: "Coloration racines sans ammoniaque", price: "300 dh", tTitle: "serviceAmmoniaFreeRootColoringTitle" },
            { title: "Rinçage et correction de couleur", price: "300 dh", tTitle: "serviceRinseColorCorrectionTitle" },
            { title: "Reflets Highlight", price: "+750 dh", tTitle: "serviceHighlightsTitle" },
            { title: "Ombré", price: "+1200 dh", tTitle: "serviceOmbreTitle" },
            { title: "Balayage", price: "+1000 dh", tTitle: "serviceBalayageTitle" },
            { title: "Airtouch", price: "+1500 dh", tTitle: "serviceAirtouchTitle" },
        ]
    },
    {
        id: "serviceCategoryHairCare", title: "SOINS DE CHEVEUX", tTitle: "serviceCategoryHairCare",
        items: [
            { title: "Soin ON h’AIR", price: "250 dh", tTitle: "serviceOnHairCareTitle" },
            { title: "Soin a base de PLEX", price: "350 dh", tTitle: "servicePlexCareTitle" },
            { title: "Soin COLLAGENE", price: "+700 dh", tTitle: "serviceCollagenCareTitle" },
            { title: "Soin PROTEINE", price: "+1000 dh", tTitle: "serviceProteinCareTitle" },
            { title: "Soin BRUSHING permanent", price: "750 dh", tTitle: "serviceTherapyCareTitle" },
            { title: "Soin semi permanent CURLY hair", price: "300 dh", tTitle: "serviceSemiPermanentCurlyCareTitle" },
            { title: "Soin permanent CURLY hair", price: "800 dh", tTitle: "servicePermanentCurlyCareTitle" },
        ]
    },
    {
        id: "serviceCategoryWaxing", title: "ÉPILATION", tTitle: "serviceCategoryWaxing",
        items: [
            { title: "Duvet", price: "20 dh", tTitle: "serviceUpperLipWaxTitle" },
            { title: "Sourcil", price: "30 dh", tTitle: "serviceEyebrowWaxTitle" },
            { title: "Menton", price: "15 dh", tTitle: "serviceChinWaxTitle" },
            { title: "Visage Complet", price: "80 dh", tTitle: "serviceFullFaceWaxTitle" },
            { title: "Bras", price: "50 dh", tTitle: "serviceArmsWaxTitle" },
            { title: "Demis jambe", price: "50 dh", tTitle: "serviceHalfLegsWaxTitle" },
            { title: "Jambe complète", price: "100 dh", tTitle: "serviceFullLegsWaxTitle" },
            { title: "Aisselles", price: "30 dh", tTitle: "serviceUnderarmsWaxTitle" },
            { title: "Maillot", price: "70 dh", tTitle: "serviceBikiniWaxTitle" },
            { title: "Épilation complète", price: "280 dh", tTitle: "serviceFullBodyWaxTitle" },
        ]
    },
    {
        id: "serviceCategoryMassages", title: "MASSAGE", tTitle: "serviceCategoryMassages",
        items: [
            { title: "Massage Relaxant 30min", price: "200 dh", tTitle: "serviceRelaxingMassage30Title" },
            { title: "Massage Relaxant 45min", price: "250 dh", tTitle: "serviceRelaxingMassage45Title" },
            { title: "Massage Relaxant 60min", price: "300 dh", tTitle: "serviceRelaxingMassage60Title" },
            { title: "Massage Nuque et épaules 15min", price: "100 dh", tTitle: "serviceNeckShoulderMassage15Title" },
            { title: "Massage cranien et faciale 15min", price: "100 dh", tTitle: "serviceScalpFacialMassage15Title" },
            { title: "Massage des pieds 15min", price: "100 dh", tTitle: "serviceFootMassage15Title" },
        ]
    },
    {
        id: "serviceCategoryEyes", title: "YEUX", tTitle: "serviceCategoryEyes",
        items: [
            { title: "Faux cils", price: "80 dh", tTitle: "serviceFalseEyelashesTitle" },
            { title: "Coloration des sourcils", price: "40 dh", tTitle: "serviceEyebrowColoringTitle" },
        ]
    },
    {
        id: "serviceCategoryMakeup", title: "MAQUILLAGE", tTitle: "serviceCategoryMakeup",
        items: [
            { title: "Maquillage soirée", price: "300 dh", tTitle: "serviceEveningMakeupTitle" },
            { title: "Maquillage Fiançailles", price: "1000 dh", tTitle: "serviceEngagementMakeupTitle" },
            { title: "Maquillage de la mariée", price: "1500 dh", tTitle: "serviceBridalMakeupTitle" },
            { title: "Pack de la mariée", price: "4000 dh", tTitle: "serviceBridalPackageTitle" },
            { title: "Pack de la mariée avec accompagnement", price: "6000 dh", tTitle: "serviceBridalPackageWithSupportTitle" },
        ]
    },
    {
        id: "serviceCategoryNailsManucure", title: "MANUCURE", tTitle: "serviceCategoryNailsManucure", // Correction clé traduction
        items: [
            { title: "Pose vernis normal", price: "30 dh", tTitle: "serviceNormalPolishTitle" },
            { title: "Pose vernis permanent", price: "100 dh", tTitle: "servicePermanentPolishTitle" },
            { title: "Manucure classique", price: "80 dh", tTitle: "serviceClassicManicureTitle" },
            { title: "Manucure SPA", price: "150 dh", tTitle: "serviceSpaManicureTitle" },
            { title: "Manucure BIAB", price: "280 dh", tTitle: "serviceBiabManicureTitle" },
            { title: "Extension de gel (chablon / faux ongle)", price: "380 dh", tTitle: "serviceGelExtensionTitle" },
            { title: "Remplissage de gel", price: "180 dh", tTitle: "serviceGelRefillTitle" },
        ]
    },
    {
        id: "serviceCategoryNailsPedicure", title: "PEDICURE", tTitle: "serviceCategoryNailsPedicure", // Correction clé traduction
        items: [
            { title: "Pose vernis normal", price: "30 dh", tTitle: "serviceNormalPolishTitle" },
            { title: "Pose vernis permanent", price: "100 dh", tTitle: "servicePermanentPolishTitle" },
            { title: "Pédicure classique", price: "100 dh", tTitle: "serviceClassicPedicureTitle" },
            { title: "Pédicure SPA", price: "200 dh", tTitle: "serviceSpaPedicureTitle" },
            { title: "Pédicure BIAB", price: "250 dh", tTitle: "serviceBiabPedicureTitle" },
            { title: "Extention de Gel", price: "400 dh", tTitle: "serviceGelExtensionTitle" },
            { title: "Remplissage de Gel", price: "300 dh", tTitle: "serviceGelRefillTitle" },
        ]
    },
    {
        id: "serviceCategoryNailExtras", title: "EXTRA ONGLES", tTitle: "serviceCategoryNailExtras",
        items: [
            { title: "Nail Art", price: "50 / 100 dh", tTitle: "serviceNailArtTitle" },
            { title: "French", price: "70 dh", tTitle: "serviceFrenchTitle" },
            { title: "Babyboomer", price: "100 dh", tTitle: "serviceBabyBoomerTitle" },
            { title: "Faux Ongles avec permanent", price: "200 dh", tTitle: "serviceFalseNailsPermanentPolishTitle" },
            { title: "Chrome", price: "50 dh", tTitle: "serviceChromeNailsTitle" },
            { title: "Dépose vernis normal", price: "20 dh", tTitle: "serviceNormalPolishRemovalTitle" },
            { title: "Dépose vernis permanent", price: "50 dh", tTitle: "servicePermanentPolishRemovalTitle" },
            { title: "Dépose gel", price: "100 dh", tTitle: "serviceGelRemovalTitle" },
        ]
    },
    {
        id: "serviceCategoryFacials", title: "SOIN DE VISAGE", tTitle: "serviceCategoryFacials",
        items: [
            { title: "Soin purifiant", price: "300 dh", tTitle: "servicePurifyingFacialTitle" },
            { title: "Soin éclat", price: "500 dh", tTitle: "serviceRadianceFacialTitle" },
            { title: "Soin hydratant", price: "500 dh", tTitle: "serviceHydratingFacialTitle" },
        ]
    }
];

// 2. COMPOSANT REACT PRINCIPAL
export default function Services() {
    // 2A. Appel de la fonction de traduction
    const { t } = useLanguage(); 
    const [searchTerm, setSearchTerm] = useState("");

    // Fonction de scroll doux vers une catégorie
    const scrollToCategory = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100; // Ajuste si ton menu fixe cache le titre
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    // 2B. Logique de filtrage intelligente (Recherche dans la langue active)
    const filteredData = servicesData.map(category => {
        const filteredItems = category.items.filter(item => {
            // On traduit le titre avant de le comparer à la recherche
            const itemTitle = item.tTitle ? t(item.tTitle) : item.title;
            return itemTitle.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return { ...category, items: filteredItems };
    }).filter(category => category.items.length > 0);

    return (
        <section id="services-page" className="py-12 bg-beige-50 min-h-screen">
            <div className="container mx-auto px-4">

                {/* EN-TÊTE */}
                <div className="text-center mb-16 fade-in">
                    {/* dangerouslySetInnerHTML pour appliquer le HTML (ex: <span class="text-beige-600">) contenu dans la traduction */}
                    <h2 
                        className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4" 
                        dangerouslySetInnerHTML={{ __html: t('servicesPageTitle') }}
                    />
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('servicesPageIntro')}
                    </p>
                </div>

                {/* BOUTONS DE FILTRE (SCROLL) */}
                <div className="mb-8 flex flex-wrap gap-3 justify-center fade-in" style={{ transitionDelay: '0.1s' }}>
                    {[
                        { id: "serviceCategoryWaxing", tKey: "serviceCategoryWaxing" },
                        { id: "serviceCategoryMassages", tKey: "serviceCategoryMassages" },
                        { id: "serviceCategoryEyes", tKey: "serviceCategoryEyes" },
                        { id: "serviceCategoryMakeup", tKey: "serviceCategoryMakeup" },
                        { id: "serviceCategoryCoiffure", tKey: "serviceCategoryCoiffure" },
                        { id: "serviceCategoryColoration", tKey: "serviceCategoryColoration" },
                        { id: "serviceCategoryHairCare", tKey: "serviceCategoryHairCare" },
                        { id: "serviceCategoryNailsManucure", tKey: "serviceCategoryNailsManucure" },
                        { id: "serviceCategoryNailsPedicure", tKey: "serviceCategoryNailsPedicure" },
                        { id: "serviceCategoryNailExtras", tKey: "serviceCategoryNailExtras" },
                        { id: "serviceCategoryFacials", tKey: "serviceCategoryFacials" },
                    ].map(btn => (
                        <button
                            key={btn.id}
                            onClick={() => scrollToCategory(btn.id)}
                            className="service-filter-btn bg-beige-100 hover:bg-beige-600 hover:text-white text-beige-700 px-4 py-2 rounded-full font-medium shadow transition"
                        >
                            {t(btn.tKey)}
                        </button>
                    ))}
                </div>

                {/* BARRE DE RECHERCHE */}
                <div className="mb-10 fade-in">
                    <input
                        type="text"
                        placeholder={t('servicesSearchPlaceholder')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-beige-500 focus:border-beige-500 text-lg outline-none transition"
                    />
                </div>

                {/* CONTENEUR DES SERVICES */}
                <div id="services-list-container">
                    {filteredData.length > 0 ? (
                        filteredData.map(category => (
                            <div key={category.id} id={category.id} className="service-category mb-10 fade-in">
                                <h3 className="font-serif text-2xl font-bold text-beige-600 mb-4 uppercase">
                                    {category.tTitle ? t(category.tTitle) : category.title}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {category.items.map((item, index) => (
                                        <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl p-5 flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                                            <h4 className="font-bold text-gray-800 text-lg mb-4">
                                                {/* On affiche la version traduite si elle existe, sinon le titre de base */}
                                                {item.tTitle ? t(item.tTitle) : item.title}
                                            </h4>
                                            <div className="flex justify-between items-end">
                                                <span className="font-bold text-gray-900 text-2xl tracking-tighter">{item.price}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Affichage de la petite note si elle existe */}
                                {category.note && (
                                    <p className="text-xs text-gray-500 mt-3 ml-2 italic">{category.note}</p>
                                )}
                            </div>
                        ))
                    ) : (
                        /* MESSAGE SI AUCUN RÉSULTAT */
                        <div id="no-services-found" className="text-center py-10 text-gray-500 text-xl fade-in flex flex-col items-center">
                            <FaConciergeBell className="text-4xl mb-4 text-beige-400" />
                            <p>{t('servicesNoResults')}</p>
                            <button
                                onClick={() => setSearchTerm("")}
                                className="text-sm mt-4 text-beige-600 hover:underline font-semibold"
                            >
                                {/* Ce bouton réinitialise la recherche */}
                                {t('servicesPreviewExploreAll')}
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}