//When a user makes its choice, it will tell the computer to pick a random number 1-3 which will represent rock-1 paper-2 scissors-3
// using if else statements to see who wins
//human choice using prompt or buttons
//first to five, then restart

//function playRound();


//let getComputerChoice;   
//let getHumanChoice;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.onclick = function getHumanChoice(){
    console.log ("You picked Rock!");
}
paper.onclick = function getHumanChoice(){
    console.log ("You picked Paper!");
}
scissors.onclick = function getHumanChoice(){
    console.log ("You picked Scissors!");
}



function getComputerChoice() {Math.floor(Math.random()*3);
if(getComputerChoice === 0) {
    console.log ("Computer picked Rock");
};  

if(getComputerChoice === 1) {
    console.log ("Computer picked Paper");
};

if(getComputerChoice === 2) {
    console.log ("Computer picked Scissors");
};}



const computerSelection = getComputerChoice;
const humanSelection = getHumanChoice

function playRound()
