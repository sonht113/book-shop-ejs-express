const express = require('express');
const { userController } = require('../app/controllers');

const router = express.Router();

router.route('/admin-list-users').get(userController.listUser);
router.route('/register').post(userController.createUser);

module.exports = router;

