// SocketProvider.jsx
import React, { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

const apiUrl = import.meta.env.VITE_API_URL;

export const SocketContext = createContext();
const token = localStorage.getItem("token"); 

const socket = io(apiUrl, {
  auth: {
    token: token,
  },
  transports: ['websocket'],
});

const SocketProvider = ({ children }) => {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('✅ Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('❌ Disconnected from server');
    });

    
  }, []);

  const sendMessage = (eventName, message) => {
    socket.emit(eventName, message);
  };

  const receiveMessage = (eventName, callback) => {
    socket.on(eventName, callback); 
  };

  return (
    <SocketContext.Provider value={{ sendMessage, receiveMessage, socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
