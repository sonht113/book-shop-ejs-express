const path = require('path');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const expressLayouts = require('express-ejs-layouts');
const ApiError = require('./util/ApiError');
const httpStatus = require('http-status');
const app = express();
const port = 8080;

//const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');

// Connect to DB
db.connect();
// Use Override-method
app.use(methodOverride('_method'));

// Middleware xử lý body trong form để gửi lên Database 
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine 
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', './layouts/full-width');

app.get('/register', (req, res) => {
	res.render('register', {title: 'Register', layout: './layouts/login'})
})

app.get('/login', (req, res) => {
	res.render('login', {title: 'Login', layout: './layouts/login'})
})
app.get('/404', (req, res) => {
	res.render('error', {title: '404 || Not found', layout: './layouts/error-page'})
})
app.get('/read-book', (req, res) => {
	res.render('read-book', {title: 'Read book || FM Book Shop'})
})
app.use(routes)
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
	next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});


// Route init
//route(app);

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});

