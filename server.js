//for server making
//to make a request try localhost:3000
//to watch all extensions node server.js -e js,hbs
const express = require('express');
//to use template
const hbs = require('hbs');

var app = express();

//now header and footer in about and home.hbs are same
//suppose we have tons of file and we have to change header or footer
//we may have to go in every file to change this but instead
//we declaire partials on hbs to have 'common'
hbs.registerPartials(__dirname+'/views/partials');



app.set('view engine','hbs') // set express related function key val pairs.
//views folder

//http route handlers get has 2 parameters one is url and second is function:  function that send backs something : app.get to HTTP GET request : req and response is important
//if someone makes a request they going to get hello express as their body data

//express middleware uses to show ./public/help.html without manual creation
app.use(express.static(__dirname + '/public')); //static takes path to absolute variable __dirname: localhost:3030
//public folder to keep all html and css and js files

//template engine: dynamic html rendering like php and ruby.
//reusable markups, handlebars for express: handlebarsjs.com
//package name: hbs


app.get('/',(req, res)=>{
  // res.send('<h1>Hello Express</h1>');  //to send back in json format
  // res.send({
  //   name:'Aadish',
  //   likes: [
  //     'Biking',
  //     'Cities'
  //   ]
  // });

  res.render('home.hbs',{
    welcomeMessage: 'Hello world',
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
  });


});

//localhost:3000/about
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()

  }); //to get static pair rendering
});

//bad route
app.get('/bad',(req,res)=>{
  res.send({
  errorMessage: "Error handling request"

})
});

//to bind application to machine port
app.listen(3000);
