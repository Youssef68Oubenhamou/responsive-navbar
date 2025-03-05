const closeBtn = document.getElementById("close-btn");
const navUl = document.getElementById("navbar");
const nav = document.getElementById("nav");
const burger = document.getElementById("burger-menu");

// nav.style.height = "12vh";
// navUl.style.display = "flex";
// navUl.style.flexDirection = "row";

burger.addEventListener("click" , (event) => {

    nav.style.height = "90vh";
    navUl.style.display = "flex";
    navUl.style.flexDirection = "column";
    
})