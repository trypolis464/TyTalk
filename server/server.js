/*
 * server.js
 * A part of the TyTalk server.
 * Copyright (C) 2020, Ty Gillespie. All rights reserved.
 * MIT License.
*/

'use strict';
const webSocket = require('ws');
const wss = new WebSocket.Server({
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
