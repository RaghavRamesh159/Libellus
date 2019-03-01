const express = require('express')
const session = require('express-session')
const passport = require('passport')
const {ensureAuthenticated} = require('../config/auth')

const router = express.Router()

router.get('/', (req, res) => {
	res.render('submit');
})

router.get('/journal', (req, res) => {
	res.render('submissions/journal');
})
router.get('/conference', (req, res) => {
	res.render('submissions/conference');
})
module.exports = router;