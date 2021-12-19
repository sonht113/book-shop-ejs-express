const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect('mongodb://localhost:27017/shop-express-ejs');
		console.log("Connect sucessfully!!!");
	} catch(error) {
		console.log("Connect fail!!!");
	}
};

module.exports = { connect };

