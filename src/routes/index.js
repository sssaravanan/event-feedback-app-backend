const express = require("express");

const eventRoutes = require("./event.routes");
const feedbackRoutes = require("./feedback.routes");

const router = express.Router();

router.use("/events", eventRoutes);
router.use("/feedback", feedbackRoutes);

module.exports = router;