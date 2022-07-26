let score1 = 0;
let score2 = 0;
let first = 1;
let chanceToPlayer1 = 0;
let chanceToPlayer2 = 0;
let welcomeTag = document.querySelector(".welcome");
let closeTag = document.querySelector(".close");
let rulesTag = document.querySelector(".rules");
let startTag = document.querySelector(".start");
let rollTag1 = document.querySelector(".roll1");
let rollTag2 = document.querySelector(".roll2");
let player1Tag = document.querySelector(".player1");
let player2Tag = document.querySelector(".player2");
let dice1Tag = document.querySelector(".dice1");
let dice2Tag = document.querySelector(".dice2");
let playernameTag = document.querySelector(".playername");
let score1Tag = document.querySelector(".score1");
let score2Tag = document.querySelector(".score2");
let winTag = document.querySelector(".win");

function close_rules() {
    welcomeTag.classList.add("hidden");
}

function show_rules() {
    welcomeTag.classList.remove("hidden");
}

function start_roll() {
    chanceToPlayer1 = 1;
    startTag.innerHTML = "NEW GAME"
    rollTag1.classList.remove("hidden");
    player2Tag.classList.add("opacity");
    startTag.removeEventListener("click", start_roll);
    startTag.addEventListener("click", start);
}

function reset() {
    rollTag1.classList.add("hidden");
    rollTag2.classList.add("hidden");
    dice1Tag.classList.add("hidden");
    dice2Tag.classList.add("hidden");
    playernameTag.classList.add("hidden");
    player1Tag.classList.remove("opacity");
    player2Tag.classList.remove("opacity");
}

function start() {
    reset();
    if (!first) {
        startTag.removeEventListener("click", start);
    }
    first = 0;
    score1 = 0;
    score2 = 0;
    startTag.innerHTML = "START"
    score1Tag.innerHTML = "SCORE : 0";
    score2Tag.innerHTML = "SCORE : 0";
    winTag.classList.add("hidden");
    welcomeTag.classList.remove("hidden");
    closeTag.addEventListener("click", close_rules);
    rulesTag.addEventListener("click", show_rules);
    startTag.addEventListener("click", start_roll);
    rollTag1.addEventListener("click", rolling_player1);
    rollTag2.addEventListener("click", rolling_player2);

}

function rolling_player1() {
    rollTag1.classList.add("hidden");
    dice1Tag.classList.add("hidden");
    dice2Tag.classList.add("hidden");
    let dice1 = Math.ceil(Math.random() * 6);
    let dice2 = Math.ceil(Math.random() * 6);
    playernameTag.innerHTML = "Rolling ...";
    playernameTag.classList.remove("hidden");
    dice1Tag.classList.remove("hidden");
    dice2Tag.classList.remove("hidden");
    let change = setInterval(rolling, 150);

    setTimeout(function() {
        clearInterval(change);
        dice1Tag.src = "images/dice_" + dice1 + ".png";
        dice2Tag.src = "images/dice_" + dice2 + ".png";

        if (dice1 === 1 && dice2 === 1) {
            playernameTag.innerHTML = "player 2 CHANCE";
            score1 = 0;
            score1Tag.innerHTML = "SCORE : " + score1;
            chanceToPlayer1 = 0;
            chanceToPlayer2 = 1;
            player1Tag.classList.add("opacity");
            player2Tag.classList.remove("opacity");
            rollTag2.classList.remove("hidden");
        } else if (dice1 === dice2) {
            playernameTag.innerHTML = "player 1 CHANCE";
            score1 += (dice1 + dice2);
            score1Tag.innerHTML = "SCORE : " + score1;
            player2Tag.classList.add("opacity");
            rollTag1.classList.remove("hidden");
        } else {
            playernameTag.innerHTML = "player 2 CHANCE";
            score1 += (dice1 + dice2);
            score1Tag.innerHTML = "SCORE : " + score1;
            chanceToPlayer1 = 0;
            chanceToPlayer2 = 1;
            player1Tag.classList.add("opacity");
            player2Tag.classList.remove("opacity");
            rollTag2.classList.remove("hidden");
        }
        if (score1 >= 100) win();
    }, 1000);
}

function rolling_player2() {
    rollTag2.classList.add("hidden");
    dice1Tag.classList.add("hidden");
    dice2Tag.classList.add("hidden");
    let dice1 = Math.ceil(Math.random() * 6);
    let dice2 = Math.ceil(Math.random() * 6);
    playernameTag.innerHTML = "Rolling ...";
    playernameTag.classList.remove("hidden");
    dice1Tag.classList.remove("hidden");
    dice2Tag.classList.remove("hidden");
    let change = setInterval(rolling, 150);

    setTimeout(function() {
        clearInterval(change);
        dice1Tag.src = "images/dice_" + dice1 + ".png";
        dice2Tag.src = "images/dice_" + dice2 + ".png";

        if (dice1 === 1 && dice2 === 1) {
            playernameTag.innerHTML = "player 1 CHANCE";
            score2 = 0;
            score2Tag.innerHTML = "SCORE : " + score2;
            chanceToPlayer2 = 0;
            chanceToPlayer1 = 1;
            player2Tag.classList.add("opacity");
            player1Tag.classList.remove("opacity");
            rollTag1.classList.remove("hidden");
        } else if (dice1 === dice2) {
            playernameTag.innerHTML = "player 2 CHANCE";
            score2 += (dice1 + dice2);
            score2Tag.innerHTML = "SCORE : " + score2;
            player1Tag.classList.add("opacity");
            rollTag2.classList.remove("hidden");
        } else {
            playernameTag.innerHTML = "player 1 CHANCE";
            score2 += (dice1 + dice2);
            score2Tag.innerHTML = "SCORE :" + score2;
            chanceToPlayer2 = 0;
            chanceToPlayer1 = 1;
            player2Tag.classList.add("opacity");
            player1Tag.classList.remove("opacity");
            rollTag1.classList.remove("hidden");
        }
        if (score2 >= 100) win();
    }, 1000);
}


function rolling() {
    let rnd1 = Math.ceil(Math.random() * 6);
    let rnd2 = Math.ceil(Math.random() * 6);
    dice1Tag.src = "images/dice_" + rnd1 + ".png";
    dice2Tag.src = "images/dice_" + rnd2 + ".png";
}

function win() {
    if (score1 >= 100) {
        winTag.innerHTML = "PLAYER ONE HAS WON !!!";
    } else if (score2 >= 100) {
        winTag.innerHTML = "PLAYER TWO HAS WON !!!";
    }
    winTag.classList.remove("hidden");
    reset();
}

start();