let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

//console.log("\nWelcome to the Game of 'ROCK-PAPER-SCISSORS'\n");
let bttnCommon = document.querySelectorAll('button');

bttnCommon.forEach(bttn => {
    bttn.addEventListener('click', () => {
        //bttnCommon contains NodeList of all buttons on the DOM
        //bttn is the individual button
        //bttn.id is the id of that individaul button i.e. rock / paper / scissors
        let bttnName = bttn.id;
        console.log(playRound(bttnName, getComputerChoice()));
    });
});

function getComputerChoice() {
    //return one of rock, paper and scissors
    let choice = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choice.length)

    return choice[randomIndex];
}

function getHumanChoice() {
    //get input from human
    //assume the user will enter a valid return always
    choice = prompt("What is your choice: ROCK / PAPER / SCISSORS ? ").toLowerCase();
    return choice;
}

function cssApply() {
    document.querySelector('.choice-class').setAttribute('style', 'color: blue; font-size: 20px;');
    document.querySelector('.result-class').setAttribute('style', 'color: red; font-size: 20px;');
    document.querySelector('.score-class').setAttribute('style', 'color: green; font-size: 20px;');
    document.querySelector('.final-class').setAttribute('style' , 'color: red; font-size: 40px; background-color: yellow;');
}

function showResult(listOfItems) {
    let div = document.querySelector('#result');
    div.innerHTML = '';

    listOfItems.forEach((item) => {
        console.log("item: " + item);
        let message = item[0];
        let className = item[1];

        let para = document.createElement('para');

        para.innerHTML = message;
        para.setAttribute('class', className);
        div.appendChild(para);
    });

    cssApply();
}

function playRound(humanChoice, computerChoice) {
    let bothChoice = humanChoice + '-' + computerChoice;
    let humanWin = false;
    let result = '';
    let choiceString = `Your choice: ${humanChoice}<br>Computer choice: ${computerChoice}<br><br>`;
    let finalString = '5 Win reached. ';

    if (humanChoice === computerChoice) {
        result = 'THATS A DRAW<br><br>';
        drawScore += 1;
    }
    else {
        if (bothChoice === 'paper-rock' || bothChoice === 'rock-scissors' || bothChoice === 'scissors-paper') {
            humanWin = true;
        }

        if (humanWin) {
            humanScore += 1;
            result = `YOU WIN !! ${humanChoice} beats ${computerChoice}<br><br>`;
        }
        else {
            computerScore += 1;
            result = `COMPUTER WIN.... ${computerChoice} beats ${humanChoice}<br><br>`;
        }
    }

    let scoreString = `Your Score: ${humanScore}<br>PC Score: ${computerScore}<br>Draw: ${drawScore}<br><br>`;

    let displayStringSet = [[choiceString, 'choice-class'], [result, 'result-class'], [scoreString, 'score-class']];

    if(humanScore == 5 || computerScore == 5){
        if(humanScore == 5){
            finalString+= 'Congratulation. You are the WINNER !!';
        }
        else if(computerScore == 5){
            finalString+= 'Computer Won. Better luck next time.';
        }
        displayStringSet.push([finalString, 'final-class']);
        humanScore = computerScore = drawScore = 0;
    }

    showResult(displayStringSet);
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