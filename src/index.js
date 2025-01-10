import "./styles.css";
import loadHome  from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function initializeWebsite() {
    const content = document.getElementById("content");
    const nav = document.getElementById("nav");

    function clearContent() {
        content.innerHTML = "";
    }

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", () => {
        clearContent();
        loadHome();
    })

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", () => {
        clearContent();
        loadMenu();
    })

    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener("click", () => {
        clearContent();
        loadContact();
    })

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    loadHome();
}

document.addEventListener("DOMContentLoaded", initializeWebsite);



