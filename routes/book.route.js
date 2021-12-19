const express = require('express');
const { bookController } = require('../app/controllers');

const router = express.Router();

router.route('/admin-list-books').get(bookController.listBook);
router.route('/').get(bookController.indexBook);
router.route('/profile').get(bookController.profileBook);
router.route('/about').get(bookController.aboutBook);
router.route('/book-detail/:id').get(bookController.detailBook);
router.route('/cart-book/:id').get(bookController.bookCart);
router.route('/admin-list-books/create-book').get(bookController.getBookCreate).post(bookController.createBookView);
router.route('/admin-list-books/update-book/:id').get(bookController.getBookUpdate).post(bookController.updateBookView);
router.route('/admin-list-books/delete-book/:id').get(bookController.getBookDelete).post(bookController.deleteBookView);
module.exports = router;
