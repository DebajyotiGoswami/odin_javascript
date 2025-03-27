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
    console.log(bothChoice);
    // 'rock-rock'
    // 'rock-paper'
    // 'rock-scissors'
    // 'paper-rock'
    // 'paper-paper'
    // 'paper-scissors'
    // 'scissors-scissors'
    // 'scissors-rock'
    // 'scissors-paper'
}

console.log(playRound(getHumanChoice(), getComputerChoice()))