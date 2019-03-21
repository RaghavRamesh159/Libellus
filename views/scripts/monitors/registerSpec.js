var constraints = {
	fname: {
		presence: true,
		length: {
			minimum: 3,
			maximum: 20
		},
		format: {
			// We don't allow anything that a-z and 0-9
			pattern: "[A-Z][a-z]+",
			// but we don't care if the username is uppercase or lowercase
			//flags: "i",
			message: "Must start with capital and can only contain alphabets"
		}
	},
	mname: {
		presence: true,
		length: {
			minimum: 1,
			maximum: 3
		},
		format: {
			// We don't allow anything that a-z and 0-9
			pattern: "[a-z0-9]+",
			// but we don't care if the username is uppercase or lowercase
			flags: "i",
			message: "can only contain a-z and 0-9"
		}
	},
	lname: {
		presence: true,
		length: {
			minimum: 3,
			maximum: 20
		},
		format: {
			// We don't allow anything that a-z and 0-9
			pattern: "[a-z0-9]+",
			// but we don't care if the username is uppercase or lowercase
			flags: "i",
			message: "can only contain a-z and 0-9"
		}
	},
	department: {
		presence: true,
		inclusion: {
			within: ["CS", "IS", "EC"],
			message: "^You're not one of the elites"
		}
	},
  email: {
		// Email is required
		presence: true,
		// and must be an email (duh)
		email: true
  },
  password: {
		// Password is also required
		presence: true,
		// And must be at least 5 characters long
		length: {
			minimum: 5
		}
  },
  passwordConfirmation: {
		// You need to confirm your password
		presence: true,
		// and it needs to be equal to the other password
		equality: {
			attribute: "password",
			message: "^The passwords does not match"
		}
  }
};