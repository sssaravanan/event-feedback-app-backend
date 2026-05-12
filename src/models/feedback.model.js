const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: [true, 'Event ID is required'],
    },
    userName: {
        type: String,
        required: [true, 'User name is required'],
        trim: true,
        maxlength: [50, 'User name cannot exceed 50 characters'],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Rating must be at least 1"],
        max: [5, "Rating cannot be more than 5"],
    },
    comments: {
        type: String,
        required: [true, "Feedback message is required"],
        trim: true,
        maxlength: [1000, "Message cannot exceed 1000 characters"],
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Feedback', feedbackSchema);