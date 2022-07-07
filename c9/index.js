const express = require('express');
const handlers = require('./handlers');

const app = express();

app.use(express.json());

app.post('/studenti', handlers.addStudent);
app.get('/studenti', handlers.getAllStudents);
app.get('/studenti/:id', handlers.getOneStudent);
app.put('/studenti/:id', handlers.updateStudent);
app.delete('/studenti/:id', handlers.deleteStudent);

app.listen(8080, err => {
    if (err) return console.log(err);
    console.log('Server successfully started on port 8080');
});