
var app  = require('express')(),
	http = require('http').Server(app),
	io   = require('socket.io')(http);

// app constants
app.set('port', 3000);

app.get('/', function(req, res) {
	res.sendfile('public/index.htm');
});

io.on('connection', function(socket) {
	//console.log('a user connected');
	socket.on('chat message', function(msg) {
		console.log( msg );
		//io.emit('chat message', msg);
	});
});

http.listen(app.get('port'), function() {
	console.log('listening on *:'+ app.get('port'));
});
