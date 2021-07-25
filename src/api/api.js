import axios from 'axios';

// const LOCAL_API_URL = 'http://localhost:3001/api/v1/books';
const API_URL = 'https://magic-book-api.herokuapp.com/api/v1/books';

const getBooks = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const createBook = async (book) => {
  const res = await axios.post(API_URL, book);
  return res.data;
};

const deleteBook = async (book) => {
  const res = await axios.delete(`${API_URL}/${book.id}`);
  return res;
};

const editBook = async (id, update) => {
  const res = await axios.put(`${API_URL}/${id}`, update);
  return res;
};

export {
  API_URL,
  getBooks,
  createBook,
  editBook,
  deleteBook,
};
