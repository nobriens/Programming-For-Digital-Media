let playerName = "Neesan";
let playerAge = 24;
let isOnline = true;

playerAge = 25;
isOnline = false;
playerAge = 26;

let fruits = ["Apple", "Banana", "Cherry", "Mango", "Peach"];

console.log("Second item:", fruits[1]); 
console.log("Third item:", fruits[2]);

let playerScore = 0;

function increaseScore() {
  playerScore++;
}

function showScore() {
  console.log("Player Score =", playerScore);
}

function checkOddEven() {
  if (playerScore % 2 === 0) {
    console.log("The score is EVEN Yess");
  } else {
    console.log("The score is ODD NOOO");
  }
}

increaseScore();
increaseScore();
showScore();
checkOddEven();

increaseScore();
showScore();
checkOddEven();