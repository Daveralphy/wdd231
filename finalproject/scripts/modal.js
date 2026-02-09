export function showModal(item, type) {
const modal = document.querySelector('#modal');
if (!modal) return;

let content = '';

// Helper to create feature list item
const feature = (text) => `
    <li>
        <span class="icon">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
            </svg>
        </span>
        <span>${text}</span>
    </li>`;

if (type === 'service') {
    content = `
        <div class="plan">
            <div class="inner">
                <span class="pricing">
                    $${item.price} <small>/ ${item.duration}</small>
                </span>
                <p class="title">${item.name}</p>
                <p class="info">Level: ${item.level}</p>
                <ul class="features">
                    ${feature('Professional Service')}
                    ${feature('Quality Assurance')}
                    ${feature('24/7 Support')}
                </ul>
                <div class="action">
                    <button class="button" id="continueBtn">Continue</button>
                    <button class="button" id="closeModal" style="background:#ccc; color:#333; margin-left:10px;">Close</button>
                </div>
            </div>
        </div>
    `;
} else if (type === 'portfolio') {
    content = `
        <div class="plan">
            <div class="inner">
                <p class="title">${item.name}</p>
                <p class="info">${item.description}</p>
                <ul class="features">
                    ${feature('Client: ' + item.client)}
                    ${feature('Tools: ' + item.tools)}
                </ul>
                <div class="action">
                    <button class="button" id="continueBtn">Order Similar</button>
                    <button class="button" id="closeModal" style="background:#ccc; color:#333; margin-left:10px;">Close</button>
                </div>
            </div>
        </div>
    `;
} else if (type === 'blog') {
    content = `
        <div class="plan">
            <div class="inner">
                <p class="title">${item.title}</p>
                <p class="info">${item.summary}</p>
                <ul class="features">
                    ${feature('Author: ' + item.author)}
                    ${feature('Category: ' + item.category)}
                </ul>
                <div class="action">
                    <button class="button" id="closeModal" style="width:100%">Close</button>
                </div>
            </div>
        </div>
    `;
}

modal.innerHTML = content;

modal.showModal();

document.querySelector('#closeModal').addEventListener('click', () => modal.close());

const continueBtn = document.querySelector('#continueBtn');
if (continueBtn) {
    continueBtn.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
}

// Close when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});
}
