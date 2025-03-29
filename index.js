let humanScore = 0;
let computerScore = 0;

//console.log("\nWelcome to the Game of 'ROCK-PAPER-SCISSORS'\n");
let bttnCommon = document.querySelectorAll('button');

bttnCommon.forEach(bttn => {
    bttn.addEventListener('click' , ()=> {
        //bttnCommon contains NodeList of all buttons on the DOM
        //bttn is the individual button
        //bttn.id is the id of that individaul button i.e. rock / paper / scissors
        let bttnName = bttn.id;
        playRound(bttnName, getComputerChoice());
    });
});

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
        humanScore+= 1;
        return `YOU WIN !! ${humanChoice} beats ${computerChoice}\n`;
    }

    computerScore+= 1;
    return `COMPUTER WIN.... ${computerChoice} beats ${humanChoice}\n`;
}

// function playGame(){
//     for(let i= 0; i< 5; i++){
//         console.log(playRound(getHumanChoice(), getComputerChoice()));
//     }
// }

// playGame();
console.log(`Game Completed\nYour Score: ${humanScore}\nComputer's Score: ${computerScore}`);


//rock paper     rock
//paper rock     human
//paper scissors pc
//scissors paper human
//rock scissors  human
//scissors rock  pc