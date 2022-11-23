/* FAQ */

let faqFirst = document.querySelector("#faq-first");
let faqSecond = document.querySelector("#faq-second");
let faqThird = document.querySelector("#faq-third");

faqFirst.addEventListener("click", function() {
    if(faqFirst.classList.contains("active-collapse")) {
        faqFirst.classList.remove("active-collapse");
    } else {
        document.querySelector(".faq-row").classList.remove("active-collapse");
        faqFirst.classList.add("active-collapse");
        faqSecond.classList.remove("active-collapse");
        faqThird.classList.remove("active-collapse");
    }
});
faqSecond.addEventListener("click", function() {
    if(faqSecond.classList.contains("active-collapse")) {
        faqSecond.classList.remove("active-collapse");
    } else {
        document.querySelector(".faq-row").classList.remove("active-collapse");
        faqSecond.classList.add("active-collapse");
        faqFirst.classList.remove("active-collapse");
        faqThird.classList.remove("active-collapse");
    }
});
faqThird.addEventListener("click", function() {
    if(faqThird.classList.contains("active-collapse")) {
        faqThird.classList.remove("active-collapse");
    } else {
        document.querySelector(".faq-row").classList.remove("active-collapse");
        faqThird.classList.add("active-collapse");
        faqFirst.classList.remove("active-collapse");
        faqSecond.classList.remove("active-collapse");
    }
});