const express   =   require('express')
const ejsLayout =   require('express-ejs-layouts')
const mongoose  =   require('mongoose')
const session 	= 	require('express-session')
const passport 	= 	require('passport')
const cookie = require('cookie-parser')
const flash = require('connect-flash')
const passportconfig = require('./config/passport')(passport);
const expressValidator = require('express-validator');
const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
	host: 'localhost:9200',
	log: 'trace'
});
client.ping({
	requestTimeout: 30000,
  }, function (error) {
	if (error) {
	  console.error('elasticsearch cluster is down!');
	} else {
	  console.log('All is well');
	}
});

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

// Use cookie parser(required for flash to work)
// app.use(cookie)


// Body parser
app.use(express.urlencoded({ extended:false }));

// Passport
app.use(session({secret:'anything'}));

// Use flash middleware
app.use(flash())
app.use((req, res, next) => {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	next();
  });


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