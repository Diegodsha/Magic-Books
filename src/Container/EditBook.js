/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateBook } from '../Actions/index';
import { StyledForm } from '../StyledComponents/styles';
import { categories } from './ BooksForm';

// eslint-disable-next-line react/prop-types
const EditBook = ({ match }) => {
  const { id } = match.params;
  const books = useSelector((state) => state.bookReducer);
  const bookToUpdate = books.filter((book) => book.id === Number(id));
  const dispatch = useDispatch();
  const [Book, setBook] = useState({
    title: bookToUpdate[0].title,
    category: bookToUpdate[0].category,
    author: bookToUpdate[0].author ?? '',
  });

  const handleChange = (e) => {
    let title = '';
    let category = '';
    let author = '';
    if (e.target.id === 'bookTitle' && e.target.value !== '') {
      title = e.target.value;
      setBook((state) => ({ ...state, title }));
    }
    if (e.target.id === 'bookCategory' && e.target.value !== '') {
      category = e.target.value;
      setBook((state) => ({ ...state, category }));
    }
    if (e.target.id === 'bookAuthor' && e.target.value !== '') {
      author = e.target.value;
      setBook((state) => ({ ...state, author }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Book.author === '') {
      return;
    }
    dispatch(updateBook(bookToUpdate[0].id, Book));
    alert('Book Updated');
  };

  return (
    <>
      <div
        className="divider-2"
        style={{
          width: '91%',
          height: '0.125rem',
          margin: '2.5rem 0.063rem 1.813rem 0,',
          border: 'solid 1px #e8e8e8',
        }}
      />
      <StyledForm
        onSubmit={handleSubmit}
        className="row p-2 px-md-5 py-2 py-md-4"
      >
        <div className=" add-book">EDIT BOOK</div>
        <div className="col-12 col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            id="bookTitle"
            value={Book.title}
            placeholder="Book title"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control mt-3"
            id="bookAuthor"
            value={Book.author}
            placeholder="Book Author"
            required
            onChange={handleChange}
          />
        </div>
        <div className=" col-12 col-md-6 mb-3">
          <select
            onChange={handleChange}
            id="bookCategory"
            className="form-select"
            aria-label="Default select example"
          >
            <option defaultValue>{Book.category}</option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary col-5 m-auto">
          Update book
        </button>
        <Link to="/" className="text-white text-decoration-none col-5 m-auto">
          <button type="button" className="btn btn-primary w-100">
            Home
          </button>
        </Link>
      </StyledForm>
    </>
  );
};

export default EditBook;
