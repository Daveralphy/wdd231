import { places } from '../data/places.mjs';

// --- Visitor Message (localStorage) ---
const messageContainer = document.getElementById('visitor-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
    // First visit
    messageContainer.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diffTime = now - parseInt(lastVisit);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
        messageContainer.textContent = "Back so soon! Awesome!";
    } else {
        const dayString = diffDays === 1 ? "day" : "days";
        messageContainer.textContent = `You last visited ${diffDays} ${dayString} ago.`;
    }
}

// Update last visit to now
localStorage.setItem('lastVisit', now);


// --- Display Places ---
const grid = document.getElementById('places-grid');

const displayPlaces = (places) => {
    grid.innerHTML = '';
    places.forEach(place => {
        const card = document.createElement('div');
        card.classList.add('place-card');

        const title = document.createElement('h2');
        title.textContent = place.name;

        const address = document.createElement('address');
        address.textContent = place.address;

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.setAttribute('src', `images/places/${place.image}`);
        img.setAttribute('alt', place.name);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300');
        img.setAttribute('height', '200');
        figure.appendChild(img);

        const desc = document.createElement('p');
        desc.textContent = place.description;

        const button = document.createElement('a');
        button.textContent = "Learn More";
        button.setAttribute('href', place.website);
        button.setAttribute('target', '_blank');
        button.classList.add('learn-more-btn');

        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(desc);
        card.appendChild(button);

        grid.appendChild(card);
    });
};

displayPlaces(places);

// --- Footer Date ---
const currentYear = new Date().getFullYear();
const lastModified = document.getElementById("lastModified");
if (lastModified) {
    lastModified.innerHTML = `&copy; ${currentYear} Raphael Daveal | Last Modified: ${document.lastModified}`;
}