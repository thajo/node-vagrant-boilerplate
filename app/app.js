var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello John the not so great\n');
    console.log("Got connection");
}).listen(3000, '0.0.0.0'); // hmmm...why not 127.0.0.1?
console.log('Server running at http://127.0.0.1:3000/');