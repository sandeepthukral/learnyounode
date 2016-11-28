var theFunction = function(dir, ext, callback) {
    var fs = require('fs');
    var path = require('path');
    var ext = '.' + ext;
    var returnArray = [];

    fs.readdir(dir, function(err, list){
        if (err) return callback(err);
        for (var i = 0; i < list.length; i++){
            if (path.extname(list[i]) === ext){
                returnArray.push(list[i]);
            }
        }
        callback(null, returnArray);
    });
};

module.exports=theFunction;
