// calculate Math question

let numA = Math.trunc(Math.random() * 50);
let numB = Math.trunc(Math.random() * 50);
let scores = document.querySelector(".score");
const theQuestion = document.querySelector(".theQuestion");

const form = document.querySelector(".form");

// calculate Math answer
let theAnswer = numA * numB;

// get item from local storage
let score = localStorage.getItem("score");
// set scores text content same as score
scores.textContent = score;

// set the question text content
theQuestion.textContent = `What is ${numA} multiply by ${numB}?`;

// when clicking it validates the answer
form.addEventListener("submit", function () {
  const input = document.querySelector(".input");
  if (+input.value === theAnswer) {
    score++;
    addScore();
  } else {
    score--;
    addScore();
  }
});

// put score into local storage
function addScore() {
  localStorage.setItem("score", JSON.stringify(score));
}
