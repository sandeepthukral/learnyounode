var http = require('http');
var url  = require('url');

var portNumber    = Number(process.argv[2]);

server = http.createServer(function(req, resp){
    reqUrl = url.parse(req.url, true);
    var time = reqUrl.query.iso;
    var date = new Date(time);
    var timeJSON = {};
    if (reqUrl.pathname === '/api/parsetime'){
        timePart = time.split('.')[0].split('T')[1].split(':');
        timeJSON.hour   = Number(timePart[0])+1;
        timeJSON.minute = Number(timePart[1]);
        timeJSON.second = Number(timePart[2]);
    }
    if (reqUrl.pathname === '/api/unixtime'){
        timeJSON.unixtime = Number(date.getTime());
    }

    resp.writeHead(200, {'content-type' : 'application/json'});
    resp.end(JSON.stringify(timeJSON));
});

server.listen(portNumber);
