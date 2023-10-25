var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"}); // (1)
  response.write("Hello World");  // (2)
  response.end();                 // (3)
}).listen(80);
