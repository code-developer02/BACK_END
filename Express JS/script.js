// Express-js Framework:

// Introduction to Express.js.

// express js ek npm package hai
// framework
// manages everything from receiving the request and giving the response

// Setting up a basic Express application.

// npm i express
// npm script.js --> run the code

// Routing.

//npm i nodemon --> reload the route which we have change
//nodemon script.js  ORR  npx nodemon script.js

// Middleware.

// jab bhi server request accept karta hai waha se route ke beech pahuchne tak agar aap us request ko beech me rokte ho and kuchh perform karte ho, to ye element middleware kehlaata hai..

// Request and response handling.

// fronted-backend-frontend

// Error handling.




const express = require('express');
const app = express();

// Routes : xyz.com/profile   --> after with / part is route.

// app.get("/",function(req,res){
//     res.send("champion mera anuj");
// })

// app.get("/profile",function(req,res){
//     res.send("champion mera coach");
// })

// app.listen(3000);


//Middleware :

// app.use(function (req, res, next){
//     console.log('middleware chala');  
//     next();
// });

// app.use(function (req, res, next){
//     console.log('middleware chala ek aur baar');
//     next ();
// });

// app.get("/", function (req, res){
//     res.send("champion mera anuj");
// });

// app.get("/about", function (req, res){
//     res.send("About Page hai ye");
// });    

// app.get("/profile", function (req, res){
//     res.send("Profile Page hai ye");
// }); 

// app.listen(3000);


// Error Handling

app.get("/profile",function(req, res, next){
    return next(new Error("something went wrong")) // It is written in console.
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something went wrong, We don't have any idea...");  // It is written in frontend.
});

app.listen(3000);

