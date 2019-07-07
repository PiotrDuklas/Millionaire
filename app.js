const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.listen(port, () => console.log(`słucham na porcie: ${port}`))

app.use(express.static(path.join(__dirname, 'public')))

let correctAnswers = 0;
let helpFromFriendUsed = false;
let helpFromCrowdUsed = false;
let helpFiftyFiftyUsed = false;
const questions = [
    { question: "Co jest stolicą Francji?", answers: ["Londyn", "Bruksela", "Paryż", "Moskwa"], correct: 2 },
    { question: "Który kontynent jest największy?", answers: ["Azja", "Europa", "Afryka", "Ameryka Północna"], correct: 0 },
    { question: "Ile województw jest w Polsce?", answers: ["49", "16", "10", "13"], correct: 1 }
]

app.get('/', (req, res) => {
    res.send('<label>Podaj imię</label><br><input></input><br><button>Start gry</button>');


})

app.get('/start', (req, res) => {
    res.send('<button>cos</button>')

})

app.get('/question', (req, res) => {
    if (correctAnswers === questions.length) {
        res.json({
            winner: true
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