let constraints = {
	
	author1: {
		presence: true,
		length: {
			minimum: 3,
			maximum: 20
		},
		format: {
			pattern: "[A-Z][a-z]+",
			message: "Must start with capital and can only contain alphabets"
		}
	},
};