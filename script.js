const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !menuLinks.contains(e.target)) {
        menu.classList.remove('is-active')
        menuLinks.classList.remove('active')
    }
})

// document.addEventListener('contextmenu', function(e) {
//             e.preventDefault();
//         });
//

const scrollContainer = document.querySelector(".rrr-gallery");
const nextbtn = document.querySelector("#nextbtn");
const backbtn = document.querySelector("#backbtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})


function getScrollDistance() {
    if (window.innerWidth <= 768) {
        // Mobile: scroll
        return 300;  
    } else {
        // Desktop: scroll by full gallery width
        return 895;  
    }
}

nextbtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: getScrollDistance(),
        behavior: "smooth"
    });
});

backbtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: -getScrollDistance(),
        behavior: "smooth"
    });
});



