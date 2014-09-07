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

    showQuestion();
}

function showQuestion() {
    question.innerHTML = questions[currentQuestion];
}

function showAnswer() {
    answer.innerHTML = answers[currentQuestion];
}

function showNextQuestion() {
    nextQuestion = currentQuestion+1;
    currentQuestion = nextQuestion;

    showQuestion();
    answer.innerHTML = "&nbsp;";
}
