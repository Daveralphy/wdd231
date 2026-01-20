import byuiCourse, { courses } from "./course.mjs";
import { setSectionSelection } from "./sections.mjs";
import { displayCourses, setTitle, renderSections } from "./output.mjs";

/* COURSE FILTER SYSTEM */
displayCourses(courses);

const filterButton = document.getElementById("filter-button");
const filterDropdown = document.getElementById("filter-dropdown");
const cseCheckbox = document.getElementById("cse-filter");
const wddCheckbox = document.getElementById("wdd-filter");

filterButton.addEventListener("click", () => {
    filterDropdown.classList.toggle("hidden");
});

function filterCourses() {
    const isCseChecked = cseCheckbox.checked;
    const isWddChecked = wddCheckbox.checked;
    
    let filteredCourses = [];

    if (isCseChecked && isWddChecked) {
        filteredCourses = courses;
    } else if (isCseChecked) {
        filteredCourses = courses.filter(course => course.subject === "CSE");
    } else if (isWddChecked) {
        filteredCourses = courses.filter(course => course.subject === "WDD");
    }

    displayCourses(filteredCourses);

    if (!isCseChecked && !isWddChecked) {
        document.getElementById("course-list").innerHTML = "<p>No course selected</p>";
    }
}

cseCheckbox.addEventListener("change", filterCourses);
wddCheckbox.addEventListener("change", filterCourses);

/* ENROLLMENT SYSTEM */
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    byuiCourse.changeEnrollment(sectionNum);
    renderSections(byuiCourse.sections);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
});