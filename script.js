function setup() {
    showQuestion();
}

function showQuestion() {
    var question = document.getElementById("question");
    question.innerHTML = "What's the capital of Kentucky?";
}

function showAnswer() {
    var answer = document.getElementById("answer");
    answer.innerHTML = "Frankfort";
}
