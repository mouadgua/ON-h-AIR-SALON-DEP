// ==========================================
// 1. DONNÉES ET RENDU DE L'ACCUEIL
// ==========================================
const initAccueil = () => {
    const data = {
        services: [
            { id: 'Coiffure', img: './images/service_preview/coiffure.jpg', delay: '0.2s', tTitle: 'servicePreviewCoiffureTitle', tText: 'servicePreviewCoiffureText', desc: 'Misez sur l’élégance, laissez parler votre style.' },
            { id: 'Coloration', img: './images/service_preview/coloration.jpg', delay: '0.3s', tTitle: 'servicePreviewColorationTitle', tText: 'servicePreviewColorationText', desc: 'Des nuances infinies, des résultats éclatants.' },
            { id: 'Esthétique', img: './images/service_preview/esthetique.JPG', delay: '0.4s', tTitle: 'servicePreviewEsthetiqueTitle', tText: 'servicePreviewEsthetiqueText', desc: 'Un moment rien que pour vous, un éclat qui dure.' },
            { id: 'nail bar', img: './images/service_preview/nailbar.JPG', delay: '0.1s', tTitle: 'servicePreviewNailBarTitle', tText: 'servicePreviewNailBarText', desc: 'Couleurs, formes et brillance à votre image.' }
        ],
        gallery: [
            "./gallerie/im59.jpg", "./gallerie/im63.jpg", "./gallerie/im55.jpg", "./gallerie/im49.jpeg", 
            "./gallerie/im68.jpg", "./gallerie/im38.JPG", "./gallerie/im54.jpg", "./gallerie/im9.jpeg", "./gallerie/im27.jpeg"
        ],
        team: [
            { name: 'Nabil', img: './images/NABIL.jpeg', delay: '0.1s', role: 'Coiffeur Styliste', tRole: 'teamNabilRole', bio: 'Artiste dans l’âme, je vois chaque chevelure comme une toile à sublimer...', tBio: 'teamNabilBio', tTitle: 'teamNabilTitle', link: 'https://www.instagram.com/nabilhaircare/' },
            { name: 'Fahd', img: './images/FAHD.jpeg', delay: '0.2s', role: 'Expert Coiffure', tRole: 'teamFahdRole', bio: 'Je m’appelle Fahd, coiffeur, coupeur et coloriste passionné. Avec plus de 27 ans d\'expérience...', tBio: 'teamFahdBio', tTitle: 'teamFahdTitle', link: 'https://www.instagram.com/fahd_coiff' },
            { name: 'Nezha', img: './images/NEZHA.jpeg', delay: '0.3s', role: 'Esthéticienne experte', tRole: 'teamNezhaRole', bio: 'Nazha issue d\'une formation russe, vous invite à découvrir un univers de soins où raffinement et expertise se rencontrent...', tBio: 'teamNezhaBio', tTitle: 'teamNezhaTitle', link: 'https://www.instagram.com/n_on_nails' }
        ],
        testimonials: [
            { name: 'Halima Lahbab', mt: 'mt-10', tText: 'testimonial3Text', text: '"Je suis venue dans ce salon après une mauvaise expérience ailleurs, et je ne pouvais pas être plus reconnaissante..."' },
            { name: 'Rim EL', mt: 'mt-4', tText: 'testimonial3Text', text: '"Je suis trop satisfaite de mon expérience de A à Z. L’accueil était chaleureux et super friendly..."' },
            { name: 'Oulfa Chlieh', mt: 'mt-4', tText: 'testimonial6Text', text: '"J’ai eu le plaisir de faire mes ongles chez Nezha. Elle est professionnelle, à l’écoute, donne d’excellents conseils..."' }
        ],
        googleLink: 'https://www.google.com/search?q=ON+h%27AIR+salon+Avis'
    };

    // Services
    const sCont = document.getElementById('js-services-container');
    if(sCont) sCont.innerHTML = data.services.map(s => `
        <div class="relative group overflow-hidden h-80 md:h-96 fade-in" style="transition-delay: ${s.delay};">
            <img src="${s.img}" alt="${s.id}" class="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110">
            <div class="absolute inset-0 flex flex-col items-center justify-center text-white p-6 transition-all duration-500 text-center bg-black bg-opacity-60 opacity-100 md:bg-opacity-0 md:opacity-0 md:group-hover:bg-opacity-70 md:group-hover:opacity-100">
                <h3 class="font-serif text-2xl font-bold mb-2" data-translate="${s.tTitle}">${s.id}</h3>
                <p class="mb-4 text-sm" data-translate="${s.tText}">${s.desc}</p>
                <a href="javascript:void(0)" onclick="loadPage('services-page')" class="inline-block bg-beige-600 hover:bg-beige-700 text-white py-2 px-4 rounded-sm text-sm font-medium transition" data-translate="servicePreviewSeeMore">Voir plus</a>
            </div>
        </div>
    `).join('');

    // Galerie
    const gCont = document.getElementById('js-gallery-container');
    if(gCont) {
        const gHtml = data.gallery.map(src => `<img src="${src}" alt="Galerie" class="h-64 md:h-64 object-cover">`).join('');
        gCont.innerHTML = gHtml + gHtml;
    }

    // Equipe
    const tCont = document.getElementById('js-team-container');
    if(tCont) tCont.innerHTML = data.team.map(t => `
        <div class="bg-beige-50 rounded-xl shadow-lg p-6 text-center fade-in slide-up hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300" style="transition-delay: ${t.delay};">
            <img src="${t.img}" alt="${t.name}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-md">
            <h3 class="font-serif text-2xl font-bold mb-2" data-translate="${t.tTitle}">${t.name}</h3>
            <p class="text-beige-600 font-medium mb-3" data-translate="${t.tRole}">${t.role}</p>
            <p class="text-gray-600 text-sm mb-4" data-translate="${t.tBio}">${t.bio}</p>
            <a href="${t.link}" class="text-gray-500 hover:text-beige-600"><i class="fab fa-instagram fa-lg"></i></a>
        </div>
    `).join('');

    // Temoignages
    const testCont = document.getElementById('js-testimonials-container');
    const stars = `<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`.repeat(5);
    if(testCont) testCont.innerHTML = data.testimonials.map(t => `
        <div class="p-6 rounded-xl testimonial-card shadow-md fade-in" style="transition-delay: 0.1s">
            <div class="flex items-center mb-6">
                <img src="./images/la-personne.png" class="w-16 h-16 rounded-full object-cover">
                <div class="ml-4"><h4 class="font-bold text-gray-800">${t.name}</h4><div class="flex text-beige-600">${stars}</div></div>
            </div>
            <p class="text-gray-600 italic" data-translate="${t.tText}">${t.text}</p>
            <a href="${data.googleLink}" target="_blank" class="border border-black bg-beige-600 hover:bg-beige-700 text-dark px-5 py-1 rounded-sm font-medium transition ${t.mt} text-sm shadow-sm inline-block"><i class="fab fa-google mr-2"></i>Avis Google</a>
        </div>
    `).join('');

    // Partenaires
    const pCont = document.getElementById('js-partners-container');
    if(pCont) {
        let pHtml = '';
        for(let i=1; i<=21; i++) pHtml += `<img src="./images/partenaires/par${i}.png" class="h-44 md:h-40 mx-4 md:mx-6 filter grayscale hover:grayscale-0 transition-all duration-300">`;
        pCont.innerHTML = pHtml + pHtml;
    }
};

// ==========================================
// 2. ROUTEUR SPA (CHARGEMENT DYNAMIQUE)
// ==========================================
async function loadPage(pageName) {
    const wrapper = document.getElementById('page-content-wrapper');
    const mainNavbar = document.querySelector('nav');
    wrapper.style.opacity = '0.5';

    try {
        const response = await fetch(`./main/${pageName}.php`);
        if (!response.ok) throw new Error('Page introuvable');
        const html = await response.text();
        
        // Injection du HTML
        wrapper.innerHTML = html;
        wrapper.style.opacity = '1';

        // Mettre à jour l'URL sans recharger
        window.history.pushState({page: pageName}, "", `#${pageName}`);

        // Relancer les scripts selon la page
        if (pageName === 'accueil') initAccueil();
        if (pageName === 'gallery-page' && typeof renderGallery === 'function') renderGallery();
        
        // Relancer les composants globaux sur le nouveau HTML
        initScrollAnimations();
        initLightbox();
        initPartnerCarousel();
        initSearchAndFilters();

        // Relancer la traduction
        if (window.translatePage) window.translatePage();

        // Scroll en haut
        window.scrollTo({ top: mainNavbar ? mainNavbar.offsetTop - 20 : 0, behavior: 'smooth' });

    } catch (error) {
        console.error("Erreur SPA:", error);
        wrapper.style.opacity = '1';
    }
}

// Gestion du bouton "Retour" du navigateur
window.onpopstate = function(event) {
    if (event.state && event.state.page) {
        loadPage(event.state.page);
    } else {
        loadPage('accueil');
    }
};

// ==========================================
// 3. FONCTIONS D'INITIALISATION (COMPOSANTS)
// ==========================================

function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in, .slide-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    fadeElements.forEach(element => observer.observe(element));
}

function initPartnerCarousel() {
    const container = document.querySelector('.partner-logos-outer-container');
    const leftBtn = document.getElementById('partner-scroll-left');
    const rightBtn = document.getElementById('partner-scroll-right');

    if (container && leftBtn && rightBtn) {
        const updateArrows = () => {
            leftBtn.style.display = container.scrollLeft > 2 ? 'block' : 'none';
            rightBtn.style.display = (container.scrollWidth - container.clientWidth - container.scrollLeft) > 2 ? 'block' : 'none';
        };
        leftBtn.onclick = () => container.scrollBy({ left: -250, behavior: 'smooth' });
        rightBtn.onclick = () => container.scrollBy({ left: 250, behavior: 'smooth' });
        container.addEventListener('scroll', updateArrows);
        window.addEventListener('resize', updateArrows);
        updateArrows();
    }
}

function initLightbox() {
    const modal = document.getElementById('image-lightbox-modal');
    const imgContent = document.getElementById('lightbox-image-content');
    const closeBtn = document.getElementById('image-lightbox-close-btn');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');
    const triggers = document.querySelectorAll('.gallery-lightbox-trigger');
    
    let currentIdx = 0;
    let sources = Array.from(triggers).map(t => t.dataset.src).filter(Boolean);

    if (modal && triggers.length > 0) {
        triggers.forEach((trigger, index) => {
            // Remove old listeners by cloning (if needed) to avoid duplicates, or just overwrite onclick
            trigger.onclick = () => {
                const src = trigger.dataset.src;
                if (src) {
                    currentIdx = sources.indexOf(src);
                    imgContent.src = src;
                    modal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                    prevBtn.style.display = currentIdx > 0 ? 'block' : 'none';
                    nextBtn.style.display = currentIdx < sources.length - 1 ? 'block' : 'none';
                }
            };
        });

        prevBtn.onclick = () => triggers[currentIdx - 1]?.click();
        nextBtn.onclick = () => triggers[currentIdx + 1]?.click();
        
        const closeModal = () => {
            modal.classList.add('hidden');
            imgContent.src = "";
            document.body.style.overflow = '';
        };
        
        closeBtn.onclick = closeModal;
        modal.onclick = (e) => { if (e.target === modal) closeModal(); };
    }
}

function initSearchAndFilters() {
    const searchInput = document.getElementById('service-search-input');
    const container = document.getElementById('services-list-container');
    const noMatchMsg = document.getElementById('no-services-found');

    if (searchInput && container) {
        searchInput.oninput = () => {
            const term = searchInput.value.toLowerCase().trim();
            let anyVisible = false;

            container.querySelectorAll('.service-category').forEach(cat => {
                let catVisible = false;
                cat.querySelectorAll('.service-card, .service-item').forEach(item => {
                    const text = item.textContent.toLowerCase();
                    const match = term === "" || term.split(' ').some(k => text.includes(k));
                    item.style.display = match ? '' : 'none';
                    if (match) { catVisible = true; anyVisible = true; }
                });
                cat.style.display = catVisible ? '' : 'none';
            });
            if(noMatchMsg) noMatchMsg.classList.toggle('hidden', anyVisible || term === "");
        };
    }
}

// ==========================================
// 4. INITIALISATION GLOBALE (AU CHARGEMENT)
// ==========================================
window.addEventListener('load', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    if(preloader) setTimeout(() => preloader.classList.add('fade-out'), 1000);

    // Initialiser l'accueil et les composants pour la première fois
    initAccueil();
    initScrollAnimations();
    initPartnerCarousel();
    initLightbox();
    initSearchAndFilters();

    // Menu Mobile
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.onclick = () => {
            mobileMenu.classList.add('visible');
            document.body.style.overflow = 'hidden';
        };
        document.getElementById('close-menu-btn').onclick = () => {
            mobileMenu.classList.remove('visible');
            document.body.style.overflow = '';
        };
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.onclick = () => {
                mobileMenu.classList.remove('visible');
                document.body.style.overflow = '';
            };
        });
    }

    // Dropdown Tel & Langues
    const setupDropdown = (btnId, menuId) => {
        const btn = document.getElementById(btnId);
        const menu = document.getElementById(menuId);
        if(btn && menu) {
            btn.onclick = (e) => { e.stopPropagation(); menu.classList.toggle('hidden'); };
            document.addEventListener('click', (e) => {
                if (!btn.contains(e.target) && !menu.contains(e.target)) menu.classList.add('hidden');
            });
        }
    };
    setupDropdown('dropdown-call-btn', 'call-dropdown-menu');
    setupDropdown('dropdown-lang-btn', 'lang-dropdown-menu');
    setupDropdown('mobile-lang-btn', 'mobile-lang-dropdown');

    // Bouton retour en haut
    const bttBtn = document.getElementById('back-to-top-btn');
    if(bttBtn) {
        window.onscroll = () => {
            bttBtn.classList.toggle('hidden', window.scrollY <= 200);
            bttBtn.classList.toggle('flex', window.scrollY > 200);
        };
        bttBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});