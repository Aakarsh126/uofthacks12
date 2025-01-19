const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/chats', chatRoutes);

// Real-time Chat with Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000', // Frontend URL
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('sendMessage', (data) => {
        io.emit('receiveMessage', data);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
