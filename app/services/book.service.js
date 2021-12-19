const httpStatus = require('http-status');
const { Book } = require('../models');
const ApiError = require('../../util/ApiError');

/**
 * Create a book
 * @param {Object} bookBody
 * @returns {Promise<Book>}
 */
const createBook = async (bookBody) => {
	return Book.create(bookBody);
};

/**
 * Query for books
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryBooks = async () => {
	const books = await Book.find();
	return books;
};

/**
 * Get book by id
 * @param {ObjectId} id
 * @returns {Promise<Book>}
 */
const getBookById = async (id) => {
	return Book.findById(id);
};

/**
 * Update book by id
 * @param {ObjectId} bookId
 * @param {Object} updateBody
 * @returns {Promise<Book>}
 */
const updateBookById = async (bookId, updateBody) => {
	const book = await getBookById(bookId);
	if (!book) {
		throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
	}
	Object.assign(book, updateBody);
	await book.save();
	return book;
};

/**
 * Delete book by id
 * @param {ObjectId} bookId
 * @returns {Promise<Book>}
 */
const deleteBookById = async (bookId) => {
	const book = await getBookById(bookId);
	if (!book) {
		throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
	}
	await book.remove();
	return book;
};

module.exports = {
	createBook,
	queryBooks,
	getBookById,
	updateBookById,
	deleteBookById
};
