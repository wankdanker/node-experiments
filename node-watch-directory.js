fs = require('fs');

fs.watchFile("/tmp", function (p, n) { 
	console.log(p); 
	console.log(n) 
});
