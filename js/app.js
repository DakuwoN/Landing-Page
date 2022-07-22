
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
    const sec1Height = section1.getBoundingClientRect();
    const sec2Height = section2.getBoundingClientRect();
    const sec3Height = section3.getBoundingClientRect();
    const sec4Height = section4.getBoundingClientRect();

    windowScrollY = window.scrollY

    // console.log(sec1Height)

    if (windowScrollY > sec1Height.top) {
        section1.classList.add("your-active-class")
        section2.classList.remove("your-active-class")
        section3.classList.remove("your-active-class")
        section4.classList.remove("your-active-class")
    }

    if (windowScrollY > sec2Height.top + 200) {
        section2.classList.add("your-active-class")
        section1.classList.remove("your-active-class")
        section3.classList.remove("your-active-class")
        section4.classList.remove("your-active-class")
    }

    if (windowScrollY > sec3Height.top + 400) {
        section3.classList.add("your-active-class")
        section2.classList.remove("your-active-class")
        section1.classList.remove("your-active-class")
        section4.classList.remove("your-active-class")
    }

    if (windowScrollY > sec4Height.top + 600) {
        section4.classList.add("your-active-class")
        section3.classList.remove("your-active-class")
        section2.classList.remove("your-active-class")
        section1.classList.remove("your-active-class")

    }
})



// Scroll to anchor ID using scrollTO event
const navLinks = document.querySelectorAll("li");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");

navLinks[0].onclick = () => {
    section1.scrollIntoView({ behavior: "smooth", block: "center" })
}

navLinks[1].onclick = () => {
    section2.scrollIntoView({ behavior: "smooth", block: "center" })
}

navLinks[2].onclick = () => {
    section3.scrollIntoView({ behavior: "smooth", block: "center" })
}

navLinks[3].onclick = () => {
    section4.scrollIntoView({ behavior: "smooth", block: "center" })
}





navLinks.forEach(link => {
    link.click = () => {
        link.classList.add("active")
    }

    link.onmouseleave = () => {
        link.classList.remove("active")
    }
})
