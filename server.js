var http = require('http');
var express = require('express');
var jade = require('jade');

var app = express();
app.set('view engine', 'jade');
app.use(express.static('public'));


app.get('/', function(req, res){
	res.render("index")
})

app.get('/player', function(req, res){
	res.redirect("/");
})
app.get('/player/:id', function(req, res){
	res.render("player", {id : req.params.id})
})

app.get('/server', function(req, res){
	res.redirect("/");
})
app.get('/server/:id', function(req, res){
	res.render("server", {id : req.params.id})
})

app.listen(8080);