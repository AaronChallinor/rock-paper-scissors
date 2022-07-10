//TOP ROCK PAPER SCISSORS. Currently played via the browser console. 
document.addEventListener("DOMContentLoaded", function() {

const selections = ["ROCK","PAPER","SCISSORS"];
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
        scoresSection.append(`- `);
        return(`You played ${playerSelection} and the computer played ${computerSelection}... It's a tie!`);
        

        
    }

    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        playerScore++; //If this is placed after the return statement this it doesn't work. The variable becomes "unreachable".
        scoresSection.append(`o `);
        return(`You played ${playerSelection} and the computer played ${computerSelection}... Nice!`);
        
    }

    else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
        computerScore++;
        scoresSection.append(`x `); 
        return(`You played ${playerSelection} and the computer played ${computerSelection}... Ouch!`);
        
    }

    else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        playerScore++;
        scoresSection.append(`o `);
        return(`You played ${playerSelection} and the computer played ${computerSelection}... Nice!`);
        
    }

    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        computerScore++;
        scoresSection.append(`x `);
        return(`You played ${playerSelection} and the computer played ${computerSelection}... Ouch!`);
        
    }


    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        playerScore++;
        scoresSection.append(`o `);
        return(`You played ${playerSelection} and the computer played ${computerSelection}... Nice!`);
        
    }

    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        computerScore++;
        scoresSection.append(`x `);
        return(`You played ${playerSelection} and the computer played ${computerSelection}... Ouch!`);
        
    }


    else{
        scoresSection.append(`? `);
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

        //Execute the function every 2 seconds.
        let intervalId = window.setInterval(function(){
            if(playerScore ===5 || computerScore ===5){

                resultsSection.innerText = 
            
                `THE END!
        
                 Your final score is ${playerScore}.
                 The computer's final score is ${computerScore}.
                 Restarting in 7 seconds...
                 
                 `
                 //Reloads the page after 7 seconds.
                 setTimeout("location.reload(true);", 7000);

                 if(playerScore > computerScore){
                resultsSection.append(`You Win!`)
                 }
                 
                 else {resultsSection.append(`Better Luck Next Time!`)
        
                 }



            }
          }, 2000);





}});

