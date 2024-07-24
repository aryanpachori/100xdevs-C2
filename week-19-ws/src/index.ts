import http from "http";
import { WebSocketServer ,WebSocket } from "ws";

const server = http.createServer(function (request, response) {
  console.log(new Date() + "Received req for" + request.url);
  response.end("hi there");
});
const wss = new WebSocketServer({ server });

wss.on("connection", function connection(socket) {
  socket.on("error", console.error);

  socket.on("message", function message(data,isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState == WebSocket.OPEN) {
        client.send(data,{binary: isBinary});
      }
    });
  });
  socket.send('Hello! Message From Server!!');
});

server.listen(8080, function () {
  console.log(new Date() + "server running");
});
