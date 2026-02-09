// Mobile Menu Toggle
const menuButton = document.getElementById('menu');
const navList = document.getElementById('navList');

if (menuButton && navList) {
    menuButton.addEventListener('click', () => {
        navList.classList.toggle('open');
        menuButton.textContent = navList.classList.contains('open') ? '✖' : '☰';
    });
}

// Global Footer Copyright
const copyright = document.getElementById('copyright');
if (copyright) {
    copyright.innerHTML = `&copy; ${new Date().getFullYear()} WindVeal Technologies Limited | Raphael Daveal`;
}
