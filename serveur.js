/* var express = require('express')
var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');



// app.use('/static', express.static('static'));
app.use(express.static('static'));




// index page 
app.get('/', function(req, res) {
    res.render('index');
});


// about page 
// app.get('/about', function (req, res) {
//     res.render('pages/about');
// });


// let ejs = require('ejs'),
//     people = ['geddy', 'neil', 'alex'],
//     html = ejs.render('<%= people.join(", "); %>', { people: people });

app.listen(3254)
console.log('3254 is the magic port'); */


/*************************************/



// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
// app.get('/', function(req, res) {
//     res.render('pages/index');
    
// });

// index page 
app.get('/', function(req, res) {
    var drinks = [
        { name: 'html', level: 3 },
        { name: 'CSS', level: 5 },
        { name: 'JS', level: 10 }
    ];


    res.render('pages/index', {
        drinks: drinks,
    });
});


// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8280);
console.log('8280 is the magic port');

