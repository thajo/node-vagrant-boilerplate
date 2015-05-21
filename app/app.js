var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {




	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

	mongoose.connect('mongodb://localhost/test');
	mongoose.connection.on('connected', function (error) {
	 if(error) {
	 	return console.log(error);
	 }
	 console.log("Connection to mongoDB worked!");
	});


});