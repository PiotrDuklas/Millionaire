gameRoutes = (app) => {

    let correctAnswers = 0;
    let gameIsOver = false;
    let helpFromFriendUsed = false;
    let helpFromCrowdUsed = false;
    let helpFiftyFiftyUsed = false;
    const questions = [
        { question: "Co jest stolicą Francji?", answers: ["Londyn", "Bruksela", "Paryż", "Moskwa"], correct: 2 },
        { question: "Który kontynent jest największy?", answers: ["Azja", "Europa", "Afryka", "Ameryka Północna"], correct: 0 },
        { question: "Ile województw jest w Polsce?", answers: ["49", "16", "10", "13"], correct: 1 },
        { question: "Z jakiego kraju pochodzi papież Franciszek II?", answers: ["Z Boliwii", "Z Peru", "Z Argentyny", "Z Włoch"], correct: 2 }, { question: "Co oznacza skrót polskiej partii PiS?", answers: ["Prezes i Spółka", "Prawo i Sprawiedliwość", "Prawda i Szacunek", "Polska i Słowacja"], correct: 1 }
    ]



    app.get('/question', (req, res) => {
        if (correctAnswers === questions.length) {
            res.json({
                winner: true
            })
        }
        else if (gameIsOver) {
            res.json({
                loser: true
            })
        }
        else {
            const nextQuestion = questions[correctAnswers];
            const { question, answers } = nextQuestion;
            res.json({
                question, answers

            })
        }
    })

    app.post('/answer/:index', (req, res) => {
        if (gameIsOver) {
            res.json({ loser: true })
        }
        const { index } = req.params;
        const currentQuestion = questions[correctAnswers];
        const answerIsGood = currentQuestion.correct === Number(index);
        if (answerIsGood) { correctAnswers++ }
        else { gameIsOver = true }
        res.json({ correct: answerIsGood, correctAnswers })

    })
}

module.exports = gameRoutes;