const music = require("../models/music.models");

const getMusicList = (request, response) => {
	response.json(music);
};

module.exports = getMusicList;