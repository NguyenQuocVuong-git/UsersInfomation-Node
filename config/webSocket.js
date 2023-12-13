const WebSocket = require("ws");

const createWebSocket = (websocketServer) => {
    console.log('CALL WEB SOCKET');
    websocketServer.on('connection', (socket) => {
        console.log('client connected.');
        socket.on('message', (data) => {
          websocketServer.clients.forEach(function each(client) {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
              client.send(data.toString());
            }
          });
        });
        socket.on('close', () => {
          console.log('Client disconnected');
        });
      });
}

module.exports = createWebSocket;