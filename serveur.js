
// server.js
// load the things we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var fs = require('fs');
app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page : exemple du tuto pour affichage en dur.

// app.get('/', function(req, res) {
//     var drinks = [
//         { name: 'html', level: 3 },
//         { name: 'CSS', level: 5 },
//         { name: 'JS', level: 10 }
//     ];

//     res.render('pages/index', {
//         drinks: drinks,
//     });
// });

//code de l'exercice
app.get('/about', function (req, res) {

    var competences= JSON.parse(fs.readFileSync('competences.json', 'utf8'));
//il faut utiliser res.render pour retourner un resultat lorsque l'on utilise ejs.
    res.render('pages/about',{
        competences: competences,
    })
});

app.listen(8280);
console.log('8280 is the magic port');

