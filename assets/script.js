var startButton = document.getElementById("start-button");
var startPage = document.getElementById("start-page");
var questionScreen = document.getElementById("question-screen");
var answerButtons = document.querySelectorAll(".choice");
var answerOne = document.getElementById("firstButton");
var answerTwo = document.getElementById("secondButton");
var answerThree = document.getElementById("thirdButton");
var answerFour = document.getElementById("fourthButton");
var timerBox = document.getElementById("timer");
var title = document.getElementById("title");
var answerChoices = document.getElementById("choices");

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

title.textContent = questions[0].question;
answerOne.textContent = questions[0].answers[0];
answerTwo.textContent = questions[0].answers[1];
answerThree.textContent = questions[0].answers[2];
answerFour.textContent = questions[0].answers[3];

title.textContent = questions[1].question;
answerOne.textContent = questions[1].answers[0];
answerTwo.textContent = questions[1].answers[1];
answerThree.textContent = questions[1].answers[2];
answerFour.textContent = questions[1].answers[3];

title.textContent = questions[2].question;
answerOne.textContent = questions[2].answers[0];
answerTwo.textContent = questions[2].answers[1];
answerThree.textContent = questions[2].answers[2];
answerFour.textContent = questions[2].answers[3];

title.textContent = questions[3].question;
answerOne.textContent = questions[3].answers[0];
answerTwo.textContent = questions[3].answers[1];
answerThree.textContent = questions[3].answers[2];
answerFour.textContent = questions[3].answers[3];

title.textContent = questions[4].question;
answerOne.textContent = questions[4].answers[0];
answerTwo.textContent = questions[4].answers[1];
answerThree.textContent = questions[4].answers[2];
answerFour.textContent = questions[4].answers[3];




answerChoices.addEventListener("click", function(event) {
        var optionTarget = event.target;
        var userChoice = event.target.textContent;

        if (optionTarget.target.matches("button")) {
            if (userChoice === questions[0].correctAnswer)
            alert("Correct");
            else if (userChoice !== questions[0].correctAnswer) {
                alert("Wrong");
            }
        })

            
            
startButton.addEventListener("click", startGame)

function startGame(){
    startPage.classList.add('display-none')
    questionScreen.classList.add('display-none')
}

