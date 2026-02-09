import {showModal} from './modal.js';

// Page Context Detection
const isPortfolio = document.title.includes('Portfolio');
const isBlog = document.title.includes('Blog');
const isHome = !isPortfolio && !isBlog;

// Select URL based on page
let DATA_URL = 'data/services.json';
if (isPortfolio) DATA_URL = 'data/portfolio.json';
if (isBlog) DATA_URL = 'data/blog.json';

async function loadContent() {
    try {
        const response = await fetch(DATA_URL);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        // Set Site Title globally for all pages
        const siteTitle = document.querySelector('#siteTitle');
        if (siteTitle) {
            siteTitle.textContent = 'WindVeal Technologies';
        }

        const container = document.querySelector('#serviceContainer');
        if (!container) return;

        let items = [];
        let type = '';

        if (isPortfolio) {
            items = Array.isArray(data) ? data : (data.portfolio || []);
            type = 'portfolio';
        } else if (isBlog) {
            items = Array.isArray(data) ? data : (data.blog || []);
            type = 'blog';
        } else {
            items = Array.isArray(data) ? data : (data.services || []);
            type = 'service';
            setHeroText();
        }

        renderCards(items, container, type);

    } catch (error) {
        console.error('Error loading content:', error);
        const container = document.querySelector('#serviceContainer');
        if(container) container.innerHTML = '<p>Sorry, we could not load the content at this time.</p>';
    }
}

function setHeroText() {
    const heroText = document.querySelector('#heroText');
    if (heroText) {
        heroText.textContent = 'Automating your business processes with AI and Software Solutions.';
    }
}

function renderCards(items, container, type) {
    container.innerHTML = '';
    
    if (!items.length) {
        container.innerHTML = '<p>No items found to display.</p>';
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Generate a unique image for each card
        const imgUrl = `https://picsum.photos/seed/${item.id}/300/200`;

        let badgeText = item.level || item.category || 'Info';
        let titleText = item.name || item.title;
        let descText = '';
        let priceText = '';

        if (type === 'service') {
            descText = item.duration;
            priceText = `$${item.price}`;
        } else if (type === 'portfolio') {
            descText = item.client;
        } else if (type === 'blog') {
            descText = `By ${item.author}`;
        }

        card.innerHTML = `
            <div class="card__shine"></div>
            <div class="card__glow"></div>
            <div class="card__content">
                <div class="card__badge">${badgeText}</div>
                <div class="card__image">
                    <img src="${imgUrl}" alt="${titleText}" loading="lazy">
                </div>
                <div class="card__text">
                    <h3 class="card__title">${titleText}</h3>
                    <p class="card__description">${descText}</p>
                </div>
                <div class="card__footer">
                    <span class="card__price">${priceText}</span>
                    <div class="card__button" data-id="${item.id}" data-type="${type}">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Event Delegation for Modals
    container.addEventListener('click', (e) => {
        const btn = e.target.closest('.card__button');
        if (btn) {
            const id = btn.dataset.id;
            const item = items.find(i => i.id == id);
            showModal(item, type);
        }
    });

    setupMobileScroll(container);
}

function setupMobileScroll(container) {
    // Only run on mobile/small screens
    if (window.innerWidth > 700) return;

    let scrollInterval;
    let isPaused = false;
    let resumeTimeout;

    const startScroll = () => {
        if (scrollInterval) cancelAnimationFrame(scrollInterval);
        
        const scroll = () => {
            if (!isPaused && container.scrollWidth > container.clientWidth) {
                container.scrollLeft += 1;
                // Reset to start if reached end for infinite loop effect
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
                    container.scrollLeft = 0;
                }
            }
            scrollInterval = requestAnimationFrame(scroll);
        };
        scrollInterval = requestAnimationFrame(scroll);
    };

    const pauseScroll = () => {
        isPaused = true;
        clearTimeout(resumeTimeout);
    };

    const resumeScroll = () => {
        resumeTimeout = setTimeout(() => {
            isPaused = false;
        }, 5000);
    };

    container.addEventListener('touchstart', pauseScroll, { passive: true });
    container.addEventListener('touchend', resumeScroll);
    
    startScroll();
}

function highlightActiveLink() {
    const links = document.querySelectorAll('#navList a');
    const current = window.location.pathname.split('/').pop() || 'index.html';
    
    links.forEach(link => {
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
}

highlightActiveLink();
loadContent();
