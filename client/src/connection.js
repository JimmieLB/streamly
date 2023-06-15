import io from 'socket.io-client';



const socket = io();
console.log('socket');

// const socketObj = {
//   socket: socket,
//   onStream: (func) => {
//     socket.on ('stream', func);
//   }
// };

export default socket;