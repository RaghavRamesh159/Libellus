const {check, validationResult } = require('express-validator/check');
const mongoose = require('mongoose');

// Create db config and then connect
const db = require('../../config/keys').mongoURI
mongoose.connect(db, { useNewUrlParser:true})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err)); 

let validationArray = [

	check('author1', 'Invlaid Email')

]