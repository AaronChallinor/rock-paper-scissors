//TOP Rock Paper Scissors. Currently played via the browser console. 
const selections = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    return selections[Math.floor(Math.random()*3)];
    }


function playARound(playerSelection, computerSelection){


    playerSelection = prompt("Make a selection...").toLowerCase();
    computerSelection = computerPlay();
 
    if(playerSelection === computerSelection){
        return(`You played ${playerSelection} and the computer played ${computerSelection}... It's a tie!`);
        
    }

    else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++; //If this is placed after the return statement this it doesn't work. The variable becomes "unreachable".
        return(`You played ${playerSelection} and the computer played ${computerSelection}... You Win!`);
        
    }

    else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++; 
        return(`You played ${playerSelection} and the computer played ${computerSelection}... You Lose :(`);
        
    }

    else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return(`You played ${playerSelection} and the computer played ${computerSelection}... You Win!`);
        
    }

    else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        return(`You played ${playerSelection} and the computer played ${computerSelection}... You Lose :(`);
        
    }


    else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        return(`You played ${playerSelection} and the computer played ${computerSelection}... You Win!`);
        
    }

    else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return(`You played ${playerSelection} and the computer played ${computerSelection}... You Lose :(`);
        
    }


    else{
        return(`You can't bring a ${playerSelection} to this fight!`)
        
        
    }

}



function game(){

    for(i = 0;i <= 4;i++){
        computerPlay();
        console.log(playARound())
  
    }
    console.log(`Your final score is ${playerScore}.`);
    console.log(`The computer's final score is ${computerScore}.`);
    if(playerScore > computerScore){
        console.log('You did it! Congratulations');}

    else if (playerScore === computerScore){
            console.log("It's a tie. Shake hands and try again!")}

    else if(playerScore < computerScore){
                console.log('Too bad, you lost. Try again next time!');}
    }

    

game();

