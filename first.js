var http = require('http');
var fs = require('fs');
var dt = require('./myfirstmodule');

http.createServer( (req,res) => {
    fs.readFile('demo.html',(err,data) => {
        res.writeHead(200, {'content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);