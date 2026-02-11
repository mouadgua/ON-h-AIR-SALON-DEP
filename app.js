        // Preloader
        window.addEventListener('load', function() {
            const preloader = document.querySelector('.preloader');
            setTimeout(() => {
                preloader.classList.add('fade-out');
            }, 1000);

            // Scroll to logo section on page load
            const logoSection = document.getElementById('logo-section-anchor');
            if (logoSection) {
                // Scroll immediately to the top of the logo section.
                logoSection.scrollIntoView({ block: 'start', behavior: 'auto' });
            }
        });
                // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenuLinks = mobileMenu.querySelectorAll('a.mobile-menu-link');
        const searchInput = document.getElementById('service-search-input');
        const servicesListContainer = document.getElementById('services-list-container');
        const noServicesFoundMessage = document.getElementById('no-services-found');
        const clearSearchLink = document.getElementById('clear-search-link');

        if (menuBtn && mobileMenu && closeMenuBtn) {
            menuBtn.addEventListener('click', function() {
                mobileMenu.classList.add('visible');
                document.body.style.overflow = 'hidden'; // Prevent body scroll when menu is open
            });

            closeMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.remove('visible');
                document.body.style.overflow = ''; // Restore body scroll
            });

            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('visible');
                    document.body.style.overflow = '';
                    // SPA navigation or smooth scroll will be handled by existing listeners
                });
            });
        }

        // Desktop Call Button Dropdown Toggle
        const dropdownCallBtn = document.getElementById('dropdown-call-btn');
        const callDropdownMenu = document.getElementById('call-dropdown-menu');

        if (dropdownCallBtn && callDropdownMenu) {
            dropdownCallBtn.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent the document click listener from closing it immediately
                callDropdownMenu.classList.toggle('hidden');
            });

            // Close the dropdown if the user clicks outside of it
            document.addEventListener('click', function(event) {
                if (!dropdownCallBtn.contains(event.target) && !callDropdownMenu.contains(event.target)) {
                    callDropdownMenu.classList.add('hidden');
                }
            });
        }

        
        // Scroll animations
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

        // SPA-like navigation & Smooth Scrolling
        const contentSections = document.querySelectorAll('.content-section');
        const spaNavLinks = document.querySelectorAll('a[data-target]');
        const mainNavbar = document.querySelector('nav');
        const contactDetailsSection = document.getElementById('booking-content');
        const pageFooter = document.querySelector('footer#contact');

        // Ajoute ce bloc pour que le bouton "À propos" SPA affiche la section accueil comme "Accueil"
        document.querySelectorAll('a[href="#about-content"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                showContentSection('accueil'); // Affiche la section accueil
                setTimeout(() => {
                    const aboutSection = document.getElementById('about-content');
                    if (aboutSection) {
                        window.scrollTo({
                            top: aboutSection.offsetTop - (mainNavbar ? mainNavbar.offsetHeight : 0) - 20,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
                if (mobileMenu.classList.contains('visible')) {
                    mobileMenu.classList.remove('visible');
                    document.body.style.overflow = '';
                }
            });
        });

        function showContentSection(targetId) {
            let sectionFound = false;
            contentSections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('hidden');
                    sectionFound = true;
                } else {
                    section.classList.add('hidden');
                }
            });

            // Ensure contact section is always before the footer
            if (contactDetailsSection && pageFooter) {
                pageFooter.before(contactDetailsSection);
            }

            if (sectionFound && mainNavbar) {
                // Scroll to the top of the navbar or slightly below it
                window.scrollTo({
                    top: mainNavbar.offsetTop - 20, // 20px buffer above the navbar
                    behavior: 'smooth'
                });
            }
        }

        spaNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.dataset.target;
                showContentSection(targetId);

                // Close mobile menu if it's open (it should be closed by link click handler already)
                if (mobileMenu.classList.contains('visible')) {
                    mobileMenu.classList.remove('visible');
                    document.body.style.overflow = '';
                }
            });
        });

        // Initial section to show
        showContentSection('accueil');

        // Services Page Search Functionality
        function filterServices() {
            if (!searchInput || !servicesListContainer || !noServicesFoundMessage) {
                console.error("Search feature essential elements (searchInput, servicesListContainer, or noServicesFoundMessage) are missing from the DOM.");
                return;
            }

            const searchTerm = searchInput.value.toLowerCase().trim();
            const categories = servicesListContainer.querySelectorAll('.service-category');
            let anyServiceVisibleOverall = false;

            categories.forEach(category => {
                const serviceItems = category.querySelectorAll('.service-card, .service-item');
                let categoryHasVisibleService = false;

                serviceItems.forEach(item => {
                    const itemNameElement = item.querySelector('h4');
                    const itemDescriptionElement = item.querySelector('p.text-gray-600.text-sm.mb-2');

                    const itemName = itemNameElement ? itemNameElement.textContent.toLowerCase() : '';
                    const itemDescription = itemDescriptionElement ? itemDescriptionElement.textContent.toLowerCase() : '';

                    let isMatch = false;
                    if (searchTerm === "") {
                        isMatch = true; // Always show all if search is empty
                    } else {
                        const keywords = searchTerm.split(' ').filter(k => k.length > 0);
                        if (keywords.length === 0) {
                            isMatch = true;
                        } else {
                            for (const keyword of keywords) {
                                if (itemName.includes(keyword) || itemDescription.includes(keyword)) {
                                    isMatch = true;
                                    break;
                                }
                            }
                        }
                    }

                    if (isMatch) {
                        item.style.display = '';
                        categoryHasVisibleService = true;
                        anyServiceVisibleOverall = true;
                    } else {
                        item.style.display = 'none';
                    }
                });

                // Always show the category if search is empty, otherwise hide if no visible service
                if (category instanceof HTMLElement) {
                    category.style.display = (searchTerm === "" || categoryHasVisibleService) ? '' : 'none';
                }
            });

            // Show "no results" message only if there's a search term and no results
            if (noServicesFoundMessage instanceof HTMLElement) {
                noServicesFoundMessage.classList.toggle('hidden', anyServiceVisibleOverall || searchTerm === "");
            }
        }

        if (searchInput) {
            searchInput.addEventListener('input', filterServices);
        }

        if (clearSearchLink) {
            clearSearchLink.addEventListener('click', function(e) {
                e.preventDefault();
                if (searchInput) {
                    searchInput.value = '';
                }
                filterServices(); // Refresh the list
            });
        }


       


        const showAllServicesButtonOnServicesPage = document.getElementById('show-all-services-button');
        if (showAllServicesButtonOnServicesPage && searchInput) {
            showAllServicesButtonOnServicesPage.addEventListener('click', function() {
                if (searchInput) {
                    searchInput.value = '';
                }
                filterServices(); // Refresh the list; SPA navigation is handled by data-target
            });
        }

        // Smooth scrolling for true anchor links (not SPA triggers)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            if (!anchor.hasAttribute('data-target')) { // Only for non-SPA links
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    const targetElement = document.querySelector(targetId);
                    // Check if the target is within the currently active 'accueil' section
                    const accueilSection = document.getElementById('accueil');
                    if (targetElement && accueilSection && !accueilSection.classList.contains('hidden') && accueilSection.contains(targetElement)) {
                        window.scrollTo({ top: targetElement.offsetTop - mainNavbar.offsetHeight - 20, behavior: 'smooth' }); // Adjusted offset for internal links
                    } else if (targetElement) { // For other anchor links like #booking-content or #contact (footer)
                        window.scrollTo({ top: targetElement.offsetTop - mainNavbar.offsetHeight - 20 , behavior: 'smooth' }); // Adjusted for nav height
                    }

                    if (mobileMenu.classList.contains('visible')) {
                        mobileMenu.classList.remove('visible');
                        document.body.style.overflow = '';
                    }
                });
            }
        });

        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top-btn');

        if (backToTopButton) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 200) { // Show button after scrolling 200px
                    backToTopButton.classList.remove('hidden');
                    backToTopButton.classList.add('flex'); // Using flex for items-center justify-center
                } else {
                    backToTopButton.classList.add('hidden');
                    backToTopButton.classList.remove('flex');
                }
            });

            backToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

         // Partner Logos Carousel Arrows
        const partnerLogosOuterContainer = document.querySelector('.partner-logos-outer-container');
        const partnerScrollLeftBtn = document.getElementById('partner-scroll-left');
        const partnerScrollRightBtn = document.getElementById('partner-scroll-right');

        if (partnerLogosOuterContainer && partnerScrollLeftBtn && partnerScrollRightBtn) {
            const scrollAmount = 250; // Pixels to scroll, adjust as needed

            function updatePartnerArrowVisibility() {
                if (!partnerLogosOuterContainer) return;
                const tolerance = 2; // Small tolerance for scroll position calculation
                const canScrollLeft = partnerLogosOuterContainer.scrollLeft > tolerance;
                const canScrollRight = (partnerLogosOuterContainer.scrollWidth - partnerLogosOuterContainer.clientWidth - partnerLogosOuterContainer.scrollLeft) > tolerance;

                partnerScrollLeftBtn.style.display = canScrollLeft ? 'block' : 'none';
                partnerScrollRightBtn.style.display = canScrollRight ? 'block' : 'none';
            }

            partnerScrollLeftBtn.addEventListener('click', () => {
                partnerLogosOuterContainer.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });

            partnerScrollRightBtn.addEventListener('click', () => {
                partnerLogosOuterContainer.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });

            // Initial visibility check and update on scroll or resize
            updatePartnerArrowVisibility();
            partnerLogosOuterContainer.addEventListener('scroll', updatePartnerArrowVisibility);
            window.addEventListener('resize', updatePartnerArrowVisibility);

            // Ensure the hover effect for pausing animation targets the new relative parent
            const partnerCarouselWrapper = document.querySelector('#partner-logos .relative');
            const animatedLogoSet = partnerLogosOuterContainer.querySelector('.animate-scroll-logos');
            if (partnerCarouselWrapper && animatedLogoSet) {
                 // The CSS rule `.partner-logos-outer-container:hover .animate-scroll-logos` should be updated
                 // to `#partner-logos .relative:hover .animate-scroll-logos` if you want hover on arrows to pause too.
                 // Or, handle with JS if preferred, but CSS is often cleaner for hover states.
            }
        } else {
            console.error("Éléments du carrousel des partenaires non trouvés.");
        }


        // Image Lightbox Functionality
        const imageLightboxModal = document.getElementById('image-lightbox-modal');
        const lightboxImageContent = document.getElementById('lightbox-image-content');
        const imageLightboxCloseBtn = document.getElementById('image-lightbox-close-btn');
        const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
        const lightboxNextBtn = document.getElementById('lightbox-next-btn');
        const galleryImageTriggers = document.querySelectorAll('.gallery-lightbox-trigger');
        let currentImageIndex = 0;
        let allImageSources = [];

        if (imageLightboxModal && lightboxImageContent && imageLightboxCloseBtn && lightboxPrevBtn && lightboxNextBtn) {
            // Collect all image sources from the gallery triggers
            galleryImageTriggers.forEach(trigger => {
                if (trigger.dataset.src) {
                    allImageSources.push(trigger.dataset.src);
                }
            });

            galleryImageTriggers.forEach((trigger, index) => {
                trigger.addEventListener('click', () => {
                    const imageSrc = trigger.dataset.src;
                    if (imageSrc) {
                        currentImageIndex = allImageSources.indexOf(imageSrc); // Find index in the collected sources
                        lightboxImageContent.src = imageSrc;
                        imageLightboxModal.classList.remove('hidden');
                        document.body.style.overflow = 'hidden'; // Prevent body scroll
                        updateNavButtons();
                    }
                });
            });

            function updateNavButtons() {
                lightboxPrevBtn.style.display = (currentImageIndex > 0) ? 'block' : 'none';
                lightboxNextBtn.style.display = (currentImageIndex < allImageSources.length - 1) ? 'block' : 'none';
            }

            function showImageAtIndex(index) {
                if (index >= 0 && index < allImageSources.length) {
                    lightboxImageContent.src = allImageSources[index];
                    currentImageIndex = index;
                    updateNavButtons();
                }
            }

            lightboxPrevBtn.addEventListener('click', () => {
                showImageAtIndex(currentImageIndex - 1);
            });

            lightboxNextBtn.addEventListener('click', () => {
                showImageAtIndex(currentImageIndex + 1);
            });

            function closeImageLightbox() {
                imageLightboxModal.classList.add('hidden');
                lightboxImageContent.src = ""; // Clear src
                document.body.style.overflow = ''; // Restore body scroll
            }

            imageLightboxCloseBtn.addEventListener('click', closeImageLightbox);

            imageLightboxModal.addEventListener('click', (e) => {
                // Close if clicked on the background overlay, but not on the image/content itself
                if (e.target === imageLightboxModal) {
                    closeImageLightbox();
                }
            });
        } else {
            console.error("Éléments essentiels de la lightbox d'image (modal, content, close, prev, next) manquants dans le DOM.");
        }

        // Language Switcher Logic (Desktop and Mobile)
        // Ensure this runs after translate.js is loaded and its functions (setLanguage, initializeLanguage) are available.
        document.addEventListener('DOMContentLoaded', () => {
            // Desktop Language Switcher
            const desktopLangBtn = document.getElementById('dropdown-lang-btn');
            const desktopLangMenu = document.getElementById('lang-dropdown-menu');
            const desktopCurrentLangText = document.getElementById('current-lang-text');
            const desktopLangOptions = document.querySelectorAll('#lang-dropdown-menu .lang-option');

            if (desktopLangBtn && desktopLangMenu && desktopCurrentLangText) {
                desktopLangBtn.addEventListener('click', function(event) {
                    event.stopPropagation();
                    desktopLangMenu.classList.toggle('hidden');
                });

                document.addEventListener('click', function(event) {
                    if (!desktopLangBtn.contains(event.target) && !desktopLangMenu.contains(event.target)) {
                        desktopLangMenu.classList.add('hidden');
                    }
                });

                desktopLangOptions.forEach(option => {
                    option.addEventListener('click', function(e) {
                        e.preventDefault();
                        console.log('Langue choisie:', this.dataset.lang);
                        setLanguage(this.dataset.lang);
                    });
                });
            }
        })
        
        // Mobile language bubble logic
        const mobileLangBtn = document.getElementById('mobile-lang-btn');
        const mobileLangDropdown = document.getElementById('mobile-lang-dropdown');
        if (mobileLangBtn && mobileLangDropdown) {
            mobileLangBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                mobileLangDropdown.classList.toggle('hidden');
            });
            document.addEventListener('click', function(e) {
                if (!mobileLangBtn.contains(e.target) && !mobileLangDropdown.contains(e.target)) {
                    mobileLangDropdown.classList.add('hidden');
                }
            });
            mobileLangDropdown.querySelectorAll('.mobile-lang-option').forEach(option => {
                option.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (typeof setLanguage === 'function') setLanguage(this.dataset.lang);
                    mobileLangDropdown.classList.add('hidden');
                });
            });
        }
        document.querySelectorAll('.service-filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const target = document.querySelector(`[data-category-anchor="${this.dataset.target}"]`);
                if (target) {
                    const navbar = document.querySelector('nav');
                    const offset = navbar ? navbar.offsetHeight + 20 : 70;
                    window.scrollTo({
                        top: target.offsetTop - offset,
                        behavior: 'smooth'
                    });
                }
            });
        });
