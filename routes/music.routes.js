const express = require("express");
const {
	getMusicList,
	postNewTrack,
} = require("../controllers/music.controller");
const musicRoutes = express.Router();

musicRoutes.get("/music", getMusicList);

musicRoutes.post("/music", postNewTrack);

module.exports = musicRoutes;
