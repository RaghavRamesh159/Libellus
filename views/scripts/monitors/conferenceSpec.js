let constraints = {
	
	author1: {
		presence: true,
		length: {
			minimum: 3,
			maximum: 20
		},
		format: {
			pattern: /[A-Z][a-zA-Z ]+/,
			message: "Must start with capital and can only contain alphabets"
		}
	},	
	researchArea: {
		presence: true,
		length: {
			minimum: 2,
			maximum: 20
		},
		format: {
			pattern: /[A-Za-z0-9-_: ]+/,
			message: "can contain only letters, numbers and _-:"
			}
		},
	title: {
		presence: true,
		format: {
			pattern: /[A-Z][a-zA-Z-_: ]*/,
			message: "must start with capital and can contain only letters, underscore and hyphen"
			}
		},
	doi: {
		presence:true,
		format: {
			pattern: /\d{8}/,
			message: "must be 8 digits"
		}
	},
	isbn: {
		presence: true,
		format: {
			pattern: /\d{4}\-\d{4}/,
			message: "must be of the format dddd-dddd"
		}
	},
	
	conferenceName: {
		presence: true,
		format: {
			pattern: /[A-Z][a-zA-Z-_: ]+/
		}
	},
	
	fromDate: {
		presence: true,
		date: {
			latest: moment().subtract(1, "days"),
			message: "^Cant submit future conferences"
		}
	},
		
	toDate: {
		presence: true,
		date: {
			latest: moment().subtract(1, "days"),
			message: "^Cant submit future conferences"
		}
	},
	pages: {
		presence: true,
		numericality: {
			onlyInteger: true,
			greaterThanOrEqualTo: 1
		}
	},
	
	abstract: {
		presence: true
	},
	
	keywords: {
		presence: true
		//Comma seperated regEx havent done yet
	},	
};