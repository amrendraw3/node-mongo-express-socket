const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const db = require('./db');
const bodyParser 	= require('body-parser');

// Connect mongo instance
db.connect();

// Request, route and params handling
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
require("./config/routes")(app);

// Load a view on index route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Connect socket for real time data transfer
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});