/*project 1st*/

let cartQ = 0

/*project 2nd*/

const score = {
  wins: 0,
  losses: 0,
  ties: 0
}

function playGame(playerMove) {
  
  const computerMove = pickComputerMove();
   
   
   let result = '';
   
   //the algorithm 
   
   if (playerMove === 'scissors') {
     
      if (computerMove === 'stone') {
   
          result = 'You lose.';
   
     } else if (computerMove === 'paper') {
   
                 result = 'You win.';
   
     } else if (computerMove === 'scissors') {
   
                 result = 'Tie.';
   
    }
    
    
    
   } else if (playerMove === 'paper') {
     
     if (computerMove === 'stone') {
   
         result = 'You win.';
   
   } else if (computerMove === 'paper') {
   
               result = 'Tie.';
   
   } else if (computerMove === 'scissors') {
   
               result = 'You lose.';
   
   }
   
   
   
     
   } else if (playerMove === 'stone') {
     
     if (computerMove === 'stone') {
   
         result = 'Tie.';
   
   } else if (computerMove === 'paper') {
   
               result = 'You lose.';
   
   } else if (computerMove === 'scissors') {
   
               result = 'You win.';
   
   }
     
   }
   
   //updating the scores.
   
   if (result === 'You win.') {
     score.wins += 1;
   } else if (result === 'You lose.') {
     score.losses += 1;
   } else if (result === 'Tie.') {
     score.ties += 1;
   }
   
   alert(`Computer picked ${computerMove}, you picked ${playerMove}, ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`)
   
}

//picking computer move.

function pickComputerMove() {
  
  const randomNumber = Math.random()
   
   let computerMove = '';
   
   if (randomNumber >= 0 && randomNumber < 1/3) {
   
    computerMove = 'stone';
    
   } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
   
   computerMove = 'paper';
   
   } else if (randomNumber >= 2/3 && randomNumber < 1) {
   
   computerMove = 'scissors';
   
   }
   
   return computerMove;
   
}
