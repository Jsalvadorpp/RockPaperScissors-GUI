const gameMoves = document.querySelectorAll(".move-box input");
const roundText = document.querySelector("#round");
const playerSelectionText = document.querySelector("#player-selection");
const computerSelectionText = document.querySelector("#computer-selection");
const resultsText = document.querySelector("#results-container");
const playerScoreText = document.querySelector("#human-player .score-box");
const computerScoreText = document.querySelector("#pc-player .score-box");
var round = 0;
var computerScore = 0;
var playerScore = 0;

gameMoves.forEach( move => move.addEventListener("click",event => {
    let playerSelection = event.target.name;
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
})
);

function computerPlay(){

    let moves = {
        0: "paper",
        1 : "rock",
        2 : "scissors",
    };
    let randomNumber= Math.floor(Math.random() * 3);
    let randomPlay = moves[randomNumber];
    return randomPlay;
}

function playRound(playerSelection, computerSelection){

    let result;
    
    round++;
    roundText.textContent = `round: ${round}`;

    playerSelectionText.textContent = `you selected ${playerSelection}`;
    computerSelectionText.textContent = `the PC selected ${computerSelection}`;

    if(playerSelection == computerSelection){
        result = "tie";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        result = "win";
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        result = "win";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        result = "win";
    }else{
        result = "lose";
    }

    if(result == "tie"){
        resultsText.textContent = `it's a tie!`;
    }
    if(result == "win"){
        resultsText.textContent = `you win!, ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        playerScoreText.textContent = `${playerScore}`;
    }
    if(result == "lose"){
        resultsText.textContent = `you lose!, ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        computerScoreText.textContent = `${computerScore}`;
    }

    if(playerScore == 5){
        alert(
        `                      total rounds: ${round} 
        You WIN the game!!!, congratulations        `);
        resetScore();
    }
    if(computerScore == 5){
        alert(
        `                   total rounds: ${round}
        you Lose the game!, too bad! :c         `);
        resetScore();
    }
}

function resetScore(){
    round = 0;
    computerScore = 0;
    playerScore = 0;
    roundText.textContent = `round: ${round}`;
    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;
    resultsText.textContent = ``;
    playerSelectionText.textContent = ``;
    computerSelectionText.textContent = ``; 
}




