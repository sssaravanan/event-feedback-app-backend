const Feedback = require("../models/feedback.model");

const create = (data) => {
    return Feedback.create(data);
};

const findAll = () => {
    return Feedback.find()
        .populate("eventId", "name eventDate location")
        .sort({ createdAt: -1 });
};

const findById = (id) => {
    return Feedback.findById(id).populate("eventId", "name eventDate location");
};

const deleteById = (id) => {
    return Feedback.findByIdAndDelete(id);
};

module.exports = {
    create,
    findAll,
    findById,
    deleteById,
};