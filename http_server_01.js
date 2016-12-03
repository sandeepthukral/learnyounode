var http = require('http');
var fs   = require('fs');

var portNumber    = Number(process.argv[2]);
var fileToDisplay = process.argv[3];

server = http.createServer(function(req, resp){
    resp.writeHead(200, {'content-type' : 'text/plain'});
    fs.createReadStream(fileToDisplay).pipe(resp);
});

server.listen(portNumber);
