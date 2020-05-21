const header_DOM = document.querySelector(".header-border");
window.addEventListener("scroll", function (event) {
    if (window.scrollY > 624) {
        header_DOM.style.background = "#FF887B";
    } else {
        header_DOM.style.background = "transparent";
    }
})

// const aliquamBtn_DOM = document.querySelector(".aliquam-btn");
// const consequatBtn_DOM = document.querySelector(".consequat-btn");
// const feugiatBtn_DOM = document.querySelector(".feugiat-btn");

// const aliquamContent_DOM = document.querySelector(".aliquam-content");
// const consequatContent_DOM = document.querySelector(".consequat-content");
// const feugiatContent_DOM = document.querySelector(".feugiat-content");

// function handleClickOnSliderButtons(event) {
//     if (!event.target.matches(".btn-select")) return;
//     const elementClicked = event.target.closest(".btn-select");

//     if (event.target.classList.contains(".aliquam-btn")) {
//         aliquamContent_DOM.style.display = "block"
//         consequatContent_DOM.style.display = "none";
//         feugiatContent_DOM.style.display = "none";
//     } else if (event.target.classList.contains(".consequat-btn")) {

//         aliquamContent_DOM.style.display = "none";
//         consequatContent_DOM.style.display = "block";
//         feugiatContent_DOM.style.display = "none";
//     } else {

//         aliquamContent_DOM.style.display = "none";
//         consequatContent_DOM.style.display = "none";
//         feugiatContent_DOM.style.display = "block";
//     }
// }

// const sliderMain_DOM = document.querySelector(".slider-main");
// sliderMain_DOM.addEventListener("click", handleClickOnSliderButtons)