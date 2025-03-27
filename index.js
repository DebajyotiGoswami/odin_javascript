console.log("hello world from external javascript file");

function getComputerChoice(){
    let choice = ['rock' , 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random()* choice.length)

    return choice[randomIndex];
}

console.log(getComputerChoice());