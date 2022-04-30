var menu = document.querySelector(".dropdown");
var button = document.querySelector(".hamburger");

function dropDown() {
    if (window.getComputedStyle(menu).display == "none") {
        menu.style.display = "flex";
        menu.style.top = "10vh";
    } else if (window.getComputedStyle(menu).display == "flex") {
        menu.style.display = "";
        menu.style.top = "";
    }
};

//Changes the burger to a cross

var topPatty = document.querySelector(".top");
var middlePatty = document.querySelector(".middle");
var bottomPatty = document.querySelector(".bottom");

function crossBurger() {
    if (window.getComputedStyle(middlePatty).opacity == "1") {
        middlePatty.style.opacity = 0;
        topPatty.style.transform = "rotate(45deg)";
        bottomPatty.style.transform = "rotate(-45deg)";
        topPatty.style.top = "8px";
        bottomPatty.style.top = "-8px";
    } else if (window.getComputedStyle(middlePatty).opacity == "0") {
        middlePatty.style.opacity = 1;
        topPatty.style.transform = "";
        bottomPatty.style.transform = "";
        topPatty.style.top = "";
        bottomPatty.style.top = "";
    }
};

button.addEventListener("click", dropDown);
button.addEventListener("click", crossBurger);