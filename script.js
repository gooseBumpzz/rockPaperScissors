let btnR = document.getElementById("btnR");
let btnP = document.getElementById("btnP");
let btnS = document.getElementById("btnS");
let results = document.getElementById ("results");
let resultsTotal = document.getElementById ("resultsTotal");
let gameRes = document.getElementById ("gameRes");
let btns = document.getElementsByClassName ('btns');


// check for correct scoring and win/lose message. It doesn't match
// start scorinf with the first click

btnR.addEventListener ('click', function (){
    let playerSelection = btnR.textContent.toLowerCase();
    // putting result of oneRound into a div Results
    results.textContent = score(playerSelection);
    resultsTotal.textContent = "Player: "+playerWins + " Computer: " + compWins + " Draws: "+ draws; 
    gameRes.textContent = firstToFive();
});

btnP.addEventListener ('click', function (){
    let playerSelection = btnP.textContent.toLowerCase();
    //results.textContent = oneRoundGame (playerSelection);
    results.textContent = score(playerSelection);
    resultsTotal.textContent = "Player: "+playerWins + " Computer: " + compWins + " Draws: "+ draws;
    gameRes.textContent = firstToFive();
});

btnS.addEventListener ('click', function (){
    let playerSelection = btnS.textContent.toLowerCase();
    //results.textContent = oneRoundGame (playerSelection);
    results.textContent = score(playerSelection);
    resultsTotal.textContent = "Player: "+playerWins + " Computer: " + compWins + " Draws: "+ draws;
    gameRes.textContent = firstToFive();
});


let arr = ["rock", "paper", "scissors"];
// selecting a random choice from the arr
function getComputerChoice() {
    let choice = arr[(Math.floor(Math.random() * arr.length))];
    //console.log(arr[(Math.floor(Math.random() * arr.length))].toLowerCase());
    return choice;
}
// playing one round of game
function oneRoundGame (playerSelection, computerSelection){
    //playerSelection =  prompt("What do you choose: rock, paper or scissors?").toLowerCase();
    // console.log(playerSelection);
    computerSelection = getComputerChoice();
    // console.log(computerSelection);
    if (playerSelection === "rock" && computerSelection==="scissors"){
        let youWin = "You win! Your Rock beats Scissors";
        //console.log("Comp: "+ computerSelection);
        return youWin;
    }
    else if (playerSelection === "rock" && computerSelection==="paper" ){
        let youLose = "You lose! Paper beats your Rock";
        //console.log("Comp: "+ computerSelection);
        return youLose ;
    }
    else if (playerSelection === "rock" && computerSelection === "rock"){
        let draw = "It's a draw! Rock = Rock. Try again";
        //console.log("Comp: "+ computerSelection);
        return draw ;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        let youWin = "You win! Your Paper beats Rock";
        //console.log("Comp: "+ computerSelection);
        return youWin;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        let youLose = "You lose! Scissors beat your Paper";
        //console.log("Comp: "+ computerSelection);
        return youLose;
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
        let draw = "It's a draw! Paper = Paper. Try Again";
        //console.log("Comp: "+ computerSelection);
        return draw;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        let youWin = "You win! Your Scissors beat Paper";
        //console.log("Comp: "+ computerSelection);
        return youWin;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        youLose = "You lose! Rock beats your Scissors";
        //console.log("Comp: "+ computerSelection);
        return youLose;
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors"){
        let draw = "It's a draw! Scissors = Scissors";
        //console.log("Comp: "+ computerSelection);
        return draw;
    }
    else {
        return("Wrong entry. Check your spelling and try again.")
    }
}

let playerWins = 0;
let compWins = 0;
let draws = 0;
//let computerSelection = getComputerChoice();

function score (pSelection){
    let computerSelection = getComputerChoice();
    let playerSelection = pSelection;
    let oneRound = oneRoundGame (playerSelection, computerSelection);
    if (oneRound.substring(0,8) === "You win!"){
        playerWins +=1;
        console.log(oneRound);
        return oneRound;
    }
    else if (oneRound.substring(0,9) === "You lose!"){
        compWins +=1;
        console.log(oneRound);
        return oneRound;                
    }
    else if (oneRound.substring(0,12) === "It's a draw!"){
        draws += 1;
        console.log(oneRound);
        return oneRound;
    }
    else {
        console.log ("Misspelled word. This round didn't count.")
    }

    console.log ("pWins = " + playerWins);
    console.log ("cWins = " + compWins);
    console.log ("Draws = " + draws);
}

// first to collect 5 win rounds is the winner of the game
function firstToFive (){
    // if (layerWins ==5 || compWins ==5 ||  draws ==5)



    if (playerWins ==5 && playerWins > compWins){
        console.log ("Game over. Congrats! You won the game!")
        playerWins =0; draws =0; compWins =0;
        return "Game over. Congrats! You won the game!"
         
    }
    else if (draws ==5){
        console.log("Game over. It's a draw! Try again.")
        playerWins =0; draws =0; compWins =0; 
        return "Game over. It's a draw! Try again."
    }
    else if (compWins ==5 && compWins > playerWins) {
        console.log("Game over. You lost :( better luck next time.") 
        playerWins =0; draws =0; compWins =0;
        return "Game over. You lost :( better luck next time."
    }
}








// //playing 5 rounds of the game
// function game (selection){
//     let computerSelection = getComputerChoice();
//     let playerSelection = selection;
//     let playerWins = 0;
//     let compWins = 0;
//     let draws = 0;

       
//         let result = oneRoundGame (playerSelection, computerSelection);
//         // console.log (result);
//         if (result.substring(0,8) === "You win!"){
//             playerWins +=1;
//             //console.log("Player wins: " + playerWins);
//             console.log(result);
            
//         }
//         else if (result.substring(0,9) === "You lose!"){
//             compWins +=1;
//             //console.log("Computer wins: " +compWins);
//             console.log(result);
           
//         }
//         else if (result.substring(0,12) === "It's a draw!"){
//             draws += 1;
//             //console.log("Draws: " +draws);
//             console.log(result);
//             // playerSelection = "";
//         }
//         else {
//             console.log ("Misspelled word. This round didn't count.")
//         }
//         playerSelection = "";
    
//     console.log ("pWins = " + playerWins);
//     console.log ("cWins = " + compWins);
//     console.log ("Draws = " + draws);

//     if (playerWins > compWins){
//         console.log ("Game over. Congrats! You won the game!")
//     }
//     else if (playerWins === compWins){
//         console.log("Game over. It's a draw! Try again.")
//     }
//     else {
//         console.log("Game over. You lost :( better luck next time.")
//     }
// }
// //game("rock");




