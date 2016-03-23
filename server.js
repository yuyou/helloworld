var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello World 3!");
}
var www = http.createServer(handleRequest);
www.listen(8081,"0.0.0.0");
console.log('Server running at http://0.0.0.0:8081/');
