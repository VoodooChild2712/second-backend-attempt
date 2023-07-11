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
	img: {
		type: String,
		require: true,
	}
});

module.exports = mongoose.model("music", MusicModel);
