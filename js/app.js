


const navBar = document.querySelector('#navbar__list');
const pageSections = document.getElementsByTagName("section");
let sectionTops = [];

// This function removes the active states
function removeActiveStates() {
    const myATags = document.getElementsByTagName("a");
    for (let i = 0; i < pageSections.length; i++) {
        pageSections[i].classList.remove("your-active-class")
        myATags[i].classList.remove("active")
    }
}

// Build the navbar dynamically 
for (let i = 0; i < pageSections.length; i++) {
    sectionTops[i] = pageSections[i].getBoundingClientRect().top + window.scrollY;
    const liTag = document.createElement('li');
    const aTag = document.createElement('a');
    const aText = pageSections[i].getAttribute('data-nav')
    aTag.setAttribute('href', '#' + pageSections[i].id)
    aTag.innerHTML = aText;
    liTag.append(aTag);
    navBar.append(liTag);
    aTag.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionScroll = pageSections[i];
        sectionScroll.scrollIntoView({
            behavior: "smooth"
        })
        removeActiveStates()
        e.target.classList.add("active")
        pageSections[i].classList.add("your-active-class")
    })
    if (i == pageSections.length - 1) {
        sectionTops[i + 1] = pageSections[i].getBoundingClientRect().bottom + window.scrollY;
    }
}

// Tracks the scrolling on the page 
function scrollTracking() {
    const myATags = document.getElementsByTagName("a");
    for (let i = 0; i < pageSections.length; i++) {
        let firstTop = sectionTops[i];
        let secondTop = sectionTops[i + 1];
        let currentScrollPosition = window.scrollY;
        if (firstTop <= currentScrollPosition && secondTop >= currentScrollPosition) {
            removeActiveStates();
            pageSections[i].classList.add("your-active-class")
            myATags[i].classList.add("active")
        }

    }
}

window.addEventListener("scroll", scrollTracking)

