const { check, validationResult } = require("express-validator");

const useValidationResult = async (request, response, next) => {
	try {
		validationResult(request).throw();
		return next();
	} catch (error) {
		response.status(400).json({ errors: error.array() });
	}
};

module.exports = useValidationResult;
