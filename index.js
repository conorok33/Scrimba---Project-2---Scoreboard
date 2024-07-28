let home = 0
let away = 0
let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")

function homeplus1() {
    home += 1;
    homeEl.textContent = home;
}

function homeplus2() {
    home += 2;
    homeEl.textContent = home;
}

function homeplus3() {
    home += 3;
    homeEl.textContent = home;
}

function awayplus1() {
    away += 1;
    guestEl.textContent = away;
}

function awayplus2() {
    away += 2;
    guestEl.textContent = away;
}

function awayplus3() {
    away += 3;
    guestEl.textContent = away;
}

