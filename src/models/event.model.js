const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Event name is required'],
        trim: true,
        maxlength: [100, 'Event name cannot exceed 100 characters'],
    },
    description: {
        type: String,
        trim: true,
        maxlength: [1000, 'Event description cannot exceed 1000 characters'],
    },
    eventDate: {
        type: Date,
        required: [true, 'Event date is required'],
    },
    location: {
        type: String,
        required: [true, 'Event location is required'],
        trim: true,
        maxlength: [200, 'Event location cannot exceed 200 characters'],
    },
    isActive: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);