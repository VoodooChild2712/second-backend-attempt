const mongoose = require("mongoose");

// Conect with MongoDB

const db = () => {
	try {
		mongoose.connect(
			"mongodb+srv://gian:f4g2mwTYF5MdZSxG@cluster0.xpzz3vd.mongodb.net/?retryWrites=true&w=majority"
		);
		console.log("MongoDB working");
	} catch (error) {
		console.log("Algo salio mal");
		console.log(error);
	}
};

module.exports = db;
