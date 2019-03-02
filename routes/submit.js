const express = require('express')
const session = require('express-session')
const passport = require('passport')
const Conf = require('../models/Conference')
const {ensureAuthenticated} = require('../config/auth')

const router = express.Router()

router.get('/', ensureAuthenticated,(req, res) => {
	res.render('submit');
})

router.get('/journal', ensureAuthenticated,(req, res) => {
	res.render('submissions/journal');
})

router.get('/conference',ensureAuthenticated, (req, res) => {
	res.render('submissions/conference');
})

router.post('/conference',ensureAuthenticated, (req, res) => {
	const {author1,author2,author3,author4,author5,
    conferenceType,
    conferenceName,
    doi  ,
    isbn ,
    researchArea,
    projectName,
    paperTitle,
    organiser,
    fromDate     ,
    toDate       ,
    venue        ,
    abstract     ,
    pages        ,
    keywords     ,
    url          ,
    info
	} = req.body;
	console.log(req.body);
    newConf = new Conf({author1,author2,author3,author4,author5,
		conferenceType,
		conferenceName,
		doi  ,
		isbn ,
		researchArea,
		projectName,
		paperTitle,
		organiser,
		fromDate     ,
		toDate       ,
		venue        ,
		abstract     ,
		pages        ,
		keywords     ,
		url          ,
		info
		})
	newConf.save()
	.then(conf => {res.redirect('/users/homepage')})
    .catch(err => {console.log(err)})  
    console.log(new Conf)
})

module.exports = router;