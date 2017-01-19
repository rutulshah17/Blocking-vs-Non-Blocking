//first node page to load in browser

//reference the http lib that ships with node
var http = require('http');

//start an http server asynchronously
http.createServer( function (request,response) {
	//send the response
	response.writeHead(200);
	response.write('<h1> our first node page </h1>');
	response.end();
}).listen(3000);

//display the message to console

console.log('Server running on port 3000');