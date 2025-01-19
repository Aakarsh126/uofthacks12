const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile: {
        fullName: { type: String, required: true },
        age: { type: Number, required: true },
        profilePicture: { type: String, default: '' },
        occupation: { type: String, default: '' },
        school: { type: String, default: '' },
        relationshipStatus: { type: String, default: '' },
        roastPreference: { type: String, default: 'Medium' },
        roastAbout: { type: String, default: '' },
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
