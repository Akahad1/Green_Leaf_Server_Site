const socketIo = require("socket.io");

let io: {
  to: any;
  on: (arg0: string, arg1: (socket: any) => void) => void;
  emit: (arg0: string, arg1: { userId: any; message: any }) => void;
};

const initSocket = (server: any) => {
  io = socketIo(server);
  io.on("connection", (socket) => {
    console.log("New client connected");
    socket.on("send_notification", (data: any) => {
      // Broadcast to the specific user
      io.to(data.userId).emit("receive_notification", data);
    });
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

const notifyUser = (userId: any, message: any) => {
  io.emit("newNotification", { userId, message });
};

export { initSocket, notifyUser };
