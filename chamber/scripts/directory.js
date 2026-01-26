const membersContainer = document.querySelector("#members")
const viewBtn = document.getElementById('view-toggle-btn');
const viewDialog = document.getElementById('view-dialog');
const gridBtn = document.getElementById('view-grid');
const listBtn = document.getElementById('view-list');

async function getMembers() {
  try {
    const response = await fetch("./data/members.json")
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json()
    displayMembers(data.members)
  } catch (error) {
    console.error("Error fetching members:", error)
  }
}

function displayMembers(members) {
membersContainer.innerHTML = ""
members.forEach(member => {
const section = document.createElement("section")
section.classList.add("member")

const img = document.createElement("img")
img.src = `images/members/${member.image}`
img.alt = member.name
img.loading = "lazy"
img.width = 300
img.height = 200

const name = document.createElement("h2")
name.textContent = member.name

const address = document.createElement("p")
address.textContent = member.address

const phone = document.createElement("p")
phone.textContent = member.phone

const link = document.createElement("a")
link.href = member.website
link.textContent = member.website
link.target = "_blank"

section.append(img,name,address,phone,link)
membersContainer.append(section)
})
}

if (viewBtn && viewDialog) {
    viewBtn.addEventListener('click', () => {
        if (viewDialog.open) {
            viewDialog.close();
        } else {
            viewDialog.show();
        }
    });

    document.addEventListener('click', (event) => {
        if (!viewBtn.contains(event.target) && !viewDialog.contains(event.target) && viewDialog.open) {
            viewDialog.close();
        }
    });

    if (gridBtn) gridBtn.addEventListener('click', () => {
        membersContainer.classList.remove('list');
        viewDialog.close();
    });

    if (listBtn) listBtn.addEventListener('click', () => {
        membersContainer.classList.add('list');
        viewDialog.close();
    });
}

const currentYear = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = 
`&copy; ${currentYear} Raphael Daveal | Last Modified: ${document.lastModified}`;

getMembers()
