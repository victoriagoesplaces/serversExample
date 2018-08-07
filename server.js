var http = require("http");
var PORT = 7000;
var PORT2 = 7500;
var good = ["goodOne", "goodTwo", "goodThree"];
var bad = ["badOne", "badTwo", "badThree"];

function handleRequest(request, response){
    response.end("It works!! Path hit: " + request.url);
}
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log(good[Math.floor(Math.random() * good.length)] + "Server listening on: http://localhost: " + PORT);
});



function handleRequestTwo(request, response){
    response.end("It works!! Path hit: " + request.url);
}
var serverTwo = http.createServer(handleRequest);
serverTwo.listen(PORT2, function(){
    console.log(bad[Math.floor(Math.random() * bad.length)] + "Server listening on: http://localhost: " + PORT2);
});