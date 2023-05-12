const { verifyToken } = require("../utilities/generateJsonWT");

const authMiddleware = async (request, response, next) => {
	try {
		if (!request.headers.authorization) {
			return response.status(401).json({ message: "No token" });
		}
		const token = request.headers.authorization.split(" ").pop();
		const dataToken = await verifyToken(token);

		if (!dataToken._id) {
			return response.status(401).json({ message: "Unauthorized" });
		}
		next();
	} catch (error) {
		return response.status(500).json({ message: "Something went wrong" });
	}
};

const checkRole = async (request, response, next) => {
	try {
		if (!request.headers.authorization) {
			return response.status(401).json({ message: "No token" });
		}
		const token = request.headers.authorization.split(" ").pop();
		const dataToken = await verifyToken(token);

		if (!dataToken.role) {
			return response.status(401).json({ message: "Unauthorized" });
		}
		if (dataToken.role === "client") {
			return response.status(401).json({ message: "You're not admin" });
		}
		next();
	} catch (error) {
		return response.status(500).json({ message: "Something went wrong" });
	}
};

module.exports = { authMiddleware, checkRole };
