var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var filter = '.' + process.argv[3];

fs.readdir(dir, function(err, list){
  if (err) return console.log(err);
  for (var i = 0; i < list.length; i++){
    if (path.extname(list[i]) === filter){
      console.log(list[i]);
    }
  }
});
