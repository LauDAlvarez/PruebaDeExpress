const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, console.log('Corriendo...'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})