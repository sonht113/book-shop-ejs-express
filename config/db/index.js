const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect('mongodb+srv://ngan-shop:n123@cluster0.6nwgq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
		console.log("Connect sucessfully!!!");
	} catch(error) {
		console.log("Connect fail!!!");
	}
};

module.exports = { connect };

