var questions = [];
var answers = [];

var currentQuestion = 0;
var score = 0;

function setup() {
    var $ = function (id) {
        return document.getElementById(id);
    }

    question = $("question");
    answer = $("answer");
    checkAnswerButton = $("checkAnswerButton");
    correctButton = $("correctButton");
    incorrectButton = $("incorrectButton");
    newGameButton = $("newGameButton");
    scoreText = $("score");

    var randomQuestions = [];
    var randomAnswers = [];
    while (questions.length > 0) {
        var pick = Math.floor(Math.random() * questions.length);
        randomQuestions.push(questions[pick]);
        randomAnswers.push(answers[pick]);
        questions.splice(pick,1);
        answers.splice(pick,1);
    }

    questions = randomQuestions;
    answers = randomAnswers;

    scoreText.innerHTML = "-";

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

function showScore() {
    if (score == currentQuestion) {
        scoreText.innerHTML = "All correct: "+score;
    }
    else {
        var percentage = Math.round(score/currentQuestion*100);
        scoreText.innerHTML = score + " correct out of " + currentQuestion + " = " + percentage + "%";
    }
}

function showNextQuestion() {
    currentQuestion = currentQuestion+1;

    showScore();

    if (currentQuestion >= questions.length) {
        alert("That's all the questions!\nYou got "+score+" questions right!");

        checkAnswerButton.style.display = "none";
        correctButton.style.display = "none";
        incorrectButton.style.display = "none";

        score = 0;

        return;
    }

    showQuestion();
}

function newGame() {
    currentQuestion = 0;
    score = 0;

    scoreText.innerHTML = "-";
    showQuestion();
}
