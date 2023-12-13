const { WebSocketServer } = require('ws');
const uuid = require('uuid');

function peerProxy(httpServer) {
  // Create a websocket object
  const wss = new WebSocketServer({ noServer: true });

  // Handle the protocol upgrade from HTTP to WebSocket
  httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  });

  // Keep track of all the connections so we can forward messages
  let connections = [];

  wss.on('connection', (ws) => {
  
    console.log("SOMEONE CONNECTED")
    const connection = { id: uuid.v4(), alive: true, ws: ws };
    connections.push(ws)

    // Forward messages to everyone except the sender
    ws.on('message', function message(data) {
      console.log(`Message: ${data}`)

      connections.forEach((socket)=> {
        if (socket.id !== connection.id) {
          socket.send(data)
        }
      })
      

    });


    // Remove the closed connection so we don't try to forward anymore
    ws.on('close', () => {
      console.log("DISCONNECTED")
      connections.findIndex((o, i) => {
        if (o.id === connection.id) {
          connections.splice(i, 1);
          return true;
        }
      });
    });

  });

}

module.exports = { peerProxy };
