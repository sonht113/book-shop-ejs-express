const Joi = require('joi');

const createBook = {
	body: Joi.object().keys({
		nameBook: Joi.string().required(),
		imageBook: Joi.string().required(),
		author: Joi.string().required(),
		description: Joi.string().required(),
		price: Joi.number().required(),
		count: Joi.number().required(),
		role: Joi.string().required().valid('user', 'admin'),
	}),
};

const getBooks = {
	query: Joi.object().keys({
		nameBook: Joi.string(),
		imageBook: Joi.string(),
		author: Joi.string(),
		description: Joi.string(),
		role: Joi.string(),
		sortBy: Joi.string(),
		price: Joi.number().integer(),
		count: Joi.number().integer(),
	}),
};

const getBook = {
	params: Joi.object().keys({
		bookId: Joi.string().custom(objectId),
	}),
};

const updateBook = {
	params: Joi.object().keys({
		bookId: Joi.required().custom(objectId),
	}),
	body: Joi.object()
	.keys({
		nameBook: Joi.string(),
		imageBook: Joi.string(),
		author: Joi.string(),
		description: Joi.string(),
		price: Joi.number(),
		count: Joi.number(),
	})
	.min(1),
};

const deleteBook = {
	params: Joi.object().keys({
		bookId: Joi.string().custom(objectId),
	}),
};

module.exports = {
	createBook,
	getBooks,
	getBook,
	updateBook,
	deleteBook
};
