/*project 1st*/

let cartQ = 0

/*project 2nd*/

function playGame(playerMove) {
  
  const computerMove = pickComputerMove();
   
   
   let result = '';
   
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
   
               result = 'You Win.';
   
   }
     
   }
   
   alert(`Computer picked ${computerMove}, you picked ${playerMove}, ${result}`)
   
}

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
