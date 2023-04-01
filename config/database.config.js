const mongoose = require("mongoose");

const db = () => {
	try {
		mongoose.conect(
			"mongodb+srv://gian:f4g2mwTYF5MdZSxG@cluster0.xpzz3vd.mongodb.net/?retryWrites=true&w=majority"
		);
		console.log("Conected");
	} catch (error) {
		console.log("Algo salio mal");
		console.log(error);
	}
};

module.exports = db;
