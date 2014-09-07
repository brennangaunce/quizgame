var questions = [
    "What's the capital of Kentucky?",
    "What's the capital of California?",
    "What's the capital of Arizona?",
    "What's the capital of Kansas?"
];

var answers = [
    "Frankfort",
    "Sacramento",
    "Phoenix",
    "Topeka"
];

var currentQuestion = 0;

function setup() {
    var question = document.getElementById("question");
    var answer = document.getElementById("answer");
    var checkAnswerButton = document.getElementById("checkAnswerButton");
    var nextQuestionButton = document.getElementById("nextQuestionButton");

    showQuestion();
}

function showQuestion() {
    question.innerHTML = questions[currentQuestion];
    nextQuestionButton.style.display = "none";
}

function showAnswer() {
    answer.innerHTML = answers[currentQuestion];

    nextQuestionButton.style.display = "inline";
}

function showNextQuestion() {
    var nextQuestion = currentQuestion+1;
    if (nextQuestion >= questions.length) {
        alert("That's all the questions!");
        return;
    }

    currentQuestion = nextQuestion;

    showQuestion();
    answer.innerHTML = "&nbsp;";
}
