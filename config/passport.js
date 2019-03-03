const LocalStrategy = require('passport-local').Strategy
// const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const db = require('../config/fire-conf')
// const User = require('../models/User')

module.exports = (passport) => {
    passport.use(
        new LocalStrategy({usernameField:'email'}, (email, password, done) => {
            db.ref('users/'+ email).once('value')
            .then(user => {
                console.log(user.val());
                if(!user.val()){
                    return done(null, false, {message : 'That email is not registered'})
                }
                bcrypt.compare(password, user.val().password, (error, isMatch)=> {
                    if(isMatch){
                        return done(null, user)
                    }
                    else{
                        return done(null, false, {message: 'Password incorrect'})
                    }
                })
             })
            .catch(err => {throw err;})
        }) 
    )
    passport.serializeUser(function(user, done) {
        done(null, user.val().fname+user.val().lname);
      });
      
    passport.deserializeUser(function(id, done) {
        db.ref('users/'+ id).once('value')
        .then(user => done(null, user))
        .catch()
        });
}

