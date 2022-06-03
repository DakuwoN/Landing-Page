/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

const navBar = document.querySelector('#navbar__list');
const liTag = document.createElement('li');
const liTag2 = document.createElement('li');
liTag.innerText = 'Section 2';
liTag2.innerText = 'Section 3';

const ulStyling = {
    color: "black",
    padding: "20px 80px",
    display: "flex",
    "justify-content": "flex-end",
    gap: "30px",
}

Object.assign(navBar.style, ulStyling)

navBar.innerHTML = "<li> Section 1 </li>"
navBar.append(liTag);
navBar.appendChild(liTag2);






// Add class 'active' to section when near top of viewport




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
