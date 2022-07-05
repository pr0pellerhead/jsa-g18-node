// import package express
const express = require('express');
const handlers = require('./handlers');
// create new express app
const app = express();
// activate the JSON (req.body) middleware/plugin
app.use(express.json());

// add new route/endpoint to the app
app.get('/home', handlers.home); // http method GET

// /calc/plus
// /calc/minus
// /calc/delenje
// /calc/mnozenje
// /calc/cbeoicbbcljhsdbcjhd
// 
app.get('/calc/:operation', handlers.calculator); // http method GET
app.post('/calc/:operation', handlers.calculator2); // http method POST

// start the application
app.listen(8080, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('Server successfully started');
});


/*

REST methods

GET
POST
PUT
PATCH
DELETE

*/


// ДОМАШНА!!!

// рута POST /studenti
// на неа да можете да пратите JSON
/*
{
    "ime": "Pero",
    "prezime": "Perovski",
    "prosek": 9.2
}
*/
// откако handler функцијата ќе ги прими податоците, треба да ги запише во текстуелен фајл