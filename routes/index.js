const express = require('express');

const bookRoute = require('./book.route');
const userRoute = require('./user.route');

const router = express.Router();

const defaultRoutes = [
	{
		path: '/',
		route: bookRoute,
	},
	{
		path: '/',
		route: userRoute
	}
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

module.exports = router;
