const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const userRouter = require("./router/userRouter.js")
const http = require("http");

const createSocketIO = require("./config/socket.js")

const createWebSocket = require("./config/webSocket.js")

const WebSocket = require("ws");

var cors = require('cors')

const app = express();

const httpServer = http.createServer(app);
//socketIO
// createSocketIO(httpServer);

//websocket
const websocketServer = new WebSocket.Server({ server: httpServer });

websocketServer.on('connection', (socket) => {
    console.log('client connected.');
    socket.on('message', (data) => {
    console.log('connect websocket');
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

mongoose.Promise = global.Promise;

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use("/user", userRouter)

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ "message": "Hello Crud Node Express" });
});

httpServer.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});
