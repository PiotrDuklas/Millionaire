const express = require('express');
const path = require('path');
const app = express();
const gameRoutes = require('./routes/game')
const port = 3000;


app.listen(port, () => console.log(`słucham na porcie: ${port}`))

app.use(express.static(path.join(__dirname, 'public')))

gameRoutes(app);