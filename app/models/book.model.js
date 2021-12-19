const mongoose = require('mongoose');
// const { toJSON, paginate } = require('./plugins');

const bookSchema = mongoose.Schema(
	{
		nameBook: {
			type: String,
			trim: true,
			required: true,
		},
		imageBook: {
			type: String,
			trim: true,
			required: true
		},
		author: {
			type: String,
			trim: true,
			required: true
		},
		description: {
			type: String,
			trim: true,
			required: true
		},
		price: {
			type: Number,
			trim: true,
			min: 0,
			required: true
		},
		count: {
			type: Number,
			trim: true,
			min: 0,
			required: true
		}
	},
	{
		timestamps: true,
	}
);

// add plugin that converts mongoose to json
// bookSchema.plugin(toJSON);
// bookSchema.plugin(paginate);

/**
 * @typedef Book
 */
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
