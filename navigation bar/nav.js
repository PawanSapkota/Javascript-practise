console.log("This is nav bar");

const menuBtn = document.querySelector(".mob-btn");
const header = document.querySelector(".header");

menuBtn.addEventListener("click",function(){
    header.classList.toggle("nav__open");

})