const music = require("../models/music.models");
const trackModel = require("../models/track.model");

const postNewTrack = async (request, response) => {
	try {
		await trackModel.create(request.body);
		return response.status(200).json({ message: "Song saved" });
	} catch (error) {
		return response.status(500).json({ message: "Something went wrong" });
	}
};

const getMusicList = (request, response) => {
	response.json(music);
};

module.exports = { getMusicList, postNewTrack };
