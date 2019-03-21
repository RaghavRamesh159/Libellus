var constraints = {

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

	researchArea: {
		presence: true,
		length: {
			minimum: 2,
			maximum: 20
		},
		format: {
			pattern: "[A-Za-z0-9_-: ]",
			message: "can contain only letters, numbers and _-:"
		}
	},

	paperTitle: {
		presence: true,
		format: {
			pattern: "[A-Z][a-zA-Z-_:]*",
			message: "must start with capital and can contain only letters, underscore and hyphen"
		}
	},

	doi: {
		presence:true,
		format: {
			pattern: "\d{8}",
			message: "must be 8 digits"
		}
	},

	isbn: {
		presence: true,
		format: {
			pattern: "\d{4}\-\d{4}",
			message: "must be of the format dddd-dddd"
		}
	},

	journalName: {
		presence: true,
		format: {
			pattern: "[A-Z][]"
		}
	},

	dateOfPublish: {
		presence: true,
		date: {
			latest: moment().subtract(1, "days"),
			message: "^Cant submit future publications"
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

	volume: {
		presence: true,
		numericality: {
			onlyInteger: true,
			greaterThanOrEqualTo: 1
		}
	},

	issue: {
		presence: true,
		numericality: {
			onlyInteger: true,
			greaterThanOrEqualTo: 1
		}
	},

	impactFactor: {
		presence: true,
		numericality: {
			onlyInteger: false
		}
	},

	citationIndex: {
		presence: true,
		numericality: {
			onlyInteger: false
		}
	},
};