<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ON h'AIR</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Libertinus+Math&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
    <script src="translate.js" defer></script>
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="style.css">

    <!-- PWA Manifest -->
    <link rel="manifest" href="./manifest.json">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="#000000">

    <!-- iOS Icons -->
    <link rel="apple-touch-icon" href="/images/OH/logo.png">
</head>

<body class="bg-white text-gray-700">
    <?php include_once 'header.php'; ?>
    <!-- Main Content Wrapper for SPA-like behavior -->
    <main id="page-content-wrapper">
        <?php include_once './main/accueil.php'; ?>
        <?php include_once './main/booking-content.php'; ?>
        <?php include_once './main/gallery-page.php'; ?>
        <?php include_once './main/services-page.php'; ?>



    </main> <!-- End of #page-content-wrapper -->

    <!-- Lightbox Modal for Images -->
    <div id="image-lightbox-modal"
        class="lightbox-modal fixed inset-0 flex items-center justify-center z-[9995] hidden p-4">
        <div class="lightbox-content bg-white p-1 rounded-lg shadow-xl relative">
            <button id="image-lightbox-close-btn"
                class="lightbox-close-btn text-white hover:text-gray-300 transition-colors duration-200">&times;</button>
            <button id="lightbox-prev-btn" class="lightbox-nav-btn lightbox-prev-btn">&lt;</button>
            <button id="lightbox-next-btn" class="lightbox-nav-btn lightbox-next-btn">&gt;</button>
            <img id="lightbox-image-content" src="" alt="Image agrandie" class="">
        </div>
    </div>


    <!-- CTA Section -->
    <section class="py-10 bg-beige-600 text-dark text-center">
        <div class="container mx-auto px-4">
            <h2 class="font-serif text-3xl md:text-4xl font-bold mb-6 fade-in" data-translate="ctaTitle">
                Prête à révéler votre beauté intérieure?
            </h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto fade-in" style="transition-delay: 0.1s" data-translate="ctaIntro">
                Contactez-nous pour votre première séance et bénéficiez de 15% de réduction sur votre premier soin.
            </p>
            <div class="fade-in" style="transition-delay: 0.2s">
                <a href="tel:+212669577172"
                    class="bg-black text-white hover:bg-gray-700 px-8 py-3 rounded-sm font-medium text-lg transition inline-block"
                    data-translate="ctaButton">
                    <i class="fas fa-phone mr-2"></i>Nous appeler
                </a>
            </div>
        </div>
    </section>
    <?php include_once 'footer.php'; ?>
    <script src="translate.js" defer></script>
    <script src="app.js"></script>
    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('./sw.js')
                    .then(function (registration) {
                        console.log('ServiceWorker registration successful:', registration.scope);
                    })
                    .catch(function (error) {
                        console.log('ServiceWorker registration failed:', error);
                    });
            });
        }

        // Optional: Detect offline/online status
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        function updateOnlineStatus() {
            const statusElement = document.getElementById('connection-status');
            if (statusElement) {
                if (navigator.onLine) {
                    statusElement.textContent = 'En ligne';
                    statusElement.style.color = 'green';
                } else {
                    statusElement.textContent = 'Hors ligne - Mode déconnecté';
                    statusElement.style.color = 'red';
                }
            }
        }
    </script>

    <!-- Optional: Connection status indicator -->
    <div id="connection-status"
        style="position: fixed; bottom: 10px; right: 10px; padding: 5px 10px; background: white; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); z-index: 9999;">
        <?php if (isset($_SERVER['HTTPS'])): ?>
            <script>updateOnlineStatus();</script>
        <?php endif; ?>
    </div>
</body>

</html>