const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const routes = require("./routes");
const notFoundMiddleware = require("./middlewares/notFound.middleware");
const errorMiddleware = require("./middlewares/error.middleware");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Event Feedback API is running");
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;