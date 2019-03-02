const {check, validationResult } = require('express-validator/check');

let validationArray = [
	
	check('fname', "First name can't be empty")
	.isLength({min:1}),
	check('lname', "Last name can't be empty")
	.isLength({min:1}),

    check('email', 'Invalid Email')
	.isEmail(),
	  
	check('password', 'Invalid password')
	.isLength({min:8})
	.custom((value, { req, loc, path }) => {
		if (value !== req.body.passwordConfirmation) {
	 	  throw new Error("Passwords don't match");
	 	} else {
			 return value;
		 }
	})
]

module.exports = validationArray;