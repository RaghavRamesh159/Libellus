const express = require('express')
const bcrypt = require('bcryptjs')
const {ensureAuthenticated} = require('../config/auth')
const User = require('../models/User')
const flash = require('connect-flash')
const {check, validationResult } = require('express-validator/check');

const validReg = require('../views/validators/userRegister');

const submitRouter = require

const router = express.Router()

router.get('/register', (req,res) => {
    res.render('register')
})

router.use('/submit', require('./submit'));

router.get('/homepage', ensureAuthenticated, (req,res) =>{
    res.render('homepage')
});

router.post('/register', validReg, (req,res) =>{

    let errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const {fname, mname, lname, department, email, pwd, pwd2} = req.body;
    let newUser = new User({
        fname,
        mname,
        lname,
        department,
        email,
        password:pwd
    });

    bcrypt.genSalt(10, (err,salt) =>{
        if(err){
            console.log(err);
        }
        else{
            bcrypt.hash(newUser.password,salt, (err,hash) =>{
              if(err) {console.log(err)}
              else{
                  newUser.password = hash;
                  console.log(hash)
                  console.log(newUser.password)

                newUser.save()
                    .then( user => {
                        res.redirect('/')
                    })
                    .catch(err => {
                        console.log(err)
                    })
              }  
            })
            console.log(newUser)
            
        }
    })
})
router.get('/logout', (req, res)=>{
    req.logOut();
    req.flash('success_msg','Logged Out!')
    res.redirect('/');
});



module.exports = router