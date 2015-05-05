var http = require('http');
var express = require('express');
var jade = require('jade');

var app = express();
app.set('view engine', 'jade');
app.use(express.static('public'));


app.get('/', function(req, res){
	res.render("index")
})

app.get('/game', function(req, res){
	res.redirect("/");
})
app.get('/game/:id', function(req, res){
	res.render("game", {id : req.params.id})
})

app.listen(8080);