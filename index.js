let homeScore = 0
let guestScore = 0
document.getElementById("home-score").textContent = homeScore
document.getElementById("guest-score").textContent = guestScore

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let guestStoreEl =document.getElementById("guest-score")



function hadd1() {
    homeScore += 1
   homeStoreEl.textContent = homeScore
}

function hadd2() {
    homeScore += 2
   homeStoreEl.textContent = homeScore
}

function hadd3() {
     homeScore += 3
   homeStoreEl.textContent = homeScore
}


function gadd1() {
     guestScore += 1
   guestStoreEl.textContent = guestScore
}


function gadd2() {
     guestScore += 2
   guestStoreEl.textContent = guestScore
}


function gadd3() {
     guestScore += 3
   guestStoreEl.textContent = guestScore
}
