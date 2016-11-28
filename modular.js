var mymodule = require('./make_it_modular.js');
mymodule(process.argv[2], process.argv[3], function(err, data){
    if (err) console.log(err);
    data.forEach(function(item){
        console.log(item);
    });
});

