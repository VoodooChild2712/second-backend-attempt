const { check, validationResult } = require("express-validator");

const signupCheck = [
	check("email")
		.trim()
		.not()
		.isEmpty()
		.withMessage("Please, fill the email field")
		.isEmail()
		.withMessage("Please put a valid email"),
	check("password")
		.not()
		.isEmpty()
		.isLength(8)
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
		)
		.withMessage(
			"Password must have at least 8 characters and at least an uppercase letter,"
		),
	(request, response, next) => {
		try {
			validationResult(request).throw()
			return next;
		} catch (error) {
			response.status(400).json({ errors: error.array() });
		}
	},
];

module.exports = signupCheck;
