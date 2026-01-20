// Weather API Configuration
const apiKey = '722d55ee6548ffee1857d7061ed66636'; // Replace with your actual API key
const lat = 40.76; // Salt Lake City, Utah
const lon = -111.89;

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

// Fetch Weather Data
async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching forecast:", error);
    }
}

function displayCurrentWeather(data) {
    const container = document.getElementById('weather-content');
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    const capitalizedDesc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    container.innerHTML = `
        <img src="${iconSrc}" alt="${capitalizedDesc}" width="100" height="100">
        <p><strong>${Math.round(data.main.temp)}&deg;C</strong></p>
        <p>${capitalizedDesc}</p>
    `;
}

function displayForecast(data) {
    const container = document.getElementById('forecast');
    container.classList.add('forecast-container');
    
    // Filter for approx 24h intervals (indices 8, 16, 24)
    const forecastList = [data.list[8], data.list[16], data.list[24]];
    
    container.innerHTML = ''; // Clear loading text
    
    forecastList.forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = Math.round(day.main.temp);
        
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = `
            <p>${dayName}</p>
            <p><strong>${temp}&deg;C</strong></p>
        `;
        container.appendChild(dayDiv);
    });
}

// Fetch Members for Spotlight
async function fetchMembers() {
    try {
        const response = await fetch('./data/members.json');
        const data = await response.json();
        displaySpotlights(data.members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

function displaySpotlights(members) {
    // Filter for Gold or Silver members
    const qualifiedMembers = members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
    
    // Shuffle and pick 2-3
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    
    const container = document.getElementById('spotlights');
    
    selected.forEach(member => {
        const card = document.createElement('div');
        card.className = 'spotlight-card';
        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/members/${member.image}" alt="${member.name} Logo">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Website</a></p>
            <p class="membership-level">${member.membershipLevel} Member</p>
        `;
        container.appendChild(card);
    });
}

// Initialize
fetchWeather();
fetchForecast();
fetchMembers();

// Footer Date
const currentYear = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = 
`&copy; ${currentYear} Raphael Daveal | Last Modified: ${document.lastModified}`;