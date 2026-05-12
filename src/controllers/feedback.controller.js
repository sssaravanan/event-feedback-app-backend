const feedbackService = require("../services/feedback.service");
const asyncHandler = require("../utils/asyncHandler");
const { successResponse } = require("../utils/apiResponse");

const createFeedback = asyncHandler(async (req, res) => {
    const feedback = await feedbackService.createFeedback(req.body);

    return successResponse(res, "Feedback submitted successfully", feedback, 201);
});

const getFeedbacks = asyncHandler(async (req, res) => {
    const feedbacks = await feedbackService.getFeedbacks();

    return successResponse(res, "Feedbacks fetched successfully", feedbacks);
});

const getFeedbackById = asyncHandler(async (req, res) => {
    const feedback = await feedbackService.getFeedbackById(req.params.id);

    return successResponse(res, "Feedback fetched successfully", feedback);
});

const deleteFeedback = asyncHandler(async (req, res) => {
    await feedbackService.deleteFeedback(req.params.id);

    return successResponse(res, "Feedback deleted successfully");
});

module.exports = {
    createFeedback,
    getFeedbacks,
    getFeedbackById,
    deleteFeedback,
};