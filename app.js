const express   =   require('express')
const ejsLayout =   require('express-ejs-layouts')
const mongoose  =   require('mongoose')
const session 	= 	require('express-session')
const passport 	= 	require('passport')
const passportconfig = require('./config/passport')(passport);

let app = express();

app.locals.username='';


// Create db config and then connect
const db = require('./config/keys').mongoURI
mongoose.connect(db, { useNewUrlParser:true})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err)); 

// Allow static content like css files to load
// Static pages need to be enabled explicitly through middleware(using app.use(callback) )
app.use(express.static(__dirname+'/views'))

// Initialise express-ejs-object to handle rendering of our ejs files
app.use(ejsLayout)
app.set('view engine','ejs')

// Body parser
app.use(express.urlencoded({ extended:false }));

// Passport
app.use(session({secret:'anything'}));

app.use(passport.initialize());
app.use(passport.session());
// Route pages
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))


// Define PORT
const PORT = process.env.PORT || 4000

// Start server 
app.listen(PORT, ()=>{
	console.log(`Server running at port ${PORT}`);
}); 