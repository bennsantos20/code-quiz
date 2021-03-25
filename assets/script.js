var startButton = document.getElementById("start-button");
var startPage = document.getElementById("start-page");
var questionScreen = document.getElementById("question-screen");
var answerButtons = document.querySelectorAll(".choice");
var answerOne = document.getElementById("firstButton");
var answerTwo = document.getElementById("secondButton");
var answerThree = document.getElementById("thirdButton");
var answerFour = document.getElementById("fourthButton");
var timerBox = document.getElementById("timer");

var questions = [
  {
    question: "Commonly used date types DO NOT include:",
    answers: ["alerts", "strings", "booleans", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within:",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store:",
    answers: ["numbers and strings", "others arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
  },
  {
    question: "String values must be enclosed within ______ when being assigned to variables:",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    answers: ["javascript", "console.log", "terminal / bash", "for loops"],
    correctAnswer: "console.log"
},
];

startButton.addEventListener("click", startGame);
function startGame() {
  startPage.classList.add("hidden");
  questionScreen.classList.remove("hidden");
}
