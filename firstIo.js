var fileName = process.argv[2];
var fs = require('fs');
var fileContents = fs.readFileSync(fileName).toString();
var count = fileContents.split('\n').length -1 ;
console.log(count);
