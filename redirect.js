const maintenancePage = "renovations.html";

    // Vérification pour éviter la boucle infinie
    if (!window.location.pathname.includes(maintenancePage)) {
        window.location.href = maintenancePage;
    }