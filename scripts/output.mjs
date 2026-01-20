export function displayCourses(courseArray) {
    const courseList = document.querySelector("#course-list");
    const totalCredits = document.querySelector("#total-credits");

    courseList.innerHTML = "";
    let total = 0;

    courseArray.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>Credits: ${course.credits}</p>
        `;

        courseList.appendChild(card);
        total += course.credits;
    });

    totalCredits.textContent = total;
}

export function setTitle(courseName) {
    document.querySelector("h1").textContent = courseName;
}

export function renderSections(sections) {
    const tbody = document.querySelector("#sections");
    tbody.innerHTML = "";

    sections.forEach(section => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${section.sectionNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
        `;
        tbody.appendChild(row);
    });
}