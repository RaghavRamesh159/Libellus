const express = require('express')
const session = require('express-session')
const passport = require('passport')
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
module.exports = router;