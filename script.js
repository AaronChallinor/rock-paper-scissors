//TOP Rock Paper Scissors. Currently played via the browser console. 
document.addEventListener("DOMContentLoaded", function() {

const selections = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let buttonSelection = "blank";
button1.addEventListener("click",updateButtonSelection);
button2.addEventListener("click",updateButtonSelection);
button3.addEventListener("click",updateButtonSelection);
let resultsSection = document.getElementById("results");
let scoresSection = document.getElementById("scores");





function updateButtonSelection(){

    buttonSelection = this.innerText;
    
    
    game();


}


function computerPlay(){
    return selections[Math.floor(Math.random()*3)];
    }


function playARound(playerSelection, computerSelection){


    playerSelection = buttonSelection;
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

    //for(i = 0;i <= 4;i++){
        if(playerScore !=5 && computerScore !=5){

        computerPlay();
        //console.log(playARound())
        resultsSection.innerText = `${playARound()} 
        
        Player Score: ${playerScore} 
        Computer Score: ${computerScore}`
        }

        else {  resultsSection.innerText = 
            
        `THE END!

         Your final score is ${playerScore}.
         The computer's final score is ${computerScore}.
         
         `
        
         if(playerScore > computerScore){
        resultsSection.append(`You Win!`)
         }
         
         else {resultsSection.append(`Better Luck Next Time!`)

         }
        };



    // if(playerScore > computerScore){
    //     console.log('You did it! Congratulations');}

    // else if (playerScore === computerScore){
    //         console.log("It's a tie. Shake hands and try again!")}

    // else if(playerScore < computerScore){
    //             console.log('Too bad, you lost. Try again next time!');}
    

    



}});

