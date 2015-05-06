var http = require('http');
var express = require('express');
var jade = require('jade');
var avatar = require('avatar-generator')({
    //Optional settings. Default settings in 'settings.js' 
    order:'background face clothes head hair eye mouth'.split(' '), //order in which sprites should be combined 
    images:require('path').join(__dirname,'./node_modules/avatar-generator/img'), // path to sprites 
    convert:'convert' //Path to imagemagick convert 
});

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

app.get('/genimage/:gender/:name', function(req, res){
	res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    
	plimg = avatar(req.params.name, req.params.gender, 512).stream();
	plimg.pipe(res);
})

app.listen(8080);