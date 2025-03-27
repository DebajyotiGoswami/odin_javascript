let humanScore = 0;
let computerScore = 0;

console.log("hello world from external javascript file");

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
    console.log(choice);
}

console.log(getHumanChoice());
console.log(getComputerChoice());