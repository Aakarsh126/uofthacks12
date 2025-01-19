const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

// Send a message
router.post('/send', async (req, res) => {
    const { sender, receiver, content } = req.body;

    try {
        const message = new Message({ sender, receiver, content });
        await message.save();
        res.status(201).json({ message: 'Message sent', data: message });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Get chat history between two users
router.get('/:sender/:receiver', async (req, res) => {
    const { sender, receiver } = req.params;

    try {
        const messages = await Message.find({
            $or: [
                { sender, receiver },
                { sender: receiver, receiver: sender },
            ],
        }).sort({ createdAt: 1 });

        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

module.exports = router;
