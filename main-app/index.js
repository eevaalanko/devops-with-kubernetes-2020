const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const getHashNow = () => {
    const date = new Date();
    console.log(`hash: ${Math.random().toString(36).substr(2, 6)} date: ${date.toString()}`);
}


setInterval( () => {
    getHashNow();
}, 5000);


app.get('/', (req, res) => {
    res.send(getHashNow);
});

app.listen(port, () => {
    getHashNow();
});





