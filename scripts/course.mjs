export const courses = [
    { subject: "CSE", number: 110, credits: 2, completed: true },
    { subject: "WDD", number: 130, credits: 2, completed: true },
    { subject: "CSE", number: 111, credits: 2, completed: true },
    { subject: "CSE", number: 210, credits: 2, completed: true },
    { subject: "WDD", number: 131, credits: 2, completed: true },
    { subject: "WDD", number: 231, credits: 2, completed: false }
];

const byuiCourse = {
    courseName: "Web Frontend Development I",

    sections: [
        { sectionNum: 1, enrolled: 90, instructor: "Brother Bingham" },
        { sectionNum: 2, enrolled: 90, instructor: "Sister Shultz" },
        { sectionNum: 3, enrolled: 90, instructor: "Sister Smith" }
    ],

    changeEnrollment(sectionNum, add = true) {
        const section = this.sections.find(
            s => s.sectionNum == sectionNum
        );
        if (section) {
            add ? section.enrolled++ : section.enrolled--;
        }
    }
};

export default byuiCourse;