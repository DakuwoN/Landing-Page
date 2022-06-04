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
const liTag3 = document.createElement('li');
liTag.innerText = 'Section 2';
liTag2.innerText = 'Section 3';
liTag3.innerText = 'Section 4';

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
navBar.appendChild(liTag3);



// Add class 'active' to section when near top of viewport

let windowScrollY = window.scrollY

window.addEventListener("scroll", () => {
    const sec1Height = section1.getBoundingClientRect()
    const sec2Height = section2.getBoundingClientRect()
    const sec3Height = section3.getBoundingClientRect()

    windowScrollY = window.scrollY

    // console.log(sec1Height)

    if (windowScrollY > sec1Height.top) {
        section1.classList.add("your-active-class")
        section2.classList.remove("your-active-class")
        section3.classList.remove("your-active-class")
    }

    if (windowScrollY > sec2Height.top + 200) {
        section2.classList.add("your-active-class")
        section1.classList.remove("your-active-class")
        section3.classList.remove("your-active-class")
    }

    if (windowScrollY > sec3Height.top + 400) {
        section3.classList.add("your-active-class")
        section2.classList.remove("your-active-class")
        section1.classList.remove("your-active-class")
    }
})



// Scroll to anchor ID using scrollTO event
const navLinks = document.querySelectorAll("li");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");

navLinks[0].onclick = () => {
    section1.scrollIntoView({ behavior: "smooth", block: "center" })
}

navLinks[1].onclick = () => {
    section2.scrollIntoView({ behavior: "smooth", block: "center" })
}

navLinks[2].onclick = () => {
    section3.scrollIntoView({ behavior: "smooth", block: "center" })
}



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
