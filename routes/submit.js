const express = require('express')
const session = require('express-session')
const passport = require('passport')
const db = require('../config/fire-conf')
const {ensureAuthenticated} = require('../config/auth')

const router = express.Router()

router.get('/', ensureAuthenticated,(req, res) => {
	res.render('submit');
})

router.get('/journal', ensureAuthenticated,(req, res) => {
	res.render('submissions/journal');
})

router.post('/journal', ensureAuthenticated, (req, res) => {
	let document = req.body;

	for(const key in document) {
		let value = document[key];
		if(value===undefined || value==='') {
			delete document[key]
		}
	}

	// console.log(document);
	let confIdentifier = document.doi;
	db.ref('journals/'+confIdentifier).set(document)
	.then( () => {res.redirect('/users/submit')})
    .catch(err => {console.log(err)})  
})


router.get('/conference',ensureAuthenticated, (req, res) => {
	res.render('submissions/conference');
})

router.post('/conference',ensureAuthenticated, (req, res) => {
	let document = req.body;

	for(const key in document) {
		let value = document[key];
		if(value===undefined || value==='') {
			delete document[key]
		}
	}
	// console.log(document);
	let confIdentifier = document.doi;
	db.ref('conference/'+confIdentifier).set(document)
	.then( () => {res.redirect('/users/submit')})
    .catch(err => {console.log(err)})  
})

module.exports = router;