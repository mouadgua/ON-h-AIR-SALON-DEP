const CACHE_NAME = 'on-h-air-salon-v1';
const urlsToCache = [
  './home.html',
  './translate.js',
  './manifest.json'
];

// Images to cache by category
const imageCategories = {
  gallery: [
    './gallerie/coiffure.jpg',
    './gallerie/esthetique.JPG',
    './gallerie/nailbar.JPG',
    // Add your most important gallery images here
    // You can add up to 20-30 most viewed images
  ],
  oh: [
    './images/OH/logo.png',
    './images/OH/log-normal.png',
    './images/OH/log-shiny.png',
    './images/OH/log-shiny-blanc.png',
    './images/OH/log-noir.png',
    './images/OH/bg.png',
    './images/OH/rose1.png',
    './images/OH/rose2.png',
    './images/OH/rose3.png',
    './images/OH/rose4.png'
  ],
  services: [
    './images/service_preview/coiffure.jpg',
    './images/service_preview/coloration.jpg',
    './images/service_preview/esthetique.JPG',
    './images/service_preview/nailbar.JPG'
  ],
  partners: [
    './images/partenaires/par1.png',
    './images/partenaires/par2.png',
    './images/partenaires/par3.png',
    './images/partenaires/par4.png',
    './images/partenaires/par5.png',
    './images/partenaires/par6.png',
    './images/partenaires/par7.png',
    './images/partenaires/par8.png',
    './images/partenaires/par9.png',
    './images/partenaires/par10.png',
    './images/partenaires/par11.png',
    './images/partenaires/par12.png',
    './images/partenaires/par13.png',
    './images/partenaires/par14.png',
    './images/partenaires/par15.png',
    './images/partenaires/par16.png',
    './images/partenaires/par17.png',
    './images/partenaires/par18.png',
    './images/partenaires/par19.png',
    './images/partenaires/par20.png',
    './images/partenaires/par21.png'
  ],
  staff: [
    './images/FAHD.jpeg',
    './images/NABIL.jpeg',
    './images/NEZHA.jpeg',
    './images/la-personne.png'
  ],
  front: [
    './images/front/im_front.png'
  ]
};

// Flatten all images for caching
const allImages = [
  ...imageCategories.oh,
  ...imageCategories.services,
  ...imageCategories.partners,
  ...imageCategories.staff,
  ...imageCategories.front,
  ...imageCategories.gallery
];

// Add all images to cache URLs
urlsToCache.push(...allImages);

// Install event - cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Handle image requests specially
  if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg|webp|JPG|JPEG|PNG)$/)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(event.request)
          .then(networkResponse => {
            // Cache new images as they load
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // If offline and image not in cache, serve a placeholder
            return caches.match('/images/OH/logo.png');
          });
      })
    );
  } else {
    // For non-image requests (HTML, JS, CSS)
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(event.request)
            .then(networkResponse => {
              // Check if we received a valid response
              if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                return networkResponse;
              }
              
              // Cache new resources
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
              
              return networkResponse;
            })
            .catch(() => {
              // If offline and page not in cache, show offline page
              if (event.request.url.includes('/index.html')) {
                return caches.match('/index.html');
              }
            });
        })
    );
  }
});

// Background sync for offline form submissions (if you have forms)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  // Add your sync logic here
  console.log('Syncing data in background...');
}