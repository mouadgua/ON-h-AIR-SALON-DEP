const photos = [
    { src: "./gallerie/im58.jpg", delay: "0.85s" },
    { src: "./gallerie/im59.jpg", delay: "0.85s" },
    { src: "./gallerie/im60.jpg", delay: "0.85s" },
    { src: "./gallerie/im61.jpg", delay: "0.85s" },
    { src: "./gallerie/im62.jpg", delay: "0.85s" },
    { src: "./gallerie/im63.jpg", delay: "0.85s" },
    { src: "./gallerie/im65.jpg", delay: "0.85s" },
    { src: "./gallerie/im66.jpg", delay: "0.85s" },
    { src: "./gallerie/im67.jpg", delay: "0.85s" },
    { src: "./gallerie/im68.jpg", delay: "0.85s" },
    { src: "./gallerie/im54.jpg", delay: "0.1s" },
    { src: "./gallerie/im55.jpg", delay: "0.15s" },
    { src: "./gallerie/im2.jpeg", delay: "0.2s" },
    { src: "./gallerie/im6.jpeg", delay: "0.25s" },
    { src: "./gallerie/im7.jpeg", delay: "0.3s" },
    { src: "./gallerie/im9.jpeg", delay: "0.35s" },
    { src: "./gallerie/im12.JPG", delay: "0.45s" },
    { src: "./gallerie/im14.JPG", delay: "0.5s" },
    { src: "./gallerie/im16.jpeg", delay: "0.55s" },
    { src: "./gallerie/im17.jpeg", delay: "0.6s" },
    { src: "./gallerie/im19.JPG", delay: "0.7s" },
    { src: "./gallerie/im21.jpeg", delay: "0.8s" },
    { src: "./gallerie/im23.jpeg", delay: "0.85s" },
    { src: "./gallerie/im25.JPG", delay: "0.85s" },
    { src: "./gallerie/im26.jpeg", delay: "0.85s" },
    { src: "./gallerie/im27.jpeg", delay: "0.85s" },
    { src: "./gallerie/im28.JPG", delay: "0.85s" },
    { src: "./gallerie/im29.jpeg", delay: "0.85s" },
    { src: "./gallerie/im31.JPG", delay: "0.85s" },
    { src: "./gallerie/im32.JPG", delay: "0.85s" },
    { src: "./gallerie/im33.jpeg", delay: "0.85s" },
    { src: "./gallerie/im35.jpeg", delay: "0.85s" },
    { src: "./gallerie/im36.jpeg", delay: "0.85s" },
    { src: "./gallerie/im38.JPG", delay: "0.85s" },
    { src: "./gallerie/im40.JPG", delay: "0.85s" },
    { src: "./gallerie/im42.JPG", delay: "0.85s" },
    { src: "./gallerie/im43.JPG", delay: "0.85s" },
    { src: "./gallerie/im44.jpeg", delay: "0.85s" },
    { src: "./gallerie/im45.JPG", delay: "0.85s" },
    { src: "./gallerie/im48.JPG", delay: "0.85s" },
    { src: "./gallerie/im49.jpeg", delay: "0.85s" },
    { src: "./gallerie/im50.JPG", delay: "0.85s" },
    { src: "./gallerie/im51.jpeg", delay: "0.85s" },
    { src: "./gallerie/im53.jpeg", delay: "0.85s" },
    { src: "./gallerie/im55.jpg", delay: "0.85s" },
    { src: "./gallerie/im56.png", delay: "0.85s" },
    { src: "./gallerie/im69.jpg", delay: "0.85s" }
];

const galleryGrid = document.querySelector('.grid');

const renderGallery = () => {
    galleryGrid.innerHTML = photos.map(photo => `
        <div class="gallery-lightbox-trigger overflow-hidden rounded-lg fade-in shadow-md hover:shadow-xl transition-shadow duration-300 h-64 md:h-80 cursor-pointer group"
             data-src="${photo.src}" 
             style="transition-delay: ${photo.delay};">
            <img src="${photo.src}" 
                 alt="Galerie Image" 
                 class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                 loading="lazy">
        </div>
    `).join('');
};

// Lancer le rendu au chargement du script
renderGallery();