// const express = require('express')
// const app = express();
// const port = process.env.PORT || 3000
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// //  create a todo app that lets user store todos on the server
// app.get('/', function(req, res){
//   res.send('<b>Hello World!<b>') // webpage/browser return html content , res.send(ans.toString()
// })

// app.get('/mayabk', function(req, res){
//     res.json({  name: 'Madsya', age: 25, location: 'Nairobi' })
// })

// app.post('/mk', function(req, res){
//     // console.log(req.body);
//     const message = req.body.message;
//     const message2 = req.query.message; // its like after url ?message=hello
//     console.log(message);
//     res.send({
//         msg : "2 + 2 = 4"
//     })

// })


// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// const express = require('express');
// const app = express();

// const port = process.env.PORT || 3000;


// function sum(n){
//     let ans = 0 ;
//     for(let i = 0; i < n; i++){
//         ans += i;
//     }
//     return ans ;
// }

// app.get('/', (req, res) => {
//     const n = req.query.n;
//     const ans = sum(n);

//     res.send("and is " + ans.toString());


// })




// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })

const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const users = [{
    name: 'Madsya',
    Kidneys: [{
        healthy: false
    }]
}];

app.get('/', (req, res) => {
    const userKidneys = users[0].Kidneys; // Renamed to be more generic
    // console.log(userKidneys);
    const numberOfKidneys = userKidneys.length;
    let numberOfHealthyKidneys = 0;

    for (let i = 0; i < numberOfKidneys; i++) {
        if (userKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        // userKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

app.post('/', (req, res) => {
    // body data 
    const isHealthy = req.body.isHealthy;
    users[0].Kidneys.push({
        healthy: isHealthy
    });

    res.json({
        message: 'Kidney added successfully',
        kidneys: users[0].Kidneys
    });
});


app.put('/', (req, res) => {
    for(let i =0 ; i< users[0].Kidneys.length; i++){
        users[0].Kidneys[i].healthy = false;
    }

    res.json({});


});

app.delete('/', (req, res) => {

    // 411 -- if no unhealthy kidneys
    // only if one bad or unhealthy kidney than to this 

    if(atleastOneUnhealthyKidney()){
        const newKidneys = [] ; 
        for(let i =0 ; i< users[0].Kidneys.length; i++){
            if(users[0].Kidneys[i].healthy){
            newKidneys.push(users[0].Kidneys[i]);
            }
        }

        users[0].Kidneys = newKidneys;

         res.json({
        msg : "done"
        });

    }
    else{
        // res.sendStatus(411);
        res.status(411).json({
            msg : "You need atleast one unhealthy kidney"
        });
    }
    
    
    


});

// edge case for delete function 
function atleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;

    for(let i =0 ; i< users[0].Kidneys.length; i++){
        if(!users[0].Kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        
        }
    }
    return atleastOneUnhealthyKidney;

}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
