CREATE DATABASE IF NOT EXISTS on_hair_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE on_hair_db;

-- Table pour le contenu textuel fixe et les liens (Promo, Slogan, Réseaux, Maps)
CREATE TABLE site_content (
    id INT AUTO_INCREMENT PRIMARY KEY,
    element_key VARCHAR(100) UNIQUE NOT NULL,
    content_fr TEXT NOT NULL,
    content_en TEXT NOT NULL
);

-- Table des catégories (Filtres et titres de sections)
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_fr VARCHAR(100) NOT NULL,
    nom_en VARCHAR(100) NOT NULL,
    data_target VARCHAR(100) NOT NULL
);

-- Table des services
CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    nom_fr VARCHAR(255) NOT NULL,
    nom_en VARCHAR(255) NOT NULL,
    prix_base INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO categories (id, nom_fr, nom_en, data_target) VALUES 
(1, 'COIFFURE', 'HAIRDRESSING', 'serviceCategoryCoiffure'),
(2, 'COLORATION', 'COLORING', 'serviceCategoryColoration'),
(3, 'SOINS DE CHEVEUX', 'HAIR CARE', 'serviceCategoryHairCare'),
(4, 'ÉPILATION', 'WAXING', 'serviceCategoryWaxing'),
(5, 'MASSAGE', 'MASSAGE', 'serviceCategoryMassages'),
(6, 'YEUX', 'EYES', 'serviceCategoryEyes'),
(7, 'MAQUILLAGE', 'MAKEUP', 'serviceCategoryMakeup'),
(8, 'MANUCURE', 'MANICURE', 'serviceCategoryNailsManucure'),
(9, 'PEDICURE', 'PEDICURE', 'serviceCategoryNailsPedicure'),
(10, 'EXTRA ONGLES', 'NAIL EXTRAS', 'serviceCategoryNailExtras'),
(11, 'SOIN DE VISAGE', 'FACIALS', 'serviceCategoryFacials');

INSERT INTO site_content (element_key, content_fr, content_en) VALUES 
-- Barre de Promotion
('promo_offer', '🎉 Offre Spéciale: -10% sur votre première visite! ✨ Réservez dès maintenant!', '🎉 Special Offer: -10% on your first visit! ✨ Book now!'),

-- Liens Réseaux Sociaux & Contact
('link_instagram', 'https://www.instagram.com/onhair_maroc/', 'https://www.instagram.com/onhair_maroc/'),
('link_whatsapp', 'https://wa.me/212669577172', 'https://wa.me/212669577172'),
('link_google_maps', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7013398396475!2d-6.847190299999999!3d34.0002043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76de7079a3413%3A0xdc150b08de691131!2sON%20h\'AIR%20salon!5e0!3m2!1sfr!2sma!4v1749216268028!5m2!1sfr!2sma', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7013398396475!2d-6.847190299999999!3d34.0002043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76de7079a3413%3A0xdc150b08de691131!2sON%20h\'AIR%20salon!5e0!3m2!1sfr!2sma!4v1749216268028!5m2!1sfr!2sma'),
('phone_nabil', '+212669577172', '+212669577172'),
('phone_fahd', '+212678915564', '+212678915564'),

-- Navigation
('nav_accueil', 'Accueil', 'Home'),
('nav_apropos', 'À propos', 'About'),
('nav_services', 'Services', 'Services'),
('nav_galerie', 'Galerie', 'Gallery'),
('nav_contact', 'Contact', 'Contact'),
('nav_appeler', 'Appeler', 'Call'),

-- Slogans
('main_slogan', '“ VOUS AVANT TOUT ”', '“ YOU FIRST ”'),
('footer_slogan', 'Votre institut de beauté haut de gamme à Rabat, où l\'expertise rencontre le luxe pour sublimer votre beauté naturelle.', 'Your high-end beauty institute in Rabat, where expertise meets luxury to enhance your natural beauty.'),

-- Section À Propos
('about_title', 'À Propos de <span class="text-beige-600">Notre salon</span>', 'About <span class="text-beige-600">Our Salon</span>'),
('about_intro', 'Découvrez notre passion pour la beauté et l\'excellence, au cœur d\'un espace dédié à votre bien-être.', 'Discover our passion for beauty and excellence, in a space dedicated to your well-being.'),
('about_commitment_text', 'Chez ON h\'AIR salon, nous croyons que chaque personne mérite de se sentir belle et en confiance. Notre mission est de vous offrir des services de la plus haute qualité dans un environnement chaleureux et luxueux.', 'At ON h\'AIR Salon, we believe every woman deserves to feel effortlessly beautiful and confidently herself. Our mission is to deliver exceptional service in a warm, luxurious setting.'),

-- Équipe (Biographies)
('team_title', 'Notre <span class="text-beige-600">Équipe</span> d\'Experts', 'Our <span class="text-beige-600">Expert Team</span>'),
('team_nabil_bio', 'Artiste dans l\'âme, je vois chaque chevelure comme une toile à sublimer. La coloration et la coiffure sont mes moyens d\'expression.', 'An artist at heart, I see every head of hair as a canvas to be enhanced. Coloring and hairstyling are my means of expression.'),
('team_fahd_bio', 'Avec plus de 27 ans d\'expérience, chaque rendez-vous est pour moi un moment d\'échange, de confiance et de création.', 'With over 27 years of experience, each appointment is a moment of exchange, trust, and creation for me.'),
('team_nezha_bio', 'Issue d\'une formation russe, elle sublime votre beauté naturelle tout en vous offrant un moment d\'évasion et de sérénité.', 'With Russian training, she enhances your natural beauty while offering you a moment of escape and serenity.'),

-- Contact & Localisation
('contact_title', 'Contactez-Nous', 'Contact Us'),
('contact_address', 'place Rabea Aladaouya, 100 résidence Kays, Rabat 10100', 'place Rabea Aladaouya, 100 résidence Kays, Rabat 10100'),
('contact_hours', 'Mardi - Dimanche: 11h - 20h', 'Tuesday - Sunday: 11am - 8pm'),

-- CTA
('cta_title', 'Prête à révéler votre beauté intérieure?', 'Ready to reveal your inner beauty?'),
('cta_button', 'Nous appeler', 'Call Us'),
('footer_rights', '© 2025 ON h\'air. Tous droits réservés.', '© 2025 ON h\'air. All rights reserved.');

-- Nettoyage de la table services
TRUNCATE TABLE services;

-- COIFFURE (Catégorie 1)
INSERT INTO services (category_id, nom_fr, nom_en, prix_base) VALUES 
(1, 'Brushing', 'Blow-dry', 50),
(1, 'SHP+ Masque+ Brushing', 'Shampoo + mask + blow-dry', 70),
(1, 'SHP spécifique+Masque traitant+ Brush', 'Specific shampoo + treatment mask + blow-dry', 100),
(1, 'Wavy', 'Wavy', 100),
(1, 'Wavy + SHP+ Masque', 'Wavy + Shampoo + Mask', 120),
(1, 'Coupe correction et pointes', 'Cut (correction and ends)', 140),
(1, 'Coupe transformation', 'Transformation cut', 250),
(1, 'Coup enfant', 'Kids Cut', 100),
(1, 'Consultation et diagnostique', 'Consultation and diagnosis', 200),
(1, 'Diagnostique et mèche test*', 'Diagnosis + strand test', 300);

-- COLORATION (Catégorie 2)
INSERT INTO services (category_id, nom_fr, nom_en, prix_base) VALUES 
(2, 'Coloration', 'Coloring', 350),
(2, 'Coloration sans ammoniaque', 'Ammonia-free coloring', 400),
(2, 'Coloration racines', 'Root coloring', 250),
(2, 'Coloration racines sans ammoniaque', 'Ammonia-free root coloring', 300),
(2, 'Rinçage et correction de couleur', 'Rinse / color correction', 300),
(2, 'Reflets Highlight', 'Highlights', 750),
(2, 'Ombré', 'Ombré', 1200),
(2, 'Balayage', 'Balayage', 1000),
(2, 'Airtouch', 'Airtouch', 1500);

-- SOINS DE CHEVEUX (Catégorie 3)
INSERT INTO services (category_id, nom_fr, nom_en, prix_base) VALUES 
(3, 'Soin ON h\'AIR', 'ON h\'AIR Treatment', 250),
(3, 'Soin a base de PLEX', 'Plex-based Treatment', 350),
(3, 'Soin COLLAGENE', 'Collagen Treatment', 700),
(3, 'Soin PROTEINE', 'Protein Treatment', 1000),
(3, 'Soin BRUSHING permanent', 'Therapy Treatment', 750),
(3, 'Soin semi permanent CURLY hair', 'Semi-permanent Curly Treatment', 300),
(3, 'Soin permanent CURLY hair', 'Permanent Curly Treatment', 800);

-- ÉPILATION (Catégorie 4)
INSERT INTO services (category_id, nom_fr, nom_en, prix_base) VALUES 
(4, 'Duvet', 'Upper lip wax', 20),
(4, 'Sourcil', 'Eyebrow wax', 30),
(4, 'Menton', 'Chin wax', 15),
(4, 'Visage Complet', 'Full face wax', 80),
(4, 'Bras', 'Arms wax', 50),
(4, 'Demis jambe', 'Half legs wax', 50),
(4, 'Jambe complète', 'Full legs wax', 100),
(4, 'Aisselles', 'Underarms wax', 30),
(4, 'Maillot', 'Bikini wax', 70),
(4, 'Épilation complète', 'Full body wax', 280);

-- MASSAGE (Catégorie 5)
INSERT INTO services (category_id, nom_fr, nom_en, prix_base) VALUES 
(5, 'Massage Relaxant 30min', 'Relaxing massage 30 min', 200),
(5, 'Massage Relaxant 45min', 'Relaxing massage 45 min', 250),
(5, 'Massage Relaxant 60min', 'Relaxing massage 60 min', 300),
(5, 'Massage Nuque et épaules 15min', 'Neck and shoulder massage 15 min', 100),
(5, 'Massage cranien et faciale 15min', 'Scalp and facial massage 15 min', 100),
(5, 'Massage des pieds 15min', 'Foot massage 15 min', 100);

-- YEUX (Catégorie 6)
INSERT INTO services (category_id, nom_fr, nom_en, prix_base) VALUES 
(6, 'Faux cils', 'False eyelashes', 80),
(6, 'Coloration des sourcils', 'Eyebrow coloring', 40);

-- MAQUILLAGE (Catégorie 7)
INSERT INTO services (category_id, nom_fr, nom_en, prix_base) VALUES 
(7, 'Maquillage soirée', 'Evening makeup', 300),
(7, 'Maquillage Fiançailles', 'Engagement makeup', 1000),
(7, 'Maquillage de la mariée', 'Bridal makeup', 1500),
(7, 'Pack de la mariée', 'Bridal package', 4000),
(7, 'Pack de la mariée avec accompagnement', 'Bridal package with support', 6000);

-- MANUCURE (Catégorie 8)
INSERT INTO services (category_id, nom_fr, nom_en, prix_base) VALUES 
(8, 'Pose vernis normal', 'Normal polish application', 30),
(8, 'Pose vernis permanent', 'Permanent polish application', 100),
(8, 'Manucure classique', 'Classic manicure', 80),
(8, 'Manucure SPA', 'SPA manicure', 150),
(8, 'Manucure BIAB', 'BIAB manicure', 280),
(8, 'Extension de gel (chablon / faux ongle)', 'Gel extension', 380),
(8, 'Remplissage de gel', 'Gel refill', 180);

-- PÉDICURE (Catégorie 9)
INSERT INTO services (category_id, nom_fr, nom_en, prix_base) VALUES 
(9, 'Pose vernis normal', 'Normal polish application', 30),
(9, 'Pose vernis permanent', 'Permanent polish application', 100),
(9, 'Pédicure classique', 'Classic pedicure', 100),
(9, 'Pédicure SPA', 'SPA pedicure', 200),
(9, 'Pédicure BIAB', 'BIAB pedicure', 250);

-- EXTRA ONGLES (Catégorie 10)
INSERT INTO services (category_id, nom_fr, nom_en, prix_base) VALUES 
(10, 'Nail Art', 'Nail Art', 50),
(10, 'French', 'French', 70),
(10, 'Babyboomer', 'Babyboomer', 100),
(10, 'Faux Ongles avec permanent', 'False nails with permanent polish', 200),
(10, 'Chrome', 'Chrome nails', 50),
(10, 'Dépose vernis normal', 'Normal polish removal', 20),
(10, 'Dépose vernis permanent', 'Permanent polish removal', 50),
(10, 'Dépose gel', 'Gel removal', 100);

-- SOIN DE VISAGE (Catégorie 11)
INSERT INTO services (category_id, nom_fr, nom_en, prix_base) VALUES 
(11, 'Soin purifiant', 'Purifying facial', 300),
(11, 'Soin éclat', 'Radiance facial', 500),
(11, 'Soin hydratant', 'Hydrating facial', 500);