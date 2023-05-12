const mongoose = require("mongoose");

// Object Model

const MusicModel = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	description: {
		type: String
	},
	author: {
		type: String
	},
	date: {
		type: String
	},
	file: {
		type: String
	},
});

module.exports = mongoose.model("music", MusicModel);
