// Set Timestamp
const timestamp = document.getElementById('timestamp');
if (timestamp) {
    const now = new Date();
    timestamp.value = now.toISOString();
}

// Modals
const modalButtons = [
    { id: 'np', modalId: 'modal-np' },
    { id: 'bronze', modalId: 'modal-bronze' },
    { id: 'silver', modalId: 'modal-silver' },
    { id: 'gold', modalId: 'modal-gold' }
];

modalButtons.forEach(item => {
    const btn = document.getElementById(`open-${item.id}`);
    const modal = document.getElementById(item.modalId);
    const closeBtn = document.getElementById(`close-${item.id}`);

    if (btn && modal && closeBtn) {
        btn.addEventListener('click', () => {
            modal.showModal();
        });

        closeBtn.addEventListener('click', () => {
            modal.close();
        });

        // Close when clicking outside the modal content
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.close();
            }
        });
    }
});

const currentYear = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `&copy; ${currentYear} Raphael Daveal | Last Modified: ${document.lastModified}`;