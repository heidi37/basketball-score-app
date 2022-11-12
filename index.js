let homeScore = document.getElementById('home')
let guestScore = document.getElementById('guest')

let home = 0;
let guest = 0;

function homeOne() {
    home += 1
    homeScore.textContent = home
    winning()
}
function homeTwo() {
    home += 2
    homeScore.textContent = home
    winning()
    
}
function homeThree() {
    home += 3
    homeScore.textContent = home
    winning()
    
}
function guestOne() {
    guest += 1
    guestScore.textContent = guest
    winning()
    
}
function guestTwo() {
    guest += 2
    guestScore.textContent = guest
    winning()
    
}
function guestThree() {
    guest += 3
    guestScore.textContent = guest
    winning()
    
}

function reset() {
    guest = 0
    home = 0
    homeScore.textContent = home
    guestScore.textContent = guest
    guestScore.style.borderBottom = "none"
        homeScore.style.borderBottom = "none"
    
}

function winning() {
    if (home > guest) {
        homeScore.style.borderBottom = "6px solid #6EE7B7"
        guestScore.style.borderBottom = "6px solid #111827"
    } else if (guest > home) {
        guestScore.style.borderBottom = "6px solid #6EE7B7"
        homeScore.style.borderBottom = "6px solid #111827"
    }
}