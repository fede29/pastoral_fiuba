var express = require('express');
var app = express();

app.get('/', function (req, res){
	res.send('Bienvenido a la pagina web de la Pastoral Universitaria!');
});

app.listen(3000, function() {
	console.log('App listening on port 3000!');
});

