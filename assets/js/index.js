// My consts for the players
const playerText = document.querySelector("#playerText");
const opponentText = document.querySelector("#opponentText");
const resultText = document.querySelector("#resultText");

// My choice buttons
const choiceBtns = document.querySelectorAll(".choiceBtn");

// Variables to store
let player;
let opponent;
let result;

// For each button
choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    opponentTurn();
    playerText.textContent = `Player: ${player}`;
    opponentText.textContent = `Opponent: ${opponent}`;
    resultText.textContent = checkWinner();
}));

// Opponents turn
function opponentTurn(){

    const randNum = Math.floor(Math.random() * 5) + 1;

    switch(randNum){
        case 1:
            opponent = "SWORD";
            break;
        case 2:
            opponent = "SHIELD";
            break;
        case 3:
            opponent = "ARCANE";
            break;
        case 4:
            opponent = "CANNON";
            break;
        case 5:
            opponent = "SPEAR";
            break;
    }
}

// The check winner function
function checkWinner(){
    if(player == opponent){
        return "You are equally matched!";
    }
    else if (opponent == "SWORD"){
        return (player == "CANNON") ? "Your opponent simple blows up!" : "You are stricken down";
    }
    else if (opponent == "SHIELD") {
        return (player == "SWORD") ? "You manage to cut your opponent down!" : "You are stricken down";
    }
    else if (opponent == "ARCANE") {
        return (player == "SPEAR") ? "You manage to poke the opponent really hard!" : "You are stricken down";
    }
    else if (opponent == "CANNON") {
        return (player == "ARCANE") ? "The cannon is now a harmless sheep!" : "You are stricken down";
    }
    else if (opponent == "SPEAR") {
        return (player == "SHIELD") ? "The spear is no match for the mighty shield!" : "You are stricken down";
    }
}