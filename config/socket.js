const socketIO = require("socket.io");
const {saveMessage} = require('../utils/index')

const createSocketIO = (httpServer) => {
  const io = socketIO(httpServer, {
    allowEIO3: true,
    cors: {
      origin: true,
      credentials: true,
    },
  });

  io.on('connect', (socket) => {
    let users = [];
    for (let [id, s] of io.of("/").sockets) {
      if (id !== socket.id) {
        const user = {
          socketId: id,
          username: s.handshake.auth.username,
        };
        users.push(user);
      }
    }
    const user = {
      socketId: socket.id,
      username: socket.handshake.auth.username,
    }
    socket.emit('USER_INFO', user)
    socket.emit("FRIENDS_LIST", users);
    socket.broadcast.emit("FRIEND_CONNECTED", user);
    socket.on("PRIVATE_MESSAGE", async ({ from, content, to }) => {
      io.to(to).emit("PRIVATE_MESSAGE", {
        from,
        content,
        to,
      });
      await saveMessage({ content, sendBy: from, idUser1 : from, idUser2: to })
    });
  })
};

module.exports = createSocketIO;
