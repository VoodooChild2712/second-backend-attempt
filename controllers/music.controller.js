const { response } = require("express");
const trackModel = require("../models/track.model");

// Create stage

const postNewTrack = async (request, response) => {
	try {
		await trackModel.create(request.body);
		return response.status(200).json({ message: "Song saved" });
	} catch (error) {
		return response.status(500).json({ message: "Something went wrong" });
	}
};

// Read stage

const getAllTracks = async (request, response) => {
	try {
		const tracks = await trackModel.find();
		return response.status(200).json(tracks);
	} catch (error) {
		return response.status(500).json({ message: "Something went wrong" });
	}
};

// Update stage

const updateTrack = async (request, response) => {
	try {
		await trackModel.updateOne({ _id: request.body._id }, request.body);
		response.status(200).json({ message: "Song updated" });
	} catch (error) {
		return response.status(500).json({ message: "Something went wrong" });
	}
};

const deleteTrack = async (request, response) => {
	try {
		await trackModel.deleteOne({_id: request.body.id}, request.body);
		response.status(200).json({ message: "Song deleted" });
	} catch (error) {
		return response.status(500).json({ message: "Something went wrong" });
	}
}

module.exports = { postNewTrack, getAllTracks, updateTrack, deleteTrack };
