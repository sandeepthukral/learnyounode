var http = require('http');
var map  = require('through2-map')

var portNumber    = Number(process.argv[2]);

server = http.createServer(function(req, resp){
    if (req.method == 'POST'){
        resp.writeHead(200, {'content-type' : 'text/plain'});
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(resp);
    }
});

server.listen(portNumber);
