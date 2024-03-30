let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore =  document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");


const ComputerWon = () => {
  
  msg.innerText ="You loose!" ;
  compScore += 1 ;
  compscore.innerText = compScore;
}

const userWon = () => {
  
 msg.innerText =" You won!" ;
  userScore += 1;
  userscore.innerText = userScore;
}

const drawGame = () => {
  
msg.innerText =" Game was draw! play again" ;
}
  


const playGame = (userchoice) => {
   const compchoice = genCompChoice();
  if (userchoice === compchoice) {
    drawGame();
  }else if (userchoice === "rock" && compchoice === "paper") {
   ComputerWon();
  }else if (userchoice === "paper" && compchoice === "rock") {
    userWon();
  } else if (userchoice === "paper" && compchoice === "scissor") {
    ComputerWon();
  }  else if (userchoice === "scissor" && compchoice === "paper") {
   userWon();
  }  else if (userchoice === "rock" && compchoice === "scissor") {
    userWon();
  }  else if (userchoice === "scissor" && compchoice === "rock") {
   ComputerWon();  }  
}
const showWinner = () => {

}

const genCompChoice = () => {
  const options = [ "rock" , "paper", "scissor"];
const randomIdx = Math.floor( Math.random()*3);
  return options[randomIdx];
}



choices.forEach((choice) => {
  
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
     playGame(userchoice);
  });
});

const resetGame = document.querySelector("#reset-game");

resetGame.addEventListener("click", () => {
    compScore = 0;
    userScore = 0;
    compscore.innerText = 0;
    userscore.innerText = 0;
});
