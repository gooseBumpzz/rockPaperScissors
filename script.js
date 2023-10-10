let arr = ["rock", "paper", "scissors"];

// selecting a random choice from the arr
function getComputerChoice() {
    let choice = arr[(Math.floor(Math.random() * arr.length))];
    //console.log(arr[(Math.floor(Math.random() * arr.length))].toLowerCase());
    return choice;
}
// playing one round of game
function oneRoundGame (playerSelection, computerSelection){
    playerSelection =  prompt("What do you choose: rock, paper or scissors?").toLowerCase();
    // console.log(playerSelection);
    computerSelection = getComputerChoice();
    // console.log(computerSelection);
    if (playerSelection === "rock" && computerSelection==="scissors"){
        return("You win! Rock beats Scissors");
    }
    else if (playerSelection === "rock" && computerSelection==="paper" ){
        return("You lose! Paper beats Rock");
    }
    else if (playerSelection === "rock" && computerSelection === "rock"){
        return("It's a draw! Rock = Rock. Try again");
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return("You win! Paper beats Rock");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return("You lose! Scissors beat Paper");
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
        return("It's a draw! Paper = Paper. Try Again");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return("You win! Scissors beat Paper");
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return("You lose! Rock beats Scissors");
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return("It's a draw! Scissors = Scissors");
    }
    else {
        return("Wrong entry. Check your spelling and try again.")
    }
}

let playerSelection =  "rock";
let computerSelection = getComputerChoice();

function game (){
    let playerWins = 0;
    let compWins = 0;
    let draws = 0;

    for (i =1; i<=5; i++){
        let result = oneRoundGame (playerSelection, computerSelection);
        // console.log (result);
        if (result.substring(0,8) === "You win!"){
            playerWins +=1;
            //console.log("Player wins: " + playerWins);
            console.log(result);
        }
        else if (result.substring(0,9) === "You lose!"){
            compWins +=1;
            //console.log("Computer wins: " +compWins);
            console.log(result);
        }
        else if (result.substring(0,12) === "It's a draw!"){
            draws += 1;
            //console.log("Draws: " +draws);
            console.log(result);
        }
        else {
            console.log ("Misspelled word. This round didn't count.")
        }
        
    }
    console.log ("pWins = " + playerWins);
    console.log ("cWins = " + compWins);
    console.log ("Draws = " + draws);

    if (playerWins > compWins){
        console.log ("Game over. Congrats! You won the game!")
    }
    else if (playerWins === compWins){
        console.log("Game over. It's a draw! Try again.")
    }
    else {
        console.log("Game over. You lost :( better luck next time.")
    }

}

game();


