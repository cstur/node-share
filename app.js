var http = require('http');
var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var Hello = require('./module');

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	/* CallBack */
	console.log(req.url);
	fs.readFile('awesome.txt', 'utf-8', function(err, data) {
		if (err) {
			console.error(err);
		} else {
			console.log(data);
		}
	});
	console.log('end.');

	/* Event Emitter */
	var event = new EventEmitter();
	event.on('some_event', function() {
		console.log('some_event occured.');
	});
	setTimeout(function() {
		event.emit('some_event');
	}, 3000);

	/* Module */
	hello = new Hello();
	hello.setName('Stur');
	hello.sayHello();

	res.write('<h1>NodeJS</h1>');
	res.end('<p>Hello CheZheng</p>');
}).listen(3000);
console.log("HTTP server is listening at port 3000.");