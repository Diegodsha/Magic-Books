// eslint-disable-next-line object-curly-newline
import { getBooks, createBook, deleteBook, editBook } from '../api/api';

export const fetchAction = (books) => ({
  type: 'FETCH_BOOKS',
  books,
});

export const createAction = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeAction = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

export const updateAction = (book) => ({
  type: 'UPDATE_BOOK',
  book,
});

export const filterAction = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

export const fetchBooks = () => async (dispatch) => {
  const books = await getBooks();
  dispatch(fetchAction(books));
};

export const saveBook = (Book) => async (dispatch) => {
  const newBook = await createBook(Book);
  dispatch(createAction(newBook));
};

export const removeBook = (Book) => async (dispatch) => {
  await deleteBook(Book);
  dispatch(removeAction(Book));
};

export const updateBook = (id, Book) => async (dispatch) => {
  await editBook(id, Book);
  dispatch(updateAction(Book));
};
