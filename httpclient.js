var http = require('http');

http.get(process.argv[2], function(res){
    var error;
    var statusCode = res.statusCode;

    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
            'Status Code: ${statusCode}');
    }
    if (error) {
        console.log(error.message);
        // consume response data to free up memory
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    res.on('data', function(chunk){
        console.log(chunk);
    });
});
