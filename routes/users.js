const express = require('express')
const bcrypt = require('bcryptjs')
const {ensureAuthenticated} = require('../config/auth')
const User = require('../models/User')

const router = express.Router()

router.get('/register', (req,res) => {
    res.render('register')
})

router.post('/register', (req,res) =>{
    const {fname, mname, lname, email, pwd, pwd2} = req.body;
    let newUser = new User({
        fname,
        mname,
        lname,
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
    //console.log(req.session);
    req.logOut();
    //console.log(req.session);
    res.redirect('/');
});



module.exports = router