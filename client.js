const dgram = require('dgram');
const socket = dgram.createSocket('udp4');
const {
  PORT,
  HOST
} = require('./config');
let sentTimestamp = null;

socket.on('message', (message, remote) => {
  console.log(`Ping: ${Date.now() - sentTimestamp}ms`);

  setTimeout(sendMessageToServer.bind(this, { message: `Hello server!` }), 500);
});

function sendMessageToServer(message) {
  socket.send(JSON.stringify(message), PORT, HOST, (err) => {
    if (err) return console.error(err);

    console.log(`Message sent.`);

    sentTimestamp = Date.now();
  });
}

sendMessageToServer({ message: `Hello server!` });



