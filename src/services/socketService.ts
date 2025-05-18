import { Server } from 'socket.io';

let io: Server;

export const initSocket = (server: any) => {
  io = new Server(server);
  io.on('connection', (socket) => {
    console.log('User connected');
  });
};

export const sendInAppNotification = (userId: string, message: string) => {
  io.to(userId).emit('notification', { message });
};