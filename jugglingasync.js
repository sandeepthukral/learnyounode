var http = require('http');
var bl = require('bl');

var results = [];
var count = 0;

function httpGet(index){
    http.get(process.argv[index + 2], function(resp){
        resp.pipe(bl(function(err, data){
            if (err) {
                return console.log(err);
            }

            results[index] = data.toString();
            count++;

            if (count === 3){
                printResults();
            }
        }))
    });
}

function printResults(){
    results.forEach(function(result){
        console.log(result);
    })
}

for (var i = 0; i < 3; i++){
    httpGet(i);
}
