document.addEventListener("DOMContentLoaded", function() {

    let navigationTrigger = document.querySelector("#mobile-trigger");
    let menu = document.getElementById("mobile-sidebar");

    navigationTrigger.addEventListener("click", function() {
        if(menu.classList.contains("opened")) {
            navigationTrigger.classList.remove("active");
            menu.classList.remove("opened")
        } else {
            navigationTrigger.classList.add("active");
            menu.classList.add("opened");
        }
    });

    /* CHANGE CONTENT */

    /* # Download */

    let customButton = document.querySelector("#custom-btn");
    let randomButton = document.querySelector("#random-btn");

    customButton?.addEventListener("click", function() {
        if(customButton.classList.contains("active")) return customButton.classList.remove("active")
        randomButton.classList.remove("active")
        customButton.classList.add("active")
    });

    randomButton?.addEventListener("click", function() {
        if(randomButton.classList.contains("active")) return randomButton.classList.remove("active")
        customButton.classList.remove("active")
        randomButton.classList.add("active")
    });

    /* SHOW IP */

    let ipInput = document.querySelector("#Fasthe-input");
    let showIcon = document.querySelector("#Fasthe-show");

    showIcon.addEventListener("click", function() {
        ipInput.type = "text";
    });

});