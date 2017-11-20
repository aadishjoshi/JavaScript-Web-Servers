//for server making
//to make a request try localhost:3000
const express = require('express');

var app = express();

//http route handlers
//get has 2 parameters one is url and second is function
//function that send backs something
//app.get to HTTP GET request
//req and response is important

//if someone makes a request they going to get hello express as their body data
app.get('/',(req, res)=>{
  // res.send('<h1>Hello Express</h1>');
  //to send back in json format
  res.send({
    name:'Aadish',
    likes: [
      'Biking',
      'Cities'
    ]
  });
});

//localhost:3000/about
app.get('/about',(req,res)=>{
  res.send("about page");
});

//bad route
app.get('/bad',(req,res)=>{
  res.send({
  errorMessage: "Error handling request"

})
});

//to bind application to machine port
app.listen(3000);
