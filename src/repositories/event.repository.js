const Event = require("../models/event.model");

const create = (data) => {
    return Event.create(data);
};

const findAll = () => {
    return Event.find().sort({ eventDate: -1 });
};

const findActiveEvents = () => {
    return Event.find({ isActive: true }).sort({ eventDate: -1 });
};

const findById = (id) => {
    return Event.findById(id);
};

module.exports = {
    create,
    findAll,
    findActiveEvents,
    findById,
};