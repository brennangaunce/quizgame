var questions = [
];
var answers = [
];

//  "Who's the first president of the United States?"
//  "George Washington"

var currentQuestion = 0;
var score = 0;

function setup() {
    var question = document.getElementById("question");
    var answer = document.getElementById("answer");
    var checkAnswerButton = document.getElementById("checkAnswerButton");
    var correctButton = document.getElementById("correctButton");
    var incorrectButton = document.getElementById("incorrectButton");
    var newGameButton = document.getElementById("newGameButton");

    for (var i=0; i<states.length; i++) {
        questions.push("What's the capital of "+states[i][0]+"?");
        answers.push(states[i][1]);
    }

    showQuestion();
}

function showQuestion() {
    question.innerHTML = questions[currentQuestion];
    answer.innerHTML = "&nbsp;";

    hideAnswerButtons();
}

function showAnswer() {
    answer.innerHTML = answers[currentQuestion];

    showAnswerButtons();
}

function hideAnswerButtons() {
    checkAnswerButton.style.display = "inline";
    correctButton.style.display = "none";
    incorrectButton.style.display = "none";
}

function showAnswerButtons() {
    checkAnswerButton.style.display = "none";
    correctButton.style.display = "inline";
    incorrectButton.style.display = "inline";
}

function doCorrect() {
    score = score + 1;
    showNextQuestion();
}

function doIncorrect() {
    showNextQuestion();
}

function showNextQuestion() {
    var nextQuestion = currentQuestion+1;
    if (nextQuestion >= questions.length) {
        alert("That's all the questions!\nYou got "+score+" questions right!");

        checkAnswerButton.style.display = "none";
        correctButton.style.display = "none";
        incorrectButton.style.display = "none";

        score = 0;

        return;
    }

    currentQuestion = nextQuestion;

    showQuestion();
}

function newGame() {
    currentQuestion = 0;
    showQuestion();
}
