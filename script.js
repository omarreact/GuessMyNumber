"use strict";

let secretNumber = Math.round(Math.random() * 20) + 1;
let score = 20;
const message = document.querySelector(".message");
const scoreText = document.querySelector(".score");
const body = document.querySelector("body");
const again = document.querySelector(".again");
const number = document.querySelector(".number");
let highscore = 0;

// number.textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "😢No Number!!!";
  } else if (guess === secretNumber) {
    message.textContent = "🎉🎉🎉Congratulations!!!🎉🎉🎉";
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber ? "Number is to HIGH!!!" : "Number is to LOW!!!";
      score--;
      scoreText.textContent = score;
    } else {
      message.textContent = "You lost the geme!!!";
      scoreText.textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     message.textContent = "Number is to HIGH!!!";
  //     score--;
  //     scoreText.textContent = score;
  //   } else {
  //     message.textContent = "You lost the geme!!!";
  //     scoreText.textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     message.textContent = "Number is to LOW!!!";
  //     score--;
  //     scoreText.textContent = score;
  //   } else {
  //     message.textContent = "You lost the geme!!!";
  //     scoreText.textContent = 0;
  //   }
  // }
});

again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.round(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";

  scoreText.textContent = score;
  number.textContent = "?";
  Number((document.querySelector(".guess").value = 0));

  body.style.backgroundColor = "#222";
});
