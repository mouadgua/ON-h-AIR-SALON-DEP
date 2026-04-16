<!-- Promotion Bar -->
    <div class="promotion-bar">
        <div class="promotion-text-wrapper" data-translate="promoOffer">
            <!-- Add your promotional messages here. Duplicate for seamless scroll -->
            <span>🎉 Offre Spéciale: -10% sur votre première visite! ✨ Réservez dès maintenant! </span>
            <span>🎉 Offre Spéciale: -10% sur votre première visite! ✨ Réservez dès maintenant! </span>
            <span>🎉 Offre Spéciale: -10% sur votre première visite! ✨ Réservez dès maintenant! </span>
            <span>🎉 Offre Spéciale: -10% sur votre première visite! ✨ Réservez dès maintenant! </span>
        </div>
    </div>

    <!-- Preloader -->
    <div class="preloader">
        <div class="spinner"></div>
    </div>

    <!-- Mobile Menu (Full Screen Overlay - Moved here) -->
    <div id="mobile-menu" class="md:hidden"> <!-- md:hidden to hide on medium screens and up via Tailwind -->
        <button id="close-menu-btn" class="absolute top-10 right-5 text-gray-700 hover:text-beige-600 p-2 z-[61]">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div class="flex flex-col items-center space-y-6 text-center">
            <a href="#" data-target="accueil" class="mobile-menu-link text-3xl font-medium text-gray-800 hover:text-beige-600 transition-colors" data-translate="navAccueil" onclick="loadPage('accueil')">Accueil</a>
            <a href="#about-content" data-target="accueil" class="mobile-menu-link text-3xl font-medium text-gray-800 hover:text-beige-600 transition-colors" data-translate="navAPropos">À propos</a>
            <a href="#" data-target="services-page" class="mobile-menu-link text-3xl font-medium text-gray-800 hover:text-beige-600 transition-colors" data-translate="navServices" onclick="loadPage('accueil')">Services</a>
            <a href="#" data-target="gallery-page" class="mobile-menu-link text-3xl font-medium text-gray-800 hover:text-beige-600 transition-colors" data-translate="navGalerie" onclick="loadPage('accueil')">Galerie</a>
            <a href="#booking-content" class="mobile-menu-link text-3xl font-medium text-gray-800 hover:text-beige-600 transition-colors" data-translate="navContact">Contact</a>
        </div>
        <a href="tel:+212669577172" class="mt-12 bg-black text-white hover:bg-gray-700 px-8 py-3 md:px-10 md:py-4 rounded-lg text-lg md:text-xl font-semibold flex items-center justify-center shadow-lg transition-transform hover:scale-105">
            <i class="fas fa-phone mr-2 md:mr-3"></i>Nabil - +212669577172
        </a>
        <a href="tel:+212678915564" class="mt-4 bg-black text-white hover:bg-gray-700 px-8 py-2 md:px-10 md:py-4 rounded-lg text-lg md:text-xl font-semibold flex items-center justify-center shadow-lg transition-transform hover:scale-105">
            <i class="fas fa-phone mr-2 md:mr-3"></i>Fahd - +212678915564
        </a>
    </div>


    <!-- Fixed Top Right Elements (for Mobile Menu Button) -->
    <div id="fixed-top-right-elements" class="fixed top-[45px] right-4 z-50">
        <!-- Mobile menu button (moved here) -->
        <div class="md:hidden">
            <button class="text-gray-700 bg-white p-2 rounded-md shadow-md focus:outline-none" id="menu-btn">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
        <!-- Ajoutez la bulle de langue ici -->
        <div id="mobile-lang-bubble" class="md:hidden fixed top-[100px] right-4 z-50">
            <button class="bg-beige-600 hover:bg-beige-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all font-bold text-lg" id="mobile-lang-btn" aria-label="Changer la langue">
                <i class="fas fa-globe"></i>
            </button>
            <!-- Menu déroulant langue mobile -->
            <div id="mobile-lang-dropdown" class="absolute top-14 right-0 bg-white rounded-lg shadow-lg py-2 px-2 hidden">
                <button class="mobile-lang-option block w-full text-gray-800 hover:text-beige-600 font-medium py-2 px-4 text-left" data-lang="fr">
                    🇫🇷 Français
                </button>
                <button class="mobile-lang-option block w-full text-gray-800 hover:text-beige-600 font-medium py-2 px-4 text-left" data-lang="en">
                    🇬🇧 English
                </button>
            </div>
        </div>
    </div>

    <!-- Fixed Bottom Left Social Media Bubbles -->
    <div id="social-media-bubbles" class="fixed bottom-4 left-4 flex flex-col space-y-3 items-start">
        <a href="https://www.instagram.com/onhair_maroc/" target="_blank"
           class="text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl"
           style="background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);"
           aria-label="Instagram">
            <i class="fab fa-instagram text-xl sm:text-2xl"></i>
        </a>
        <a href="https://wa.me/212669577172" target="_blank" class="bg-green-500 hover:bg-green-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl" aria-label="WhatsApp">
            <i class="fab fa-whatsapp text-xl sm:text-2xl"></i>
        </a>
        <a href="https://www.google.com/search?q=ON+h%27AIR+salon" target="_blank"
           class="bg-white hover:bg-gray-100 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl"
           aria-label="Google">
            <!-- SVG Google Logo -->
            <svg class="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                <path d="M1 1h22v22H1z" fill="none"/>
            </svg>
        </a>
    </div>
    <!-- Logo Display Area -->
    <div id="logo-section-anchor" class="bg-black pt-10 md:pt-10 pb-10 relative overflow-hidden">
        <!-- Conteneur pour centrer le logo et le slogan -->
        <div class="w-full flex flex-col items-center text-center">
            <div class="relative inline-block">
                <!-- Logo Principal -->
                <div class="logo-shiny relative z-10"> <!-- Assurez-vous que logo-shiny a position:relative et z-index pour être au-dessus -->
                    <a href="index.html"><img src="./images/OH/log-shiny-blanc.png" alt="Éclat Beauté Logo" class="mx-auto w-[500px] md:w-[500px] h-auto fade-in"></a>
                </div>
            </div>
            <!-- Slogan -->
            <p class="text-white font-serif italic text-3xl md:text-4xl mt-4 fade-in" style="transition-delay: 0.1s;color: #AC9362;" data-translate="slogan">
                “ VOUS AVANT TOUT ”
            </p>
        </div>
    </div>

    <!-- Navigation (Moved here and modified) -->
    <nav class="w-full bg-white shadow-md ">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center w-full">
                <!-- Brand name removed -->

                <!-- Desktop Menu takes the full width available if no mobile button here -->
                <!-- Desktop Menu -->
                <div class="hidden md:grid md:grid-cols-5 md:gap-3 flex-auto items-center">
                    <a href="#" data-target="accueil" class="nav-link text-gray-700 hover:text-beige-600 hover:bg-beige-100 transition block py-2 px-3 text-center border border-beige-300 rounded-sm" data-translate="navAccueil">Accueil</a>
                    <a href="#about-content" data-target="accueil" class="nav-link text-gray-700 hover:text-beige-600 hover:bg-beige-100 transition block py-2 px-3 text-center border border-beige-300 rounded-sm" data-translate="navAPropos">À propos</a>
                    <a href="#" data-target="services-page" class="nav-link text-gray-700 hover:text-beige-600 hover:bg-beige-100 transition block py-2 px-3 text-center border border-beige-300 rounded-sm" data-translate="navServices">Services</a>
                    <a href="#" data-target="gallery-page" class="nav-link text-gray-700 hover:text-beige-600 hover:bg-beige-100 transition block py-2 px-3 text-center border border-beige-300 rounded-sm" data-translate="navGalerie">Galerie</a>
                    <a href="#booking-content" class="nav-link text-gray-700 hover:text-beige-600 hover:bg-beige-100 transition block py-2 px-3 text-center border border-beige-300 rounded-sm" data-translate="navContact">Contact</a>
                </div>

                <!-- Conteneur pour les boutons à droite (Appeler et Langue) -->
                <div class="hidden md:flex md:items-center md:ml-auto">
                    <!-- Desktop Call Button with Dropdown -->
                    <div class="relative">
                        <button id="dropdown-call-btn" class="bg-black text-white hover:bg-gray-700 border-black px-6 py-3 rounded-sm font-medium transition flex items-center focus:outline-none">
                            <i class="fas fa-phone mr-2"></i>
                            <span data-translate="navAppeler">Appeler</span>
                            <i class="fas fa-chevron-down ml-2 text-xs"></i>
                        </button>
                        <div id="call-dropdown-menu" class="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden z-50">
                            <a href="tel:+212669577172" class="block px-4 py-2 text-sm text-gray-700 hover:bg-beige-100 hover:text-beige-600">
                                Nabil: +212669577172
                            </a>
                            <a href="tel:+212678915564" class="block px-4 py-2 text-sm text-gray-700 hover:bg-beige-100 hover:text-beige-600">
                                Fahd: +212678915564
                            </a>
                        </div>
                    </div>
                    <!-- Language Switcher Dropdown -->
                    <div class="relative ml-4">
                        <button id="dropdown-lang-btn" class="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-3 rounded-sm font-medium transition flex items-center focus:outline-none">
                            <i class="fas fa-globe mr-2"></i>
                            <span id="current-lang-text">Français</span>
                            <i class="fas fa-chevron-down ml-2 text-xs"></i>
                        </button>
                        <div id="lang-dropdown-menu" class="absolute top-full right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 hidden z-50">
                            <a href="#" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-beige-100 hover:text-beige-600" data-lang="fr">Français</a>
                            <a href="#" class="lang-option block px-4 py-2 text-sm text-gray-700 hover:bg-beige-100 hover:text-beige-600" data-lang="en">English</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>