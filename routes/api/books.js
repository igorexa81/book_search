const axios = require('axios');
const router = require('express').Router();
const booksController = require('../../controllers/booksController');
// /api/books/
router.get('/googlebook/:searchTerm', function(req, res){

const DEFAULT_HPP = '15';

const PATH_BASE = 'https://www.googleapis.com/books/v1';
const PATH_SEARCH = '/volumes';
const PARAM_SEARCH = 'q=';
const PARAM_HPP = 'maxResults=';
const API_KEY = process.env.REACT_APPAPI_KEY;

axios.get(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${req.params.searchTerm}&${PARAM_HPP}${DEFAULT_HPP}&key=${API_KEY}`)
.then(response => res.json({data: response.data}))
.catch(err => res.json({err}));
});
// Matches with '/api/bookshelf'
router.route('/')
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with '/api/bookshelf/:id'
router.route('/:id')
  .delete(booksController.delete);

module.exports = router;


