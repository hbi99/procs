
var app  = require('express')(),
	http = require('http').Server(app),
	io   = require('socket.io')(http);

// app constants
app.set('port', 3000);

app.get('/', function(req, res) {
	res.sendFile(__dirname +'/public/index.htm');
});

io.on('connection', function(socket) {
	//console.log('a user connected');
	socket.on('client-request', function(cmd) {
		console.log( cmd );
		
		setTimeout(function() {
			cmd.b = cmd.a + 1;
			io.emit('client-request', cmd);
		}, cmd.a * 1000);
	});
});

http.listen(app.get('port'), function() {
	console.log('listening on *:'+ app.get('port'));
});
