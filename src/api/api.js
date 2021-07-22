import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/books';

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

const editBook = (id, params) => axios.put(`${API_URL}/${id}`, params);

// eslint-disable-next-line object-curly-newline
export { API_URL, getBooks, createBook, editBook, deleteBook };
