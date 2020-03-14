// create variables for time, questions, etc.
// create appendchild sections for questions
// for each question create if/else statments where if statement is for true answer else statements for wrong
// add time penalty if wrong answer is selected.

var timerEl = document.getElementById("seconds-timer");
var timeCounter = 180;
var scoreCounterEl = 0;
var startButton = document.getElementById("startButton");
var currentIndex = 0;
var quizQuestion = document.getElementById("quiz-question");
var quizAnswers = document.getElementById("quiz-answers");
var finalScore = document.getElementById('finalScore');
var quizBody = document.getElementById('quiz-body');
var currentQuestion = questionArray[currentIndex];

var maxTime = 31
var timeElapsed = 0
var interval_id

// startButton triggers the startQuiz function
startButton.onclick = startQuiz;

// startQuiz function identifies the variable startScreenEl by grabbing the html div startScreen
// replaces startScreen attribute and made it hidden
// quizQuestion attribute is then set to default
// finally runs getQuestions function
function startQuiz() {
    var startScreenEl = document.getElementById("startScreen");
    startScreenEl.setAttribute("hidden", true);
    quizQuestion.removeAttribute("class");

    getQuestions();
    interval_id = startTimer()
    if(currentQuestion.options.length >= 5){
        getCurrentScore;
    }

};

function getQuestions() {
    var currentQuestion = questionArray[currentIndex];
    var questionTitle = document.getElementById("question-title");
    questionTitle.textContent = currentQuestion.title;
    console.log(questionTitle.textContent);
    console.log(currentQuestion.title)
    questionTitle.setAttribute("question", currentIndex);

    quizAnswers.innerHTML = ""


    // currentQuestion.options for loop with createElement button to 
    for (var i = 0; i < currentQuestion.options.length; i++) {
        var currentAnswers = document.createElement('button');
        // currentAnswers.setAttribute('text');
        currentAnswers.textContent = currentQuestion.options[i];
        console.log(currentQuestion.options[i])
        quizAnswers.appendChild(currentAnswers);
    };
};
quizAnswers.addEventListener("click", function (e) {
    if (e.target.textContent === questionArray[currentIndex].answer) {
        alert("CORRECT");
        scoreCounterEl++;
        document.getElementById('scoreCounter').textContent = "Score = " + scoreCounterEl;
        // currentIndex++;
    } else {
        alert("Nope!");
        // currentIndex++;
        // getQuestions();
        console.log(e.target.textContent === questionArray[currentIndex].answer);
    }
    currentIndex++;
    getQuestions();

    // stop timer 
    clearInterval(interval_id)
    interval_id = startTimer()
    timeElapsed = 0


});

function startTimer() {
    return setInterval(function () {
        timeElapsed++
        if (timeElapsed > maxTime) {

            alert("ran out of time!")

            // next question 
            currentIndex++;
            getQuestions()
            timeElapsed = 0

        }
        document.getElementById('seconds-timer').innerHTML = maxTime - timeElapsed
    }, 1000)
}

function getCurrentScore (){
    quizBody.setAttribute("hidden", true);
    finalScore.removeAttribute('class');
    var finalScore = document.getElementById('scoreCounter');
    var scoreDisplay = document.getElementById('score');
    scoreDisplay.textcontent = "Your score is " + finalScore;
}
// function timerFunction(){
//     timeCounter = timeCounter -1;
//     if(timeCounter < 180){
//     ti;merEl.innerHTML = timeCounter;
//     }
//     if (timeCounter < 1){
//         window.clearInterval(update)
//     };
// };
// update = setInterval(timerFunction(), 1000);
//     getQuestions();

// quizAnswers.onclick = selectAnswer
// function selectAnswer(){
//     if (currentQuestion.options[i] = currentQuestion.answer)
//     alert("You're right!");
//     else{
//         alert("Nope!");
//     }};

// document.querySelectorAll("#quiz-answers button")
setTimeout(add, 10000);

function add() {



}