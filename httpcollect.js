var http = require('http');

http.get(process.argv[2], function(res){
    var rawData = '';
    res.setEncoding('utf8')
       .on('data', function(chunk){
           rawData += chunk;
       })
       .on('end', function(){
           console.log(rawData.length);
           console.log(rawData);
       });
    })
    .on('error', function(error){
        console.log(error.message);
    });
