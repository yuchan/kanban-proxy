var express = require('express');


var app = express();
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index',   { title : 'Home' });
});

app.get('/login', function(req, res){
  res.redirect('/')
});

app.listen(3000);
