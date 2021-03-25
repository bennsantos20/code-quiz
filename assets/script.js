var startButton = document.getElementById('start-button');
var startPage = document.getElementById('start-page');
var questionScreen = document.getElementById('question-screen');

startButton.addEventListener("click", startGame)
function startGame() {
    startPage.classList.add('hidden')
    questionScreen.classList.remove('hidden')
}