const feedbackRepository = require("../repositories/feedback.repository");
const eventRepository = require("../repositories/event.repository");

const createFeedback = async (data) => {
    const event = await eventRepository.findById(data.eventId);

    if (!event) {
        const error = new Error("Selected event does not exist");
        error.statusCode = 404;
        throw error;
    }

    if (!event.isActive) {
        const error = new Error("Feedback cannot be submitted for inactive event");
        error.statusCode = 400;
        throw error;
    }

    return feedbackRepository.create(data);
};

const getFeedbacks = async () => {
    return feedbackRepository.findAll();
};

const getFeedbackById = async (id) => {
    const feedback = await feedbackRepository.findById(id);

    if (!feedback) {
        const error = new Error("Feedback not found");
        error.statusCode = 404;
        throw error;
    }

    return feedback;
};

const deleteFeedback = async (id) => {
    const feedback = await feedbackRepository.deleteById(id);

    if (!feedback) {
        const error = new Error("Feedback not found");
        error.statusCode = 404;
        throw error;
    }

    return feedback;
};

module.exports = {
    createFeedback,
    getFeedbacks,
    getFeedbackById,
    deleteFeedback,
};