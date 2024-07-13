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

// const express = require('express'); 
// const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// const users = [{
//     name: 'Madsya',
//     Kidneys: [{
//         healthy: false
//     }]
// }];

// app.get('/', (req, res) => {
//     const userKidneys = users[0].Kidneys; // Renamed to be more generic
//     // console.log(userKidneys);
//     const numberOfKidneys = userKidneys.length;
//     let numberOfHealthyKidneys = 0;

//     for (let i = 0; i < numberOfKidneys; i++) {
//         if (userKidneys[i].healthy) {
//             numberOfHealthyKidneys++;
//         }
//     }

//     const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

//     res.json({
//         // userKidneys,
//         numberOfHealthyKidneys,
//         numberOfUnhealthyKidneys
//     });
// });

// app.post('/', (req, res) => {
//     // body data 
//     const isHealthy = req.body.isHealthy;
//     users[0].Kidneys.push({
//         healthy: isHealthy
//     });

//     res.json({
//         message: 'Kidney added successfully',
//         kidneys: users[0].Kidneys
//     });
// });


// app.put('/', (req, res) => {
//     for(let i =0 ; i< users[0].Kidneys.length; i++){
//         users[0].Kidneys[i].healthy = false;
//     }

//     res.json({});


// });

// app.delete('/', (req, res) => {

//     // 411 -- if no unhealthy kidneys
//     // only if one bad or unhealthy kidney than to this 

//     if(atleastOneUnhealthyKidney()){
//         const newKidneys = [] ; 
//         for(let i =0 ; i< users[0].Kidneys.length; i++){
//             if(users[0].Kidneys[i].healthy){
//             newKidneys.push(users[0].Kidneys[i]);
//             }
//         }

//         users[0].Kidneys = newKidneys;

//          res.json({
//         msg : "done"
//         });

//     }
//     else{
//         // res.sendStatus(411);
//         res.status(411).json({
//             msg : "You need atleast one unhealthy kidney"
//         });
//     }
    
    
    


// });

// // edge case for delete function 
// function atleastOneUnhealthyKidney() {
//     let atleastOneUnhealthyKidney = false;

//     for(let i =0 ; i< users[0].Kidneys.length; i++){
//         if(!users[0].Kidneys[i].healthy){
//             atleastOneUnhealthyKidney = true;
        
//         }
//     }
//     return atleastOneUnhealthyKidney;

// }

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// map , filter , arrow 
// .startsWith


// function sum(a){
//     let ans = 0;
//     for(let i = 0; i <= a; i++){
//         ans += i;
//     }
//     return ans;
// }

// const sum = (a) => {
//     let ans = 0;
//     for(let i = 0; i <= a; i++){
//         ans += i;
//     }
//     return ans;
// }


// Array = [1,2,3,4,5]

// const an = function (a){
//     return a * 2;
// }

// const ans = Array.map(an);

// // const ans = Array.map((element) => {
// //     return element * 2;
// // })

// console.log(ans);

// const filter = Array.filter((element) => {
//     return element % 2 === 0;
// })
// console.log(filter);


// const express = require('express');


// const app = express();

// app.get('/', (req, res) => {   

//     const username = req.headers.username;  
//     const password = req.headers.password;
//     const kidneyId = (req.query.kidneyId) ;
//     console.log(username, password, kidneyId);
//     // exist first appraoch is always best 

//     if(username !== 'admin' ||  password !== 'admin'){

//         res.status(400).json({
//             "message" : "Invalid credentials"})
//         return 
         
//     }

//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(400).json({
//             "message" : "something went wrong"})
//         return
        
//     } 

//     res.json({
//         "message" : "success"
//     });
   
// });

// we have used return so the cursor will not go to the next line while alternatively we can use else if or else


// app.listen(3000);

// this is the ugly solution as you have to create these prechecks for every post ,get , delete , put request

// the best solution is the middle ware  

// crud function can take a lot of callback function in them 

// next() ka intro 


// to catch any body that postman sends you or anyone ,  you have to use app.use(express.json()) , 
// this is a middleware that will catch any body that is sent to the server

// when you know that the middleware will you call in every route then you can use app.use(middleware), after this

// input validation 
// //  middleware have 3 arguments req res and next
// const express = require('express');
// const zod = require('zod');
// const app = express();

// const schema = zod.array(zod.number());

// {email -- string => email
// password -- string altleast `8 characters
// country- US IN }

// const schema = zod.object({
//     email : zod.string().email(),
//     passworrd : zod.string().min(8),
//     country : zod.literal('US').or(zod.literal('IN')),
//     kidneys : zod.array(zod.number)
// });
 


// app.use(express.json());


// app.post('/', (req, res) => {

//     const kidneys = req.body; 
//     // console.log(kidneys);
//     const response = schema.safeParse(kidneys);

//     if(!response.success){
//         res.status(411).json({
//             msg : "Invalid input"
//         });
//         return;
//     }

    // const kidneyLength = kidneys.length;
    // console.log(kidneyLength);

    // res.send("you have " + kidneyLength + " kidneys");
    // res.send(response)
// })

// global catches 
// app.use( function(err, req, res, next){
//     // res.json({
//     //     msg : "sorry something is up with our server"
//     // })
//     res.status(500).send('something went wrong');

// })


// app.listen(3000);


// how can we do better input validation ?? 
// input validation libraries
// zod library - -schmea validation 


const zod = require('zod');
const express = require('express');
const app = express();

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8), // Corrected typo
    country: zod.literal('US').or(zod.literal('IN')),
    kidneys: zod.array(zod.number())
});

app.use(express.json());

app.post('/', (req, res) => {
    const response = schema.safeParse(req.body); // Validate the entire request body

    if (!response.success) {
        res.status(411).json({
            msg: "Invalid input"
        });
        return;
    }

    const kidneys = req.body.kidneys; // Access the kidneys array from the validated request body
    const kidneyLength = kidneys.length;

    res.send("you have " + kidneyLength + " kidneys");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
