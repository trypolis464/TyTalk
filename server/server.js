'use strict';

const webSocket = require('ws');

const wss = new webSocket.Server({
  port: 8080
});

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    wss.clients.forEach((client) => {
      if (client.readyState === webSocket.OPEN) {
        client.send(data);
      }
    });
  });
});

console.log('Server started.');
