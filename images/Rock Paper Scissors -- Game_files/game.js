const gameMoves = document.querySelectorAll(".move-box img");
console.log(gameMoves)

gameMoves.addEventListener("click",(event) =>{
    console.log(event.target.name);
});



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

    console.log("--you selected",playerSelection);
    console.log("--the computer selected",computerSelection);

    if(playerSelection == computerSelection){
        return "tie"
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "win"
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "win";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "win";
    }else{
        return "lose";
    }
}

