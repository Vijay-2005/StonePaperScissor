let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore =  document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");


const ComputerWon = () => {
  console.log("You loose!");
  msg.innerText ="You loose!" ;
  compScore += 1 ;
  compscore.innerText = compScore;
}

const userWon = () => {
  console.log(" You won!");
 msg.innerText =" You won!" ;
  userScore += 1;
  userscore.innerText = userScore;
}

const drawGame = () => {
  console.log(" Game was draw");
msg.innerText =" Game was draw! play again" ;
}
  


const playGame = (userchoice) => {
  console.log("userchoice = " ,userchoice );

  const compchoice = genCompChoice();
  console.log("compchoice = " ,compchoice );




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
  console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
     playGame(userchoice);
  });
});
