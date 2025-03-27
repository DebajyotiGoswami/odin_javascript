let humanScore = 0;
let computerScore = 0;

console.log("Welcome to the Game of 'ROCK-PAPER-SCISSORS'");

function getComputerChoice(){
    //return one of rock, paper and scissors
    let choice = ['rock' , 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random()* choice.length)

    return choice[randomIndex];
}

function getHumanChoice(){
    //get input from human
    //assume the user will enter a valid return always
    choice = prompt("What is your choice: ROCK / PAPER / SCISSORS ? ").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice){
    let bothChoice = humanChoice+ '-'+ computerChoice;
    let humanWin = false;

    console.log(`Your choice: ${humanChoice}\nComputer choice: ${computerChoice}`);
    if(humanChoice === computerChoice){
        return 'THATS A DRAW';
    }
    
    if(bothChoice === 'paper-rock' || bothChoice === 'rock-scissors' || bothChoice === 'scissors-paper'){
        humanWin = true;
    }

    if(humanWin){
        return `YOU WIN !! ${humanChoice} beats ${computerChoice}`;
    }
    
    return `COMPUTER WIN.... ${computerChoice} beats ${humanChoice}`;
    
}

console.log(playRound(getHumanChoice(), getComputerChoice()));

//rock paper     rock
//paper rock     human
//paper scissors pc
//scissors paper human
//rock scissors  human
//scissors rock  pc