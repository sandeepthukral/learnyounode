var fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, 'utf8', function(err, done){
  console.log(done.split('\n').length -1);
});
