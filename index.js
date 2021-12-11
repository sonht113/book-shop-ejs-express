const path = require('path');
const express = require('express');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
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
// app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine 
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', './layouts/full-width');

app.get('/', (req, res) => {
	res.render('index', {title: 'FM Book Shop'})
})

app.get('/profile', (req, res) => {
	res.render('profile', {title: 'Profile || FM Book Shop'})
})
app.get('/about', (req, res) => {
	res.render('about', {title: 'About || FM Book Shop'})
})

// Route init
//route(app);

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});

