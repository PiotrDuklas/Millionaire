

fillQuestionParts = (data) => {
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

sendAnswer = (indexAnswer) => {
    fetch(`/answer/${indexAnswer}`, {
        method: 'POST'
    }).then(r => r.json())
        .then(data => { console.log(data) })


}

const answerButtons = document.querySelectorAll(".answer");
for (const answerButton of answerButtons) {
    answerButton.addEventListener("click", (e) => {
        const indexAnswer = e.target.dataset.answer; console.log(indexAnswer);
        sendAnswer(indexAnswer)
    })
}

showQuestion()
