import http from "http";
import { WebSocketServer } from "ws";

const server = http.createServer(function (request, response) {
  console.log(new Date() + "Received req for" + request.url);
  response.end("hi there");
});
server.listen(8080, function () {
  console.log(new Date() + "server running");
});

const wss = new WebSocketServer({ server });

wss.on('connection' ,function connection(ws){
     ws.on('error',console.error);
     
})
