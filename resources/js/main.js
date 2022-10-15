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

});