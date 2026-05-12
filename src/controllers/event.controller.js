const eventService = require("../services/event.service");
const asyncHandler = require("../utils/asyncHandler");
const { successResponse } = require("../utils/apiResponse");

const createEvent = asyncHandler(async (req, res) => {
    const event = await eventService.createEvent(req.body);

    return successResponse(res, "Event created successfully", event, 201);
});

const getEvents = asyncHandler(async (req, res) => {
    const events = await eventService.getEvents();

    return successResponse(res, "Events fetched successfully", events);
});

const getActiveEvents = asyncHandler(async (req, res) => {
    const events = await eventService.getActiveEvents();

    return successResponse(res, "Active events fetched successfully", events);
});

const getEventById = asyncHandler(async (req, res) => {
    const event = await eventService.getEventById(req.params.id);

    return successResponse(res, "Event fetched successfully", event);
});

module.exports = {
    createEvent,
    getEvents,
    getActiveEvents,
    getEventById,
};