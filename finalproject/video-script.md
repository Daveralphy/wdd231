# Video Demonstration Script - WindVeal Technologies

## [0:00 - 0:30] Introduction & Home Page
"Hello, my name is Raphael Daveal. This is my final project for WDD 231, titled WindVeal Technologies. It is a website for a software and AI solutions company.

Here on the Home page, you can see the Hero section with a call-to-action. Below that is the Services section. These cards are not hardcoded; they are generated dynamically using JavaScript fetching data from a JSON file."

## [0:30 - 1:00] Responsiveness & Menu
"The site is fully responsive. If I resize the window to a mobile view, you can see the layout adjusts. The navigation menu collapses into a hamburger button. Clicking it opens the mobile menu, and clicking it again closes it. The service cards on mobile also feature a horizontal scroll for better user experience."

## [1:00 - 1:45] Dynamic Pages (Portfolio & Blog)
"Let's look at the other pages.
*   **Portfolio:** This page loads a different set of data from `portfolio.json`. It displays project names, clients, and descriptions.
*   **Blog:** Similarly, the Blog page fetches articles from `blog.json`, showing titles, authors, and categories.
This demonstrates the reusability of my JavaScript code to handle different data sources."

## [1:45 - 2:30] Modal Feature
"One of the key features is the Modal. When I click 'View Details' on any card—whether it's a service, project, or blog post—a dialog window opens. This modal is populated dynamically with specific details for that item. I can close it using the 'Close' button or by clicking outside the modal."

## [2:30 - 3:30] Form & Local Storage
"Now, let's go to the Contact page. I'll fill out this form with some test data... and click Send.
This redirects me to the Thank You page. Here, JavaScript parses the URL parameters to display the information I just submitted, confirming the form works correctly.
Also, in the background, I am using Local Storage to track user visits, which persists even if I refresh the page."

## [3:30 - 4:00] Code Overview
"Briefly looking at the code:
*   `main.js` handles the `fetch` API to get the JSON data and render the cards.
*   `modal.js` manages the `<dialog>` element.
*   I used ES Modules to keep the code organized.
*   The CSS uses CSS Grid and Flexbox for the layouts.

That covers the main features of my project. Thank you for watching!"

## Checklist of Features to Show
1.  [ ] Introduction (Name, Course, Project)
2.  [ ] Responsiveness (Desktop vs Mobile, Hamburger Menu)
3.  [ ] Dynamic Content (Home, Portfolio, Blog loading from JSON)
4.  [ ] Modal Functionality (Open/Close dialog)
5.  [ ] Form Submission (Contact -> Thank You page data)
6.  [ ] Local Storage (Mention it's tracking visits)
7.  [ ] Code Walkthrough (Fetch, Modules, CSS Grid)