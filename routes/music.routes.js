const express = require("express");
const {
	postNewTrack,
	getAllTracks,
	updateTrack,
	deleteTrack,
} = require("../controllers/music.controller");
const musicRoutes = express.Router();

// Read

musicRoutes.get("/music", getAllTracks);

// Create

musicRoutes.post("/music", postNewTrack);

// update

musicRoutes.put("/music", updateTrack);

// Delete

musicRoutes.delete("/music", deleteTrack)

module.exports = musicRoutes;
