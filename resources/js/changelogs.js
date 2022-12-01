/* CHANGELOG SWITCH */

let f_switch = document.querySelector("#f-switch");
let s_switch = document.querySelector("#s-switch");
let t_switch = document.querySelector("#t-switch");

f_switch.addEventListener("click", function(e) {
    if(f_switch.classList.contains("checked")) {
        f_switch.classList.remove("checked");
    } else {
        f_switch.classList.add("checked");
    }
});

s_switch.addEventListener("click", function(e) {
    if(s_switch.classList.contains("checked")) {
        s_switch.classList.remove("checked");
    } else {
        s_switch.classList.add("checked");
    }
});

t_switch.addEventListener("click", function(e) {
    if(t_switch.classList.contains("checked")) {
        t_switch.classList.remove("checked");
    } else {
        t_switch.classList.add("checked");
    }
});