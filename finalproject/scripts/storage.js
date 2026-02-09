// Local Storage: Visit Counter
const visitKey = 'windveal-visits';
let visits = localStorage.getItem(visitKey) || 0;
visits = parseInt(visits) + 1;
localStorage.setItem(visitKey, visits);

const footer = document.querySelector('footer');
if (footer) {
    // Optional: Display visit count in console or append to footer
    // const p = document.createElement('p');
    // p.textContent = `Visits: ${visits}`;
    // p.style.fontSize = '0.8rem';
    // footer.appendChild(p);
}