const express = require('express')
const session = require('express-session')
const passport = require('passport')
const {ensureAuthenticated} = require('../config/auth')

const router = express.Router()

router.get('/', (req,res) => {
    res.render('index')
})

router.post('/', passport.authenticate('local',  
  { successRedirect: '/users/homepage',
   failureRedirect: '/',
   failureFlash: true 
  }))
  

module.exports = router