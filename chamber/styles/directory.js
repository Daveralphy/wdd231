const url = 'data/members.json';
const cards = document.querySelector('#members');

async function getMemberData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // Check if data is wrapped in a 'members' property or is a direct array
        const members = data.members ? data.members : data;
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

const displayMembers = (members) => {
    cards.innerHTML = ''; // Clear loading text
    members.forEach((member) => {
        const card = document.createElement('section');
        card.classList.add('member');
        
        const img = document.createElement('img');
        img.setAttribute('src', `images/${member.image}`);
        img.setAttribute('alt', member.name);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '300');
        img.setAttribute('height', '200');
        
        const h2 = document.createElement('h2');
        h2.textContent = member.name;
        
        const pAddress = document.createElement('p');
        pAddress.textContent = member.address;
        
        const pPhone = document.createElement('p');
        pPhone.textContent = member.phone;
        
        const website = document.createElement('a');
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        website.textContent = 'Website';
        
        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(pAddress);
        card.appendChild(pPhone);
        card.appendChild(website);
        
        cards.appendChild(card);
    });
}

getMemberData();