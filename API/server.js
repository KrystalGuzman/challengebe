const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const flashcardsMentalRouter = require("../flashcardsMental/flashcardsMental-router.js");
const flashcardsPhysicalRouter = require("../flashcardsPhysical/flashcardsPhysical-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/mental", flashcardsMentalRouter);
server.use("/api/physical", flashcardsPhysicalRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
