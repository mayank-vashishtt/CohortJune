// // const express = require('express')
// // const app = express();
// // const port = process.env.PORT || 3000
// // const bodyParser = require('body-parser');

// // app.use(bodyParser.json());

// // //  create a todo app that lets user store todos on the server
// // app.get('/', function(req, res){
// //   res.send('<b>Hello World!<b>') // webpage/browser return html content , res.send(ans.toString()
// // })

// // app.get('/mayabk', function(req, res){
// //     res.json({  name: 'Madsya', age: 25, location: 'Nairobi' })
// // })

// // app.post('/mk', function(req, res){
// //     // console.log(req.body);
// //     const message = req.body.message;
// //     const message2 = req.query.message; // its like after url ?message=hello
// //     console.log(message);
// //     res.send({
// //         msg : "2 + 2 = 4"
// //     })

// // })


// // app.listen(port, () => {
// //     console.log(`Server is running on port ${port}`);
// // });

// // const express = require('express');
// // const app = express();

// // const port = process.env.PORT || 3000;


// // function sum(n){
// //     let ans = 0 ;
// //     for(let i = 0; i < n; i++){
// //         ans += i;
// //     }
// //     return ans ;
// // }

// // app.get('/', (req, res) => {
// //     const n = req.query.n;
// //     const ans = sum(n);

// //     res.send("and is " + ans.toString());


// // })




// // app.listen(port, () => {
// //     console.log(`Server is running on port ${port}`);
// // })

// // const express = require('express'); 
// // const app = express();
// // const bodyParser = require('body-parser');

// // app.use(bodyParser.json());
// // const users = [{
// //     name: 'Madsya',
// //     Kidneys: [{
// //         healthy: false
// //     }]
// // }];

// // app.get('/', (req, res) => {
// //     const userKidneys = users[0].Kidneys; // Renamed to be more generic
// //     // console.log(userKidneys);
// //     const numberOfKidneys = userKidneys.length;
// //     let numberOfHealthyKidneys = 0;

// //     for (let i = 0; i < numberOfKidneys; i++) {
// //         if (userKidneys[i].healthy) {
// //             numberOfHealthyKidneys++;
// //         }
// //     }

// //     const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

// //     res.json({
// //         // userKidneys,
// //         numberOfHealthyKidneys,
// //         numberOfUnhealthyKidneys
// //     });
// // });

// // app.post('/', (req, res) => {
// //     // body data 
// //     const isHealthy = req.body.isHealthy;
// //     users[0].Kidneys.push({
// //         healthy: isHealthy
// //     });

// //     res.json({
// //         message: 'Kidney added successfully',
// //         kidneys: users[0].Kidneys
// //     });
// // });


// // app.put('/', (req, res) => {
// //     for(let i =0 ; i< users[0].Kidneys.length; i++){
// //         users[0].Kidneys[i].healthy = false;
// //     }

// //     res.json({});


// // });

// // app.delete('/', (req, res) => {

// //     // 411 -- if no unhealthy kidneys
// //     // only if one bad or unhealthy kidney than to this 

// //     if(atleastOneUnhealthyKidney()){
// //         const newKidneys = [] ; 
// //         for(let i =0 ; i< users[0].Kidneys.length; i++){
// //             if(users[0].Kidneys[i].healthy){
// //             newKidneys.push(users[0].Kidneys[i]);
// //             }
// //         }

// //         users[0].Kidneys = newKidneys;

// //          res.json({
// //         msg : "done"
// //         });

// //     }
// //     else{
// //         // res.sendStatus(411);
// //         res.status(411).json({
// //             msg : "You need atleast one unhealthy kidney"
// //         });
// //     }
    
    
    


// // });

// // // edge case for delete function 
// // function atleastOneUnhealthyKidney() {
// //     let atleastOneUnhealthyKidney = false;

// //     for(let i =0 ; i< users[0].Kidneys.length; i++){
// //         if(!users[0].Kidneys[i].healthy){
// //             atleastOneUnhealthyKidney = true;
        
// //         }
// //     }
// //     return atleastOneUnhealthyKidney;

// // }

// // app.listen(3000, () => {
// //     console.log('Server is running on port 3000');
// // });

// // map , filter , arrow 
// // .startsWith


// // function sum(a){
// //     let ans = 0;
// //     for(let i = 0; i <= a; i++){
// //         ans += i;
// //     }
// //     return ans;
// // }

// // const sum = (a) => {
// //     let ans = 0;
// //     for(let i = 0; i <= a; i++){
// //         ans += i;
// //     }
// //     return ans;
// // }


// // Array = [1,2,3,4,5]

// // const an = function (a){
// //     return a * 2;
// // }

// // const ans = Array.map(an);

// // // const ans = Array.map((element) => {
// // //     return element * 2;
// // // })

// // console.log(ans);

// // const filter = Array.filter((element) => {
// //     return element % 2 === 0;
// // })
// // console.log(filter);


// // const express = require('express');


// // const app = express();

// // app.get('/', (req, res) => {   

// //     const username = req.headers.username;  
// //     const password = req.headers.password;
// //     const kidneyId = (req.query.kidneyId) ;
// //     console.log(username, password, kidneyId);
// //     // exist first appraoch is always best 

// //     if(username !== 'admin' ||  password !== 'admin'){

// //         res.status(400).json({
// //             "message" : "Invalid credentials"})
// //         return 
         
// //     }

// //     if(kidneyId != 1 && kidneyId != 2){
// //         res.status(400).json({
// //             "message" : "something went wrong"})
// //         return
        
// //     } 

// //     res.json({
// //         "message" : "success"
// //     });
   
// // });

// // we have used return so the cursor will not go to the next line while alternatively we can use else if or else


// // app.listen(3000);

// // this is the ugly solution as you have to create these prechecks for every post ,get , delete , put request

// // the best solution is the middle ware  

// // crud function can take a lot of callback function in them 

// // next() ka intro 


// // to catch any body that postman sends you or anyone ,  you have to use app.use(express.json()) , 
// // this is a middleware that will catch any body that is sent to the server

// // when you know that the middleware will you call in every route then you can use app.use(middleware), after this

// // input validation 
// // //  middleware have 3 arguments req res and next
// // const express = require('express');
// // const zod = require('zod');
// // const app = express();

// // const schema = zod.array(zod.number());

// // {email -- string => email
// // password -- string altleast `8 characters
// // country- US IN }

// // const schema = zod.object({
// //     email : zod.string().email(),
// //     passworrd : zod.string().min(8),
// //     country : zod.literal('US').or(zod.literal('IN')),
// //     kidneys : zod.array(zod.number)
// // });
 


// // app.use(express.json());


// // app.post('/', (req, res) => {

// //     const kidneys = req.body; 
// //     // console.log(kidneys);
// //     const response = schema.safeParse(kidneys);

// //     if(!response.success){
// //         res.status(411).json({
// //             msg : "Invalid input"
// //         });
// //         return;
// //     }

//     // const kidneyLength = kidneys.length;
//     // console.log(kidneyLength);

//     // res.send("you have " + kidneyLength + " kidneys");
//     // res.send(response)
// // })

// // global catches 
// // app.use( function(err, req, res, next){
// //     // res.json({
// //     //     msg : "sorry something is up with our server"
// //     // })
// //     res.status(500).send('something went wrong');

// // })


// // app.listen(3000);


// // how can we do better input validation ?? 
// // input validation libraries
// // zod library - -schmea validation 


// // as we know anyone can send request to backend
// // go to postman anad just send it 
// // then how to ensure that this user has access to certain resources 

// // authentication 



// // const express = require("express");
// // const jwt = require("jsonwebtoken");
// // const mongoose = require("mongoose");
// // const jwtPassword = "123456";

// // app.use(express.json());

// // mongoose.connect(
// //   "mongodb+srv://mayankvashishtt:Mayank2005@cluster0.nd2dv1y.mongodb.net/",
// // );

// // const User = mongoose.model("User", {
// //   name: String,
// //   username: String,
// //   pasword: String,
// // });

// // const app = express();
// // app.use(express.json());

// // function userExists(username, password) {
// //   // should check in the database
// // }

// // app.post("/signin", async function (req, res) {
// //   const username = req.body.username;
// //   const password = req.body.password;

// //   if (!userExists(username, password)) {
// //     return res.status(403).json({
// //       msg: "User doesnt exist in our in memory db",
// //     });
// //   }

// //   var token = jwt.sign({ username: username }, "shhhhh");
// //   return res.json({
// //     token,
// //   });
// // });

// // app.get("/users", function (req, res) {
// //   const token = req.headers.authorization;
// //   try {
// //     const decoded = jwt.verify(token, jwtPassword);
// //     const username = decoded.username;
// //     // return a list of users other than this username from the database
// //   } catch (err) {
// //     return res.status(403).json({
// //       msg: "Invalid token",
// //     });
// //   }
// // });

// // app.listen(3000);
// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());

// mongoose
//     .connect("mongodb+srv://mayankvashishtt:Mayank2005@cluster0.nd2dv1y.mongodb.net/")
//     .then(()=>{
//         console.log("db connected successfully!")
//     });

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// });

// const User = mongoose.model('User', userSchema);

// app.post("/signup", async (req, res) => {

//     // const { username, password, name } = req.body;

//     const username = req.body.username;
//     const password = req.body.password;
//     const name = req.body.name;
    
//     try {
//         const existingUser = await User.findOne({ email: username });
//         if (existingUser) {
//             return res.status(400).send("Username already exists");
//         }

//         const user = new User({
//             name: name,
//             email: username,
//             password: password
//         });

//         await user.save();
//         res.json({ msg: "User created successfully" });
//     } 
//     catch (error) {
//         res.status(500).send("Internal Server Error");
//     }
// });




// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });




// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());

// mongoose
//     .connect("mongodb+srv://mayankvashishtt:Mayank2005@cluster0.nd2dv1y.mongodb.net/user_app")
//     .then(() => {
//         console.log("db connected successfully!");
//     })
//     .catch((err) => {
//         console.error("Error connecting to the database", err);
//     });

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// });

// const User = mongoose.model('User', userSchema);

// app.post("/signup", async (req, res) => {
//     const { username, password, name } = req.body;
//     console.log(req.body); // Add this line for debugging

//     try {
//         const existingUser = await User.findOne({ email: username });
//         if (existingUser) {
//             return res.status(400).send("Username already exists");
//         }

//         const user = new User({
//             name: name,
//             email: username,
//             password: password
//         });

//         await user.save();
//         res.json({ msg: "User created successfully" });
//     } 
//     catch (error) {
//         console.error("Error during signup", error); // Add this line for debugging
//         res.status(500).send("Internal Server Error");
//     }
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const jwt = require("jsonwebtoken");

// decode
// verify 
// generate  -- sign 

const value = {
    name : "hari",
    accountNumber : 1234567890
}

// jwt
const token = jwt.sign(value, "secret");

// this token has been generated using this secret. Hence, it can only be verified using this secret
console.log(token);
// bank cheque example
// jwt.decode(qwerty) => {name : "hari", accountNumber : 1234567890}     -- can be used as boolean too 
// jwt.verify(qwerty, "secret") => {        --  using try and catch for true and false