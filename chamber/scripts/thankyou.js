const params = new URLSearchParams(window.location.search);
const container = document.getElementById('results');

// Debugging: Log the URL parameters to the console
console.log('Current URL:', window.location.href);

const fields = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Mobile Phone' },
    { key: 'businessName', label: 'Business Name' },
    { key: 'timestamp', label: 'Date Submitted' }
];

let hasData = false;

fields.forEach(field => {
    if (params.has(field.key)) {
        const p = document.createElement('p');
        const value = params.get(field.key);
        p.innerHTML = `<strong>${field.label}:</strong> ${value}`;
        container.appendChild(p);
        hasData = true;
    }
});

if (!hasData) {
    container.innerHTML = "<p>No application data found. Please make sure you submit the form from the Join page.</p>";
}

const currentYear = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `&copy; ${currentYear} Raphael Daveal | Last Modified: ${document.lastModified}`;