const express = require('express')
const bcrypt = require('bcryptjs')
const {ensureAuthenticated} = require('../config/auth')
const flash = require('connect-flash')
const elastic = require('elasticsearch')
const db = require('../config/fire-conf')
const {check, validationResult } = require('express-validator/check');

const validReg = require('../views/validators/userRegister');
const transformHits = require('../views/scripts/searchRes');

const router = express.Router() 

let client = new elastic.Client({
    host: 'localhost:9200',
    log: 'trace'
  });

router.get('/register', (req,res) => {
    res.render('register',{errors:''})
})

router.get('/search', (req, res) => {
    res.render('search',{hits:undefined});
  });

router.post('/search', (req,res) => {
    let {search} = req.body;

    client.search({q: search})
        .then( body => { 
            res.render('search', {hits: transformHits(body.hits.hits)});
        });
    // res.render('search', {hits:results.hits.hits._source})
});

router.use('/submit', require('./submit'));

router.get('/homepage', ensureAuthenticated, (req,res) =>{
    res.render('homepage')
});

router.post('/register', validReg, (req,res) =>{

    let errors = validationResult(req);
    if(!errors.isEmpty()) {
        //console.log(errors.array())
        res.render('register',{errors:errors.array()})
        // return res.status(422).json({ errors: errors.array() });
    }
    else{
        let {fname, mname, lname,department, email, password, pwd2} = req.body;
        bcrypt.genSalt(10, (err,salt) =>{
            if(err){
                console.log(err);
            }
            else{
                bcrypt.hash(password,salt, (err,hash) =>{
                    if(err) {console.log(err)}
                    else{
                        password = hash;
                        db.ref('users/'+(fname+lname))
                            .set({fname, mname, lname, email, department, password})
                                .then(()  => res.redirect('/'))
                                .catch(err =>{console.log(err)});

                    }  
                })
            }
        })
    }
})

router.get('/analytics', ensureAuthenticated, (req, res) =>{
    res.redirect('http://localhost:5601')
})

router.get('/logout', (req, res)=>{
    req.logOut();
    req.flash('success_msg','Logged Out!')
    res.redirect('/');
});



module.exports = router