const http = require('http');

// http.createServer([options][,requestListener])
// const server = use to create a server
const server = http.createServer(function(req,res){
    res.end("hello world");
})

server.listen(3000);
