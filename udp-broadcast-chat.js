var dgram = require('dgram');

var udp = dgram.createSocket('udp4');

udp.setBroadcast(true);
udp.bind(12345);

udp.on("message", function ( data, rinfo ) {
	var strData = data.toString();
	var obj = JSON.parse(strData);
	
	process.stdout.write("\n" + rinfo.address + ":" + rinfo.port + " says: " + obj.msg);
	process.stdout.write('> ');
});

process.stdout.write('> ');
process.stdin.resume();
	
process.stdin.on('data',function (strInput) {
	var msg = new Buffer(JSON.stringify({ msg : strInput.toString() }));
	
	udp.send(msg, 0, msg.length, 12345, "255.255.255.255");
	
	process.stdout.write('> ');
});


