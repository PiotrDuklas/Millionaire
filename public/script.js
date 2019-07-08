
const game = document.querySelector('#game');
const h3 = document.querySelector('h3');

fillQuestionParts = (data) => {
    if (data.winner === true) {
        game.style.display = 'none';
        h3.innerText = 'BRAWO !!!';

    }
    question.innerText = data.question;
    for (const i in data.answers) {
        const answerPart = document.querySelector(`#answer${parseInt(i) + 1}`);
        answerPart.innerText = data.answers[i]
    }
}

showQuestion = () => {
    fetch('/question', {
        method: 'GET'
    }).then(r => r.json())
        .then(data => { fillQuestionParts(data) })

}

const correctAnswerSpan = document.querySelector("#correct");

correctAnswersCounter = (data) => {
    correctAnswerSpan.innerText = data.correctAnswers;
    showQuestion()
}

sendAnswer = (indexAnswer) => {
    fetch(`/answer/${indexAnswer}`, {
        method: 'POST'
    }).then(r => r.json())
        .then(data => { correctAnswersCounter(data) })



}

const answerButtons = document.querySelectorAll(".answer");
for (const answerButton of answerButtons) {
    answerButton.addEventListener("click", (e) => {
        const indexAnswer = e.target.dataset.answer;;
        sendAnswer(indexAnswer)
    })
}

showQuestion()
