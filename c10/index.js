const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index'); // views/index.ejs
});

app.get('/podatoci/:ime', (req, res) => {
    let data = {
        ime: req.params.ime,
        studenti: [
            {first_name: 'Goran', last_name: 'Goranovski'},
            {first_name: 'Janko', last_name: 'Jankovski'},
            {first_name: 'Stanko', last_name: 'Stankovski'},
            {first_name: 'Ivan', last_name: 'Ivanovski'},
            {first_name: 'Pero', last_name: 'Perovski'},
            {first_name: 'Igor', last_name: 'Igorovski'},
        ]
    };
    res.render('podatoci', data); // views/index.ejs
});

app.get('/formular', (req, res) => {
    res.render('formular');
});

app.post('/formular-rezultat', (req, res) => {
    let data = {
        ime: req.body.ime,
        prezime: req.body.prezime,
    };
    res.render('formular_rezultat', data);
});


app.get('/calculator', (req, res) => {

});

app.post('/calculator-result', (req, res) => {

});


app.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server started on port 10000');
});