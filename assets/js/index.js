// create variables for time, questions, etc.
// create appendchild sections for questions
// for each question create if/else statments where if statement is for true answer else statements for wrong
// add time penalty if wrong answer is selected.

var timerEl = document.getElementById("seconds-timer");
var timeCounter = 180;
var scoreCounter = 0;
var startButton = document.getElementById("startButton");
var currentIndex = 0;
var quizQuestion = document.getElementById("quiz-question");
var quizAnswers = document.getElementById("quiz-answers");

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

};

function getQuestions() {
    var currentQuestion = questionArray[currentIndex];
    var questionTitle = document.getElementById("question-title");
    questionTitle.textContent = currentQuestion.title;
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
        // currentIndex++;
    }
    else {
        alert("Nope!");
        // currentIndex++;
        // getQuestions();
        console.log(e.target.textContent === questionArray[currentIndex].answer);
    }
    currentIndex++;
    getQuestions();

});

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
setTimeout(add,10000);

function add(){



}