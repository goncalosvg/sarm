document.addEventListener("DOMContentLoaded", function() {

    let navigationTrigger = document.querySelector("#mobile-trigger");
    let menu = document.getElementById("mobile-sidebar");

    navigationTrigger?.addEventListener("click", function() {
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

    showIcon?.addEventListener("click", function() {
        ipInput.type = "text";
    });

    /* TERMS SCREEN */

    let getTerms = localStorage.getItem("terms");
    if(!getTerms) document.querySelector("#acceptTerms").classList.add("active");

});

var price = document.querySelector(".price");

/* PLAN SELECTION # PRODUCT */

let monthlyButton = document.querySelector("#monthlyProduct");
let lifetimeButton = document.querySelector("#lifetimeProduct");

lifetimeButton?.addEventListener("click", function(event) {
    if(!lifetimeButton.classList.contains("active")) {
        monthlyButton.classList.remove("active");
        lifetimeButton.classList.add("active");
        document.querySelector(".inputwrap").classList.remove("active");
        document.querySelector(".months").classList.remove("active");
        document.querySelector("#checkMonths").checked = false;
        price.innerHTML = "$99.99";
    }
});

monthlyButton?.addEventListener("click", function(event) {
    if(!monthlyButton.classList.contains("active")) {
        lifetimeButton.classList.remove("active");
        monthlyButton.classList.add("active");
        document.querySelector(".inputwrap").classList.add("active");
        price.innerHTML = "$9.99";
    }
});

/* MONTH SELECTION # PRODUCT */

var slider = document.getElementById("monthSelection");
var months = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
document.getElementById("monthOutput").innerHTML = months[0] + " months";

document.getElementById("checkMonths").addEventListener('click', function (event) {
    if (event.target && event.target.matches("input[type='checkbox']")) {
        if(document.querySelector(".months").classList.contains("active")) {
            document.querySelector(".months").classList.remove("active");
            price.innerHTML = "$9.99";
        } else {
            document.querySelector(".months").classList.add("active");
        }
    }
});

slider.oninput = function() {
    let monthPrice = months[slider.value] * 9.99;
    document.getElementById("monthOutput").innerHTML = months[slider.value] + " months";
    price.innerHTML = "$" + monthPrice;
}

/* ACCEPT TERMS OF SERVICE */

let acceptTermsButton = document.querySelector("#acceptTermsButton");

acceptTermsButton.addEventListener("click", function(event) {
    localStorage.setItem("terms", "accepted");
    return document.querySelector("#acceptTerms").classList.remove("active");
});