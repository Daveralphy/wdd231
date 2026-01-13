const membersContainer = document.querySelector("#members")
const toggleButton = document.querySelector("#toggleView")

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

toggleButton.addEventListener("click", () => {
  membersContainer.classList.toggle("list")
  if (membersContainer.classList.contains("list")) {
    toggleButton.textContent = "▦" // Switch to Grid Icon
  } else {
    toggleButton.textContent = "📄" // Switch to List Icon
  }
})

const currentYear = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = 
`&copy; ${currentYear} Raphael Daveal | Last Modified: ${document.lastModified}`;

// Set initial icon
toggleButton.textContent = "📄";

getMembers()
