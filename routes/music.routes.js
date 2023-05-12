const express = require("express");
const multer = require("multer");

const {
	postNewTrack,
	getAllTracks,
	updateTrack,
	deleteTrack,
	getTrackById,
	updateTrackById,
	deleteTrackByID,
} = require("../controllers/music.controller");
const {authMiddleware, checkRole} = require("../middlewares/jwt.middleware");

const musicRoutes = express.Router();

// Variable to storage files (multer)
const storage = multer.diskStorage({
	// Define path fot the file
	destination: (request, file, cb) => {
		const path = `${__dirname}/../storage`;
		cb(null, path);
	},
	// analyze the file properties
	filename: (request, file, cb) => {
		const ext = file.originalname.split(".").pop();
		const filename = `file-${Date.now()}.${ext}`;
		cb(null, filename);
	},
});

const updateFile = multer({
	storage: storage,
});

// Upload files route

musicRoutes.post(
	//route
	"/storage",
	//midleware
	updateFile.single("filename"),
	//params
	(require, response) => {
		response.json({ message: "File saved" });
	}
);

// Read

musicRoutes.get("/music", authMiddleware, getAllTracks);

musicRoutes.get("/music/:id", getTrackById);

// Create

musicRoutes.post("/music", checkRole, postNewTrack);

// Update

musicRoutes.put("/music", updateTrack);
musicRoutes.put("/music/:id", updateTrackById);

// Delete

musicRoutes.delete("/music", checkRole, deleteTrack);
musicRoutes.delete("/music/:id", checkRole, deleteTrackByID);

module.exports = musicRoutes;
