const httpStatus = require('http-status');
const catchAsync = require('../../util/catchAsync');
const {
	bookService
} = require('../services');

// render list book admin 
const listBook = catchAsync(async (req, res) => {
	const books = await bookService.queryBooks();
	res.render('list-books', {
		books,
		title: 'List Book || FM Shop Book',
		layout: './layouts/admin'
	});
});

// Render user interface....... 
const indexBook = catchAsync(async (req, res) => {
	const books = await bookService.queryBooks();
	res.render('index', {
		books,
		title: 'FM Shop Book'
	});
});
const profileBook = catchAsync(async (req, res) => {
	const books = await bookService.queryBooks();
	res.render('profile', {
		books,
		title: 'Profile || FM Shop Book'
	});
});
const aboutBook = catchAsync(async (req, res) => {
	const books = await bookService.queryBooks();
	res.render('about', {
		books,
		title: 'About || FM Shop Book'
	});
});
const detailBook = catchAsync(async (req, res) => {
	const id = req.params.id;
	const book = await bookService.getBookById(id);
	res.render('book-detail', {
		book,
		title: 'Detail book|| FM Shop Book'
	});
});

var books = [];
const bookCart = catchAsync(async (req, res) => {
	const id = req.params.id;
	const book = await bookService.getBookById(id);
	if (!book) {
		res.redirect('/404')
	}
	const exist = books.findIndex((value) => value.id === book.id) > -1
	if (!exist) {
		books.push(book);
	}
	res.render('cart-page', {
		books,
		title: "Cart Page || FM Shop Book"
	})
})

// Render admin views and actions
const getBookCreate = catchAsync(async (req, res) => {
	res.render('create-book', {
		title: 'Create Book || FM Shop Book',
		layout: './layouts/admin'
	});
});

const createBookView = catchAsync(async (req, res) => {
	const book = req.body;
	await bookService.createBook(book);
	res.redirect('/admin-list-books');
});

const getBookUpdate = catchAsync(async (req, res) => {
	const id = req.params.id;
	const oneBook = await bookService.getBookById(id);
	res.render('update-book', {
		book: oneBook,
		title: 'Update Book || FM Shop Book',
		layout: './layouts/admin'
	});
});

const updateBookView = catchAsync(async (req, res) => {
	const id = req.params.id;
	await bookService.updateBookById(id, req.body);
	res.redirect('/admin-list-books');
});

const getBookDelete = catchAsync(async (req, res) => {
	const id = req.params.id;
	const oneBook = await bookService.getBookById(id);
	res.render('delete-book', {
		book: oneBook,
		title: 'Delete Book || FM Shop Book',
		layout: './layouts/admin'
	});
});
const deleteBookView = catchAsync(async (req, res) => {
	const id = req.params.id;
	await bookService.deleteBookById(id);
	res.redirect('/admin-list-books');
});

module.exports = {
	listBook,
	indexBook,
	profileBook,
	aboutBook,
	detailBook,
	bookCart,
	getBookCreate,
	createBookView,
	getBookUpdate,
	updateBookView,
	getBookDelete,
	deleteBookView
};
