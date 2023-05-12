const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { tokenSign } = require("../utilities/generateJsonWT");

const hashPass = (password) => {
	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt);
	return hash;
};

const unHashPass = (password, hash) => {
	const match = bcrypt.compareSync(password, hash);
	return match;
};

const signUpUser = async (request, response) => {
	const { password, ...body } = request.body;
	try {
		body.password = hashPass(password);
		await userModel.create(body);
		return response.status(200).json({ message: "User created" });
	} catch (error) {
		return response.status(500).json({ message: "Something went wrong" });
	}
};

const loginUserController = async (request, response) => {
	const email = request.body.email;
	try {
		const user = await userModel.findOne({ email: email });
		if (!user) {
			return response.status(404).json({ message: "User or password wrong" });
		}
		const match = unHashPass(request.body.password, user.password);
		if (!match) {
			return response
				.status(404)
				.json({ message: "User or password wrong", match: match });
		} else {
			const data = {
				token: await tokenSign(user),
				user: user,
			};
			return response.status(200).json({ message: "Logged in!", data: data });
		}
	} catch (error) {
		return response.status(500).json({ message: "Something went wrong" });
	}
};

module.exports = { signUpUser, loginUserController };
