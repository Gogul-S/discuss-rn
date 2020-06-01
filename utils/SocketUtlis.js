import io from 'socket.io-client';

const socket = io('http://192.168.43.188:3000/');

const initialState = {
  socket,
};

const SocketReducer = (state = initialState, action) => {
  return state;
};

export default SocketReducer;
