const jsonwebtoken = require("jsonwebtoken");

const tokenSign = async (user) => {
	const token = jsonwebtoken.sign(
		{
			_id: user._id,
			email: user.email,
			role: user.role,
		},
		"MY_PASSWORD",
		{
			expiresIn: "2h",
		}
	);
	return token;
};

const verifyToken = async (token) => {
	try {
		return jsonwebtoken.verify(token, "MY_PASSWORD");
	} catch (error) {
		console.log(error);
	}
};

module.exports = { tokenSign, verifyToken };
