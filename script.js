//When a user makes its choice, it will tell the computer to pick a random number 1-3 which will represent rock-1 paper-2 scissors-3
// using if else statements to see who wins
//human choice using prompt or buttons
//first to five, then restart

//function playRound();


let getComputerChoice;   
let getHumanChoice;


getComputerChoice = Math.floor(Math.random()*3);
if(getComputerChoice === 0) {
    console.log ("Rock");
};

if(getComputerChoice === 1) {
    console.log ("Paper");
};

if(getComputerChoice === 2) {
    console.log ("Scissors");
};

getHumanChoice = window.prompt("What do you choose?");

console.log(getHumanChoice);