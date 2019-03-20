
function buildUser(user) {
	// console.log(user);
	// console.log("Incoming User")
	const source = user._source;
	let element = {};
	element.type = 'User';
	element.info = {
		main: {},
		aux: {}
	};
	element.info.main.name = source.fname +' '+ (source.mname?source.mname:'') +' '+ source.lname;
	element.info.aux.department = source.department;
	element.info.aux.email = source.email;

	return element;
}

function buildJournal(journal) {
	const source = journal._source;
	let element = {};
	element.type = 'Journal';

	element.info = {
		main: {},
		aux: {}
	}

	element.info.main.title = source.paperTitle;
	element.info.aux.abstract = source.abstract;

	return element;
}

function buildConference(conference) {
	const source = conference._source;
	let element = {};
	element.type = 'Conference';

	element.info = {
		main: {},
		aux: {}
	}

	element.info.main.title = source.paperTitle;
	element.info.aux.abstract = source.abstract;

	return element;
}

function transformHits(hits) {

	let finalHits = [];
	//console.log(hits)
	//console.log("Incoming Hits");

	console.log("Hit in Hits")
	hits.forEach( hit => {
		console.log(hit);
		switch(hit._index) {
			case 'users':
			finalHits.push(buildUser(hit));
			break;

			case 'journals':
			finalHits.push(buildJournal(hit));
			break;

			case 'conference':
			finalHits.push(buildConference(hit));
			break;

			default:
			finalHits.push(hit._source);
			break;
		}
	});
	//finalHits.push({ hello: "How you doin?"});
	console.log(finalHits)
	console.log("Final Hits")
	return finalHits;
}

module.exports= transformHits;