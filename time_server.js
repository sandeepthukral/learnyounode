var net = require('net');

var pad = function(value){
    if (value < 10){
        return "0" + value;
    } else {
        return value;
    }
}

var server = net.createServer(function(socket){
    var date = new Date();
    var month = pad(date.getMonth()+1);
    var day = pad(date.getDate());
    var hours = pad(date.getHours());
    var min = pad(date.getMinutes());
    var timestamp = date.getFullYear() + "-" + month + "-" + day + " " + hours + ":" + min + "\n";
    socket.end(timestamp);
});
server.listen(process.argv[2]);
