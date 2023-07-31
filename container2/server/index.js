const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // console.log("What is socket: ", socket);
  // console.log("Socket is active to be connected");

  socket.on("send_message", (payload) => {
    console.log("What is payload", payload);
    io.emit("receive_message", payload);
  });
});


server.listen(3005, () => {
  console.log("SERVER IS RUNNING");
});
