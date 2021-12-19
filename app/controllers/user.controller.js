const httpStatus = require('http-status');
const catchAsync = require('../../util/catchAsync');
const { userService } = require('../services');


const listUser = catchAsync(async (req, res) => {
	const users = await userService.queryUsers();
	res.render('list-users', {
		users, title: 'List User || FM Shop Book', layout: './layouts/admin'
	});
});
const createUser = catchAsync(async (req, res) => {
	const user = req.body;
	await userService.createUser(user);
	res.redirect('/login');
})

module.exports = {
	listUser,
	createUser
};
