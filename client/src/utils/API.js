import axios from 'axios';
export default {
  getGoogleBooks: function (search) {
    return axios.get(`/api/books/googlebook/${search}`).then(res => res.data.data.items)
  },

  saveBook: function (bookData) {
    return axios.post('/api/books', bookData);
  },

  getBookshelf: function () {
    return axios.get('/api/books')
  },

  deleteBook: function (id) {
    return axios.delete(`/api/books/${id}`)
  }
};