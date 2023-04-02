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
		if (!tracks) {
			return response.status(404).json({ message: "Page not found" });
		}
		return response.status(200).json(tracks);
	} catch (error) {
		return response.status(500).json({ message: "Something went wrong" });
	}
};

// Read by ID

const getTrackById = async (request, response) => {
	const id = await request.params.id;
	try {
		const track = await trackModel.findById(id);
		if (!track) {
			return response.status(404).json({ message: "Page not found" });
		}
		return response.status(200).json(track);
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

// Update by ID

const updateTrackById = async (request, response) => {
	const id = await request.params.id;
	try {
		await trackModel.updateOne({ _id: id }, request.body);
		if(!track) return response.status(404).json({message: "Page not found"})
		return response.status(200).json({ message: "Song updated" });
	} catch (error) {
		return response.status(500).json({ message: "Something went wrong" });
	}
};

// Delete stage

const deleteTrack = async (request, response) => {
	try {
		await trackModel.deleteOne({ _id: request.body.id }, request.body);
		response.status(200).json({ message: "Song deleted" });
	} catch (error) {
		return response.status(500).json({ message: "Something went wrong" });
	}
};

// Delete by ID

const deleteTrackByID = async (request, response) => {
	const id = await request.params.id;
	try {
		await trackModel.deleteOne({ _id: id });
		response.status(200).json({ message: "Song deleted" });
	} catch (error) {
		return response.status(500).json({ message: "Something went wrong" });
	}
};

// exports

module.exports = {
	postNewTrack,
	getAllTracks,
	updateTrack,
	deleteTrack,
	getTrackById,
	updateTrackById,
	deleteTrackByID,
};
