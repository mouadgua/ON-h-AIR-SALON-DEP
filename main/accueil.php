<section id="accueil" class="content-section">
    <section id="about-content" class="py-16 bg-white fade-in">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-translate="aboutTitle">
                    À Propos de <span class="text-beige-600">Notre salon</span>
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto" data-translate="aboutIntro">
                    Découvrez notre passion pour la beauté et l'excellence, au cœur d'un espace dédié à votre bien-être.
                </p>
            </div>

            <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div class="md:w-1/2 fade-in">
                    <img src="./gallerie/im47.jpeg" alt="Intérieur du salon Éclat Beauté" class="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]">
                </div>
                <div class="md:w-1/2 fade-in" style="transition-delay: 0.1s;">
                    <h3 class="font-serif text-2xl font-semibold text-gray-700 mb-4" data-translate="aboutCommitmentTitle">Notre Engagement envers Vous</h3>
                    <p class="text-gray-600 mb-6" data-translate="aboutCommitmentText">
                        Chez ON h'AIR salon, nous croyons que chaque personne mérite de se sentir belle et en confiance. Notre mission est de vous offrir des services de la plus haute qualité dans un environnement chaleureux et luxueux. Nous utilisons des produits de premier choix et des techniques innovantes pour révéler votre éclat naturel. Assurée par un processus professionnel et minutieux.
                    </p>
                    <div class="space-y-4 mb-8">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 text-beige-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <div class="ml-3">
                                <h4 class="text-lg font-medium text-gray-800" data-translate="aboutFeature1Title">Ambiance Luxueuse</h4>
                                <p class="text-gray-600" data-translate="aboutFeature1Text">Plongez dans un cadre élégant et apaisant, conçu par nous même pour votre détente absolue.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                 <svg class="w-6 h-6 text-beige-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <div class="ml-3">
                                <h4 class="text-lg font-medium text-gray-800" data-translate="aboutFeature2Title">Approche Personnalisée</h4>
                                <p class="text-gray-600" data-translate="aboutFeature2Text">Chaque soin est adapté à vos besoins spécifiques après un diagnostic , pour des résultats optimaux.</p>
                            </div>
                        </div>
                         <div class="flex items-start">
                            <div class="flex-shrink-0">
                                 <svg class="w-6 h-6 text-beige-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <div class="ml-3">
                                <h4 class="text-lg font-medium text-gray-800" data-translate="aboutFeature3Title">Experts Qualifiés</h4>
                                <p class="text-gray-600" data-translate="aboutFeature3Text">Notre équipe est composée de professionnels passionnés et hautement qualifiés.</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" data-target="services-page" class="inline-block bg-beige-600 hover:bg-beige-700 text-white px-8 py-3 rounded-sm font-medium transition" data-translate="aboutDiscoverServices">
                        Découvrir nos services
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="services-preview" class="py-12 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12 fade-in">
                <h2 class="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-translate="servicesPreviewTitle">
                    Nos <span class="text-beige-600">Services</span> en un coup d'œil
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto" data-translate="servicesPreviewIntro">
                    Découvrez un aperçu de nos soins exclusifs conçus pour votre bien-être.
                </p>
            </div>
            
            <div id="js-services-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"></div>

            <div class="text-center mt-12 fade-in" style="transition-delay: 0.5s;">
                <a href="#" data-target="services-page" class="border border-beige-600 text-beige-600 hover:bg-beige-50 px-8 py-3 rounded-sm font-medium transition inline-block" data-translate="servicesPreviewExploreAll">
                    Explorer tous nos services
                </a>
            </div>
        </div>
    </section>

    <section id="gallery-preview" class="py-12 bg-beige-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12 fade-in">
                <h2 class="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-translate="galleryPreviewTitle">
                    Un <span class="text-beige-600">aperçu</span> de notre galerie
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto" data-translate="galleryPreviewIntro">
                    Plongez dans l'atmosphère ON h'AIR à travers quelques clichés.
                </p>
            </div>
            
            <div class="gallery-preview-carousel-outer-container overflow-hidden w-full py-4 mb-8 fade-in" style="transition-delay: 0.1s;">
                <div class="gallery-preview-carousel-inner-container whitespace-nowrap">
                    <div id="js-gallery-container" class="gallery-preview-set inline-flex animate-scroll-gallery-preview items-stretch"></div>
                </div>
            </div>

            <div class="text-center fade-in" style="transition-delay: 0.5s">
                <a href="#" data-target="gallery-page" class="border border-beige-600 text-beige-600 hover:bg-beige-50 px-8 py-3 rounded-sm font-medium transition inline-block" data-translate="galleryPreviewVisitFull">
                    Visiter notre galerie complète
                </a>
            </div>
        </div>
    </section>

    <section id="visite-virtuelle" class="py-12 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12 fade-in">
                <h2 class="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-translate="virtualTourTitle">
                    Visite <span class="text-beige-600">Virtuelle 360°</span>
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto" data-translate="virtualTourIntro">
                    Explorez notre centre de beauté comme si vous y étiez.
                </p>
            </div>

            <div class="max-w-2xl mx-auto bg-beige-50 rounded-xl shadow-xl overflow-hidden fade-in" style="transition-delay: 0.1s;">
                <img class="w-full object-cover" src="./images/front/im_front.png" alt="Aperçu de la visite virtuelle 360° d'Éclat Beauté">
                <div class="p-8 text-center">
                    <h3 class="font-serif text-2xl font-semibold text-gray-800 mb-4" data-translate="virtualTourCardTitle">Plongez dans notre univers</h3>
                    <p class="text-gray-600 mb-6" data-translate="virtualTourCardText">
                        Cliquez ci-dessous pour une immersion complète et découvrez l'atmosphère unique de notre centre de beauté.
                    </p>
                    <a href="https://app.aio360.ma/bien-etre-esthetique-coiffure/soins-beaute-feminine/salon/rabat/onhair/"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="text-dark inline-block bg-beige-600 hover:bg-beige-700 px-8 py-4 rounded-sm font-semibold text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg" data-translate="virtualTourButton">
                        <i class="fas fa-vr-cardboard mr-2"></i> Démarrer la visite virtuelle
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="team-presentation" class="py-12 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16 fade-in">
                <h2 class="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-translate="teamTitle">
                    Notre <span class="text-beige-600">Équipe</span> d'Experts
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto" data-translate="teamIntro">
                    Rencontrez les professionnels passionnés qui font la La qualité ON h'AIR.
                </p>
            </div>
            
            <div id="js-team-container" class="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
        </div>
    </section>

    <section id="testimonials-content" class="py-12 bg-beige-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16 fade-in">
                <h2 class="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-translate="testimonialsTitle">
                    Ils nous ont <span class="text-beige-600">fait confiance</span>
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto" data-translate="testimonialsIntro">
                    Découvrez ce que nos clients disent de leur expérience chez Éclat Beauté
                </p>
            </div>

            <div id="js-testimonials-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
        </div>
    </section>

    <section id="partner-logos" class="py-115 bg-white fade-in">
        <div class="container mx-auto px-4 sm:px-6 md:px-12">
            <div class="text-center mb-12">
                <h2 class="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-translate="partnersTitle">
                    Nos <span class="text-beige-600">Partenaires</span> de Confiance
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto" data-translate="partnersIntro">
                    Nous collaborons avec les meilleures marques pour vous garantir des soins d'exception.
                </p>
            </div>
            
            <div class="relative">
                <div class="partner-logos-outer-container overflow-x-auto w-full py-4 scrollbar-hide">
                    <div class="partner-logos-inner-container whitespace-nowrap">
                        <div id="js-partners-container" class="partner-logo-set inline-flex animate-scroll-logos items-center"></div>
                    </div>
                </div>
                <button id="partner-scroll-left" class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none z-10">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button id="partner-scroll-right" class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none z-10">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </section>

</section>

<script>
document.addEventListener('DOMContentLoaded', () => {
    // 1. DATA
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
            { name: 'Nabil', img: './images/NABIL.jpeg', delay: '0.1s', role: 'Coiffeur Styliste', tRole: 'teamNabilRole', bio: 'Artiste dans l’âme, je vois chaque chevelure comme une toile à sublimer. La coloration et la coiffure sont mes moyens d’expression, ma passion, mon art.', tBio: 'teamNabilBio', tTitle: 'teamNabilTitle', link: 'https://www.instagram.com/nabilhaircare/' },
            { name: 'Fahd', img: './images/FAHD.jpeg', delay: '0.2s', role: 'Expert Coiffure', tRole: 'teamFahdRole', bio: 'Je m’appelle Fahd, coiffeur, coupeur et coloriste passionné. Avec plus de 27 ans d\'expérience, Chaque rendez-vous est pour moi un moment d’échange, de confiance et de création. À travers la coupe ou la couleur, je mets en valeur votre style et votre personnalité, dans une ambiance conviviale..', tBio: 'teamFahdBio', tTitle: 'teamFahdTitle', link: 'https://www.instagram.com/fahd_coiff' },
            { name: 'Nezha', img: './images/NEZHA.jpeg', delay: '0.3s', role: 'Esthéticienne experte', tRole: 'teamNezhaRole', bio: 'Nazha issue d\'une formation russe, vous invite à découvrir un univers de soins où raffinement et expertise se rencontrent. Spécialisée en manucure, pédicure, soins du visage et massage, elle sublime votre beauté naturelle tout en vous offrant un moment d’évasion et de sérénité.', tBio: 'teamNezhaBio', tTitle: 'teamNezhaTitle', link: 'https://www.instagram.com/n_on_nails?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' }
        ],
        testimonials: [
            { name: 'Halima Lahbab', mt: 'mt-10', tText: 'testimonial3Text', text: '"Je suis venue dans ce salon après une mauvaise expérience ailleurs, et je ne pouvais pas être plus reconnaissante pour le travail incroyable réalisé ici ! Le coiffeur Fahd a pris le temps d’écouter mes attentes et a su non seulement rattraper les dégâts, mais aussi redonner vie et éclat à mes cheveux. Son expertise des techniques modernes et son souci du détail sont vraiment impressionnants. Merci encore pour ce superbe résultat et pour avoir sauvé mes cheveux ! Je recommande vivement ce salon"' },
            { name: 'Rim EL', mt: 'mt-4', tText: 'testimonial3Text', text: '"Je suis trop satisfaite de mon expérience de A à Z. L’accueil était chaleureux et super friendly. J’avais coupé mes cheveux courts moi même à la maison et j’avais fait une catastrophe. Nabil était exceptionnel, il a su me comprendre et me rassurer et pendant tout au long de la prestation la conversation était très agréable rempli d’énergie positive et de bienveillance. Si vous cherchez à vous faire chouchouter et passer un moment relaxant c’est la bonne adresse. La coupe a été au top, c’est la première fois de ma vie je sors d’un salon de coiffure avec un grand sourire et des cheveux magnifiques."' },
            { name: 'Oulfa Chlieh', mt: 'mt-4', tText: 'testimonial6Text', text: '"J’ai eu le plaisir de faire mes ongles chez Nezha. Elle est professionnelle, à l’écoute, donne d’excellents conseils et utilise des produits de qualité. Je suis très, très satisfaite du résultat."' }
        ],
        googleLink: 'https://www.google.com/search?sca_esv=a55453b1a2e256c7&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1HB4y0Zl6BU5ke-hUAp4FYALwIiWpU4DWX-xjJ5LSJUDaNIfB5mghpmCDJijByuAyRs_hCnZxKQkg2zVcMOYMCsl0Zu&q=ON+h%27AIR+salon+Avis&sa=X&ved=2ahUKEwjQweX3hdqNAxW6LvsDHYDQFIAQ0bkNegQINRAD&biw=1440&bih=760&dpr=2'
    };

    // 2. RENDU SERVICES
    document.getElementById('js-services-container').innerHTML = data.services.map(s => `
        <div class="relative group overflow-hidden h-80 md:h-96 fade-in" style="transition-delay: ${s.delay};">
            <img src="${s.img}" alt="Aperçu ${s.id}" class="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110">
            <div class="absolute inset-0 flex flex-col items-center justify-center text-white p-6 transition-all duration-500 text-center bg-black bg-opacity-60 opacity-100 md:bg-opacity-0 md:opacity-0 md:group-hover:bg-opacity-70 md:group-hover:opacity-100">
                <h3 class="font-serif text-2xl font-bold mb-2" data-translate="${s.tTitle}">${s.id}</h3>
                <p class="mb-4 text-sm" data-translate="${s.tText}">${s.desc}</p>
                <a href="#" data-target="services-page" class="inline-block bg-beige-600 hover:bg-beige-700 text-white py-2 px-4 rounded-sm text-sm font-medium transition" data-translate="servicePreviewSeeMore">Voir plus</a>
            </div>
        </div>
    `).join('');

    // 3. RENDU GALERIE (Double boucle pour l'animation infinie)
    const galleryHtml = data.gallery.map(src => `<img src="${src}" alt="Aperçu Galerie" class="h-64 md:h-64 object-cover">`).join('');
    document.getElementById('js-gallery-container').innerHTML = galleryHtml + galleryHtml;

    // 4. RENDU EQUIPE
    document.getElementById('js-team-container').innerHTML = data.team.map(t => `
        <div class="bg-beige-50 rounded-xl shadow-lg p-6 text-center fade-in slide-up hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300" style="transition-delay: ${t.delay};">
            <img src="${t.img}" alt="${t.name} - ${t.role}" class="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-md">
            <h3 class="font-serif text-2xl font-bold mb-2" data-translate="${t.tTitle}">${t.name}</h3>
            <p class="text-beige-600 font-medium mb-3" data-translate="${t.tRole}">${t.role}</p>
            <p class="text-gray-600 text-sm mb-4" data-translate="${t.tBio}">${t.bio}</p>
            <div class="flex justify-center space-x-3">
                <a href="${t.link}" class="text-gray-500 hover:text-beige-600 transition"><i class="fab fa-instagram fa-lg"></i></a>
            </div>
        </div>
    `).join('');

    // 5. RENDU TEMOIGNAGES
    const starSvg = `<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
    const starsHtml = starSvg.repeat(5);
    document.getElementById('js-testimonials-container').innerHTML = data.testimonials.map(t => `
        <div class="p-6 rounded-xl testimonial-card shadow-md fade-in" style="transition-delay: 0.1s">
            <div class="flex items-center mb-6">
                <img src="./images/la-personne.png" alt="Client" class="w-16 h-16 rounded-full object-cover">
                <div class="ml-4">
                    <h4 class="font-bold text-gray-800">${t.name}</h4>
                    <div class="flex text-beige-600">${starsHtml}</div>
                </div>
            </div>
            <p class="text-gray-600 italic" data-translate="${t.tText}">${t.text}</p>
            <a href="${data.googleLink}" target="_blank" rel="noopener noreferrer" class="border border-black bg-beige-600 hover:bg-beige-700 text-dark px-5 py-1 rounded-sm font-medium transition ${t.mt} text-sm shadow-sm hover:shadow-md" data-translate="testimonialsGoogleButton">
                <i class="fab fa-google mr-2"></i>Voir plus d'avis sur Google
            </a>
        </div>
    `).join('');

    // 6. RENDU PARTENAIRES (Boucle de 1 à 21, dupliquée pour l'animation)
    let partnersHtml = '';
    for(let i=1; i<=21; i++) {
        partnersHtml += `<img src="./images/partenaires/par${i}.png" alt="Partner Logo ${i}" class="h-44 md:h-40 mx-4 md:mx-6 filter grayscale hover:grayscale-0 transition-all duration-300">`;
    }
    document.getElementById('js-partners-container').innerHTML = partnersHtml + partnersHtml;
});
</script>