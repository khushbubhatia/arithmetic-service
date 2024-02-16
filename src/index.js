const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req,res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
        const box1 = parseInt(req.params.n);
        const box2 = parseInt(req.params.m);
        const sum = box1+box2;
        res.json(sum);
});

app.listen(port);
