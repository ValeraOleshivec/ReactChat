const express = require("express");
const app = express();
const PORT = 5000;
const http = require("http").Server(app);
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let id = 0;
let users = [];
let messages = [];

app.use(express.static(path.join(__dirname, '../client/build')));

app.get("api", (req, res) => {
  res.json({
    message: "Hello",
  });
});

http.listen(PORT, () => {
  console.log("Server working");
});

socketIO.on("connection", (socket) => {
  let userID
  console.log(`${socket.id} user connected`);
  socketIO.emit('refreshPage',{users,messages})
  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnect`)
    console.log(userID);
    users = users.filter((obj)=>{
      return obj[0] !== userID
    })
    socketIO.emit('userDisconnect',users)
  });
  socket.on('NewMessage',(data)=>{
    messages.push(data)
    console.log(messages)
    socketIO.emit('renderMessage',messages)
  })
  socket.on("new User", () => {
    id++;
    userID=id
    socket.emit("getUser", id);
  });
  socket.on("askArray", () => {
    socket.emit("getArray", users);
  });
  socket.on("pushUser", (arr) => {
    users.push(arr);
    socketIO.emit('joinUser',users)
    socketIO.emit('giveMessageList',messages)
  });
});
