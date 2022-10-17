const btn = document.querySelector(".btn");
const answer = document.querySelector(".guess");
const showScore = document.querySelector(".score");
const showAttempts = document.querySelector(".attempts");
const showButtons = document.querySelector(".btns");
const restartButton = document.querySelector(".restart");
const showResult = document.querySelector(".show-result");
const msg = document.querySelector(".msg");
const game = document.querySelector(".game");
const yourGuess = document.querySelector(".yourguess");
const correctNumber = document.querySelector(".correctnumber");

showResult.style.display = "none";
let score = 0;
let attempts = 10;

btn.onclick = () => {
  let num = Math.trunc(Math.random() * 10) + 1;
  console.log(num);
  score = answer.value == num ? score + 1 : score;
  attempts = answer.value == num ? attempts : attempts - 1;
  num = num;
  // console.log(answer.value);
  // console.log(score);

  // if (attempts == 0) {
  //   showResult.style.display = "block";
  //   game.style.display = "none";
  // }
  if (attempts == 0) {
    setTimeout(() => {
      showResult.style.display = "block";
      game.style.display = "none";
      msg.innerHTML = `You scored ${score} in 10 attempts`;
    }, 1000);
  }

  if (answer.value == num) {
    yourGuess.style.backgroundColor = "green";
    yourGuess.style.color = "white";
    correctNumber.style.backgroundColor = "green";
    correctNumber.style.color = "white";
  } else {
    yourGuess.style.backgroundColor = "red";
    yourGuess.style.color = "white";
    correctNumber.style.backgroundColor = "green";
    correctNumber.style.color = "white";
  }

  yourGuess.innerHTML = answer.value;
  correctNumber.innerHTML = num;

  showScore.innerHTML = `Score: ${score}`;
  answer.value = "";

  showAttempts.innerHTML = `Attempts left: ${attempts}`;
};

restartButton.addEventListener("click", () => {
  game.style.display = "block";
  showResult.style.display = "none";
  attempts = 10;
  num = "";
  score = 0;
  showAttempts.innerHTML = `Attempts left: ${attempts}`;
  yourGuess.innerHTML = "";
  correctNumber.innerHTML = "";
  showScore.innerHTML = `Score: ${score}`;
});
