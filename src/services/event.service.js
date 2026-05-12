const eventRepository = require("../repositories/event.repository");

const createEvent = async (data) => {
    return eventRepository.create(data);
};

const getEvents = async () => {
    return eventRepository.findAll();
};

const getActiveEvents = async () => {
    return eventRepository.findActiveEvents();
};

const getEventById = async (id) => {
    const event = await eventRepository.findById(id);

    if (!event) {
        const error = new Error("Event not found");
        error.statusCode = 404;
        throw error;
    }

    return event;
};

module.exports = {
    createEvent,
    getEvents,
    getActiveEvents,
    getEventById,
};