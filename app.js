const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<label>Podaj imię</label><br><input></input><br><button>Start gry</button>');


})

app.get('/start', (req, res) => {
    res.send('<button>cos</button>')

})

app.listen(port, () => console.log(`słucham na porcie: ${port}`))