function toggleMenu() {
    const menuList = document.getElementById('menu-list');
    const dimOverlay = document.getElementById('dim-overlay');
    const isMenuOpen = menuList.classList.contains('show');

    if (isMenuOpen) {
        closeMenu();
    } else {
        menuList.classList.add('show');
        dimOverlay.classList.add('show');
    }
}

function closeMenu() {
    const menuList = document.getElementById('menu-list');
    const dimOverlay = document.getElementById('dim-overlay');

    menuList.classList.remove('show');
    dimOverlay.classList.remove('show');
}
