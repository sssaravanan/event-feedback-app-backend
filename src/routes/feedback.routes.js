const express = require("express");
const feedbackController = require("../controllers/feedback.controller");

const router = express.Router();

router.post("/", feedbackController.createFeedback);
router.get("/", feedbackController.getFeedbacks);
router.get("/:id", feedbackController.getFeedbackById);
router.delete("/:id", feedbackController.deleteFeedback);

module.exports = router;