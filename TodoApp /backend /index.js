// write basic express boilerplate code 
// with express.json() middleware 

const express = require('express');
const app = express();

app.use(express.json());

app.post('/todo', function(req, res){


});

app.get('/todo', (req, res) => {


});

app.put('/todo/:id', (req, res) => {
    
});