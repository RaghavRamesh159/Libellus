const express = require('express')
const session = require('express-session')
const passport = require('passport')
const {ensureAuthenticated} = require('../config/auth')

const router = express.Router()

router.get('/', (req,res) => {
    res.render('index')
})

router.post('/', passport.authenticate('local'), (req, res, next) => {
    if(req.user){
    res.redirect('homepage');
  }});


  router.get('/homepage', ensureAuthenticated, (req,res) =>{
    //console.log(req.session)
    res.render('homepage', {username: req.user.fname+' '+req.user.lname })
});





module.exports = router