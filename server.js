const dgram = require('dgram');
const socket = dgram.createSocket('udp4');
const {
  PORT,
  HOST
} = require('./config');

socket.on('listening', () => {
  console.log('UDP Server listening on ' + socket.address().address + ":" + socket.address().port);
});

socket.on('message', (message, remote) => {
  //console.log(`Message from: ${remote.address}:${remote.port} - ${message}`);

  socket.send(JSON.stringify({ message: 'Hello client' }), remote.port, remote.address);
});

socket.bind(PORT, HOST);
