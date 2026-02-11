 <!-- Dedicated Services Page (Initially Hidden) -->
    <section id="services-page" class="content-section hidden py-12 bg-beige-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16 fade-in">
                <h2 class="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-translate="servicesPageTitle">
                    Nos <span class="text-beige-600">services</span> exclusifs
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto" data-translate="servicesPageIntro">
                    Découvrez notre gamme complète de soins et traitements haut de gamme conçus pour sublimer votre beauté
                </p>
            </div>
            <!-- ...juste après <div class="text-center mb-16 fade-in"> dans #services-page... -->
            <div class="mb-8 flex flex-wrap gap-3 justify-center fade-in" style="transition-delay:0.1s;">
                <button class="service-filter-btn bg-beige-100 hover:bg-beige-600 hover:text-white text-beige-700 px-4 py-2 rounded-full font-medium shadow transition"
                        data-target="serviceCategoryWaxing"
                        data-translate="serviceCategoryWaxing">Épilation</button>
                <button class="service-filter-btn bg-beige-100 hover:bg-beige-600 hover:text-white text-beige-700 px-4 py-2 rounded-full font-medium shadow transition"
                        data-target="serviceCategoryMassages"
                        data-translate="serviceCategoryMassages">Massage</button>
                <button class="service-filter-btn bg-beige-100 hover:bg-beige-600 hover:text-white text-beige-700 px-4 py-2 rounded-full font-medium shadow transition"
                        data-target="serviceCategoryEyes"
                        data-translate="serviceCategoryEyes">Yeux</button>
                <button class="service-filter-btn bg-beige-100 hover:bg-beige-600 hover:text-white text-beige-700 px-4 py-2 rounded-full font-medium shadow transition"
                        data-target="serviceCategoryMakeup"
                        data-translate="serviceCategoryMakeup">Maquillage</button>
                <button class="service-filter-btn bg-beige-100 hover:bg-beige-600 hover:text-white text-beige-700 px-4 py-2 rounded-full font-medium shadow transition"
                        data-target="serviceCategoryCoiffure"
                        data-translate="serviceCategoryCoiffure">Coiffure</button>
                <button class="service-filter-btn bg-beige-100 hover:bg-beige-600 hover:text-white text-beige-700 px-4 py-2 rounded-full font-medium shadow transition"
                        data-target="serviceCategoryColoration"
                        data-translate="serviceCategoryColoration">Coloration</button>
                <button class="service-filter-btn bg-beige-100 hover:bg-beige-600 hover:text-white text-beige-700 px-4 py-2 rounded-full font-medium shadow transition"
                        data-target="serviceCategoryHairCare"
                        data-translate="serviceCategoryHairCare">Soins de cheveux</button>
                <button class="service-filter-btn bg-beige-100 hover:bg-beige-600 hover:text-white text-beige-700 px-4 py-2 rounded-full font-medium shadow transition"
                        data-target="serviceCategoryNailsManucure"
                        data-translate="serviceCategoryNailsManucure">Manucure</button>
                <button class="service-filter-btn bg-beige-100 hover:bg-beige-600 hover:text-white text-beige-700 px-4 py-2 rounded-full font-medium shadow transition"
                        data-target="serviceCategoryNailsPedicure"
                        data-translate="serviceCategoryNailsPedicure">Pédicure</button>
                <button class="service-filter-btn bg-beige-100 hover:bg-beige-600 hover:text-white text-beige-700 px-4 py-2 rounded-full font-medium shadow transition"
                        data-target="serviceCategoryNailExtras"
                        data-translate="serviceCategoryNailExtras">Extras Ongles</button>
                <button class="service-filter-btn bg-beige-100 hover:bg-beige-600 hover:text-white text-beige-700 px-4 py-2 rounded-full font-medium shadow transition"
                        data-target="serviceCategoryFacials"
                        data-translate="serviceCategoryFacials">Soin de visage</button>
            </div>
            <!-- Search Bar -->
            <div class="mb-10 fade-in">
                <input type="text" id="service-search-input" placeholder="Rechercher un service..." data-translate-placeholder="servicesSearchPlaceholder"
                       class="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-beige-500 focus:border-beige-500 text-lg">
            </div>

            <!-- Services List Container (injected from services.md) -->
            <div id="services-list-container">

                <!-- Coiffure-->
                <div class="service-category mb-10">
                    <h3 class="font-serif text-2xl font-bold text-beige-600 mb-4"
                    data-translate="serviceCategoryCoiffure"
                    data-category-anchor="serviceCategoryCoiffure">COIFFURE</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceBrushingTitle">Brushing</h4><span class="font-bold text-beige-600 text-lg">50 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceShampooMaskBrushingTitle">SHP+ Masque+ Brushing</h4><span class="font-bold text-beige-600 text-lg">70 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceSpecificShampooMaskBrushingTitle">SHP spécifique+Masque traitant+ Brush</h4><span class="font-bold text-beige-600 text-lg">100 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceWavyTitle">Wavy</h4><span class="font-bold text-beige-600 text-lg">100 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceWavyTitle">Wavy + SHP+ Masque</h4><span class="font-bold text-beige-600 text-lg">120 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceCutTitle">Coupe correction et pointes</h4><span class="font-bold text-beige-600 text-lg">140 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceTransformationCutTitle">Coupe transformation</h4><span class="font-bold text-beige-600 text-lg">+250 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2">Coup enfant</h4><span class="font-bold text-beige-600 text-lg">100 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceConsultationDiagnosisTitle">Consultation et diagnostique</h4><span class="font-bold text-beige-600 text-lg">200 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceDiagnosisStrandTestTitle">Diagnostique et mèche test*</h4><span class="font-bold text-beige-600 text-lg">300 dh</span></div>
                    </div>
                    <p class="text-xs text-gray-500 mt-2 ml-2">*à déduire de toutes prestations techniques + à partir de</p>
                </div>
                <!-- COLORATION -->
                <div class="service-category mb-10">
                    <h3 class="font-serif text-2xl font-bold text-beige-600 mb-4"
                    data-translate="serviceCategoryColoration"
                    data-category-anchor="serviceCategoryColoration">COLORATION</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceColoringTitle">Coloration</h4><span class="font-bold text-beige-600 text-lg">350 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceAmmoniaFreeColoringTitle">Coloration sans ammoniaque</h4><span class="font-bold text-beige-600 text-lg">400 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceRootColoringTitle">Coloration racines</h4><span class="font-bold text-beige-600 text-lg">250 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceAmmoniaFreeRootColoringTitle">Coloration racines sans ammoniaque</h4><span class="font-bold text-beige-600 text-lg">300 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceRinseColorCorrectionTitle">Rinçage et correction de couleur</h4><span class="font-bold text-beige-600 text-lg">300 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceHighlightsTitle">Reflets Highlight</h4><span class="font-bold text-beige-600 text-lg">+750 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceOmbreTitle">Ombré</h4><span class="font-bold text-beige-600 text-lg">+1200 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceBalayageTitle">Balayage</h4><span class="font-bold text-beige-600 text-lg">+1000 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceAirtouchTitle">Airtouch</h4><span class="font-bold text-beige-600 text-lg">+1500 dh</span></div>
                    </div>
                </div>
                <!-- SOINS DE CHEVEUX -->
                <div class="service-category mb-10">
                    <h3 class="font-serif text-2xl font-bold text-beige-600 mb-4"
                    data-translate="serviceCategoryHairCare"
                    data-category-anchor="serviceCategoryHairCare">SOINS DE CHEVEUX</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceOnHairCareTitle">Soin ON h’AIR</h4><span class="font-bold text-beige-600 text-lg">250 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="servicePlexCareTitle">Soin a base de PLEX</h4><span class="font-bold text-beige-600 text-lg">350 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceCollagenCareTitle">Soin COLLAGENE</h4><span class="font-bold text-beige-600 text-lg">+700 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceProteinCareTitle">Soin PROTEINE</h4><span class="font-bold text-beige-600 text-lg">+1000 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceTherapyCareTitle">Soin BRUSHING permanent</h4><span class="font-bold text-beige-600 text-lg">750 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceSemiPermanentCurlyCareTitle">Soin semi permanent CURLY hair</h4><span class="font-bold text-beige-600 text-lg">300 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="servicePermanentCurlyCareTitle">Soin permanent CURLY hair</h4><span class="font-bold text-beige-600 text-lg">800 dh</span></div>
                    </div>
                </div>
                <!-- ÉPILATION -->
                <div class="service-category mb-10">
                    <h3 class="font-serif text-2xl font-bold text-beige-600 mb-4"
                    data-translate="serviceCategoryWaxing"
                    data-category-anchor="serviceCategoryWaxing">ÉPILATION</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceUpperLipWaxTitle">Duvet</h4><span class="font-bold text-beige-600 text-lg">20 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceEyebrowWaxTitle">Sourcil</h4><span class="font-bold text-beige-600 text-lg">30 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceChinWaxTitle">Menton</h4><span class="font-bold text-beige-600 text-lg">15 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceFullFaceWaxTitle">Visage Complet</h4><span class="font-bold text-beige-600 text-lg">80 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceArmsWaxTitle">Bras</h4><span class="font-bold text-beige-600 text-lg">50 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceHalfLegsWaxTitle">Demis jambe</h4><span class="font-bold text-beige-600 text-lg">50 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceFullLegsWaxTitle">Jambe complète</h4><span class="font-bold text-beige-600 text-lg">100 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceUnderarmsWaxTitle">Aisselles</h4><span class="font-bold text-beige-600 text-lg">30 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceBikiniWaxTitle">Maillot</h4><span class="font-bold text-beige-600 text-lg">70 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceFullBodyWaxTitle">Épilation complète</h4><span class="font-bold text-beige-600 text-lg">280 dh</span></div>
                    </div>
                </div>
                <!-- MASSAGE -->
                <div class="service-category mb-10">
                    <h3 class="font-serif text-2xl font-bold text-beige-600 mb-4"
                        data-translate="serviceCategoryMassages"
                        data-category-anchor="serviceCategoryMassages">MASSAGE</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceRelaxingMassage30Title">Massage Relaxant 30min</h4><span class="font-bold text-beige-600 text-lg">200 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceRelaxingMassage45Title">Massage Relaxant 45min</h4><span class="font-bold text-beige-600 text-lg">250 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceRelaxingMassage60Title">Massage Relaxant 60min</h4><span class="font-bold text-beige-600 text-lg">300 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceNeckShoulderMassage15Title">Massage Nuque et épaules 15min</h4><span class="font-bold text-beige-600 text-lg">100 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceScalpFacialMassage15Title">Massage cranien et faciale 15min</h4><span class="font-bold text-beige-600 text-lg">100 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceFootMassage15Title">Massage des pieds 15min</h4><span class="font-bold text-beige-600 text-lg">100 dh</span></div>
                    </div>
                </div>
                <!-- YEUX -->
                <div class="service-category mb-10">
                    <h3 class="font-serif text-2xl font-bold text-beige-600 mb-4"
                    data-translate="serviceCategoryEyes"
                    data-category-anchor="serviceCategoryEyes">YEUX</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceFalseEyelashesTitle">Faux cils</h4><span class="font-bold text-beige-600 text-lg">80 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceEyebrowColoringTitle">Coloration des sourcils</h4><span class="font-bold text-beige-600 text-lg">40 dh</span></div>
                    </div>
                </div>
                <!-- MAQUILLAGE -->
                <div class="service-category mb-10">
                    <h3 class="font-serif text-2xl font-bold text-beige-600 mb-4"
                    data-translate="serviceCategoryMakeup"
                    data-category-anchor="serviceCategoryMakeup">MAQUILLAGE</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceEveningMakeupTitle">Maquillage soirée</h4><span class="font-bold text-beige-600 text-lg">300 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceEngagementMakeupTitle">Maquillage Fiançailles</h4><span class="font-bold text-beige-600 text-lg">1000 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceBridalMakeupTitle">Maquillage de la mariée</h4><span class="font-bold text-beige-600 text-lg">1500 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceBridalPackageTitle">Pack de la mariée</h4><span class="font-bold text-beige-600 text-lg">4000 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceBridalPackageWithSupportTitle">Pack de la mariée avec accompagnement</h4><span class="font-bold text-beige-600 text-lg">6000 dh</span></div>
                    </div>
                </div>
                <!-- MANUCURE -->
                <div class="service-category mb-10">
                    <h3 class="font-serif text-2xl font-bold text-beige-600 mb-4"
                    data-translate="serviceCategoryNails"
                    data-category-anchor="serviceCategoryNailsManucure">MANUCURE</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceNormalPolishTitle">Pose vernis normal</h4><span class="font-bold text-beige-600 text-lg">30 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="servicePermanentPolishTitle">Pose vernis permanent</h4><span class="font-bold text-beige-600 text-lg">100 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceClassicManicureTitle">Manucure classique</h4><span class="font-bold text-beige-600 text-lg">80 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceSpaManicureTitle">Manucure SPA</h4><span class="font-bold text-beige-600 text-lg">150 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceBiabManicureTitle">Manucure BIAB</h4><span class="font-bold text-beige-600 text-lg">280 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceGelExtensionTitle">Extension de gel (chablon / faux ongle)</h4><span class="font-bold text-beige-600 text-lg">380 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceGelRefillTitle">Remplissage de gel</h4><span class="font-bold text-beige-600 text-lg">180 dh</span></div>
                    </div>
                </div>
                <!-- PEDICURE -->
                <div class="service-category mb-10">
                    <h3 class="font-serif text-2xl font-bold text-beige-600 mb-4"
                    data-translate="serviceCategoryNails"
                    data-category-anchor="serviceCategoryNailsPedicure">PEDICURE</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceNormalPolishTitle">Pose vernis normal</h4><span class="font-bold text-beige-600 text-lg">30 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="servicePermanentPolishTitle">Pose vernis permanent</h4><span class="font-bold text-beige-600 text-lg">100 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceClassicPedicureTitle">Pédicure classique</h4><span class="font-bold text-beige-600 text-lg">100 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceSpaPedicureTitle">Pédicure SPA</h4><span class="font-bold text-beige-600 text-lg">200 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceBiabPedicureTitle">Pédicure BIAB</h4><span class="font-bold text-beige-600 text-lg">250 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceGelExtensionTitle">Extention de Gel</h4><span class="font-bold text-beige-600 text-lg">400 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceGelRefillTitle">Remplissage de Gel</h4><span class="font-bold text-beige-600 text-lg">300 dh</span></div>
                    </div>
                </div>
                <!-- EXTRA ONGLES -->
                <div class="service-category mb-10">
                    <h3 class="font-serif text-2xl font-bold text-beige-600 mb-4"
                    data-translate="serviceCategoryNailExtras"
                    data-category-anchor="serviceCategoryNailExtras">EXTRA ONGLES</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceNailArtTitle">Nail Art</h4><span class="font-bold text-beige-600 text-lg">50 / 100 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceFrenchTitle">French</h4><span class="font-bold text-beige-600 text-lg">70 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceBabyBoomerTitle">Babyboomer</h4><span class="font-bold text-beige-600 text-lg">100 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceFalseNailsPermanentPolishTitle">Faux Ongles avec permanent</h4><span class="font-bold text-beige-600 text-lg">200 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceChromeNailsTitle">Chrome</h4><span class="font-bold text-beige-600 text-lg">50 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceNormalPolishRemovalTitle">Dépose vernis normal</h4><span class="font-bold text-beige-600 text-lg">20dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="servicePermanentPolishRemovalTitle">Dépose vernis permanent</h4><span class="font-bold text-beige-600 text-lg">50dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceGelRemovalTitle">Dépose gel</h4><span class="font-bold text-beige-600 text-lg">100 dh</span></div>
                    </div>
                </div>
                <!-- SOIN DE VISAGE -->
                <div class="service-category mb-10">
                    <h3 class="font-serif text-2xl font-bold text-beige-600 mb-4"
                    data-translate="serviceCategoryFacials"
                    data-category-anchor="serviceCategoryFacials">SOIN DE VISAGE</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="servicePurifyingFacialTitle">Soin purifiant</h4><span class="font-bold text-beige-600 text-lg">300 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceRadianceFacialTitle">Soin éclat</h4><span class="font-bold text-beige-600 text-lg">500 dh</span></div>
                        <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between service-card"><h4 class="font-semibold mb-2" data-translate="serviceHydratingFacialTitle">Soin hydratant</h4><span class="font-bold text-beige-600 text-lg">500 dh</span></div>
                    </div>
                </div>
            </div>
            <!-- No services found message (hidden by default) -->
            <div id="no-services-found" class="text-center py-10 text-gray-500 text-xl hidden">
                    <i class="fas fa-concierge-bell fa-2x mb-4 text-beige-400"></i>
                    <p data-translate="servicesNoResults">Aucun service ne correspond à votre recherche.</p>
                    <p class="text-sm mt-2" data-translate="servicesNoResultsHint">Essayez un autre terme ou <a href="#" id="clear-search-link" class="text-beige-600 hover:underline">affichez tous les services</a>.</p>
                </div>
        </div>
    </section>