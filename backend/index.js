const express = require('express')
const app = express();
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//  create a todo app that lets user store todos on the server
app.get('/', function(req, res){
  res.send('<b>Hello World!<b>') // webpage/browser return html content
})

app.get('/mayabk', function(req, res){
    res.json({  name: 'Madsya', age: 25, location: 'Nairobi' })
})

app.post('/mk', function(req, res){
    console.log(req.body);
    res.send({
        msg : "2 + 2 = 4"
    })

})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});