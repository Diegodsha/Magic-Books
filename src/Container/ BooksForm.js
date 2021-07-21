/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAction } from '../Actions/index';
import { idGenerator, randNum } from '../Helpers/helpers';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BookForm = () => {
  const dispatch = useDispatch();
  const [Book, setBook] = useState({ title: '', category: '' });

  const handleChange = (e) => {
    let title = '';
    let category = '';
    if (e.target.id === 'bookTitle') {
      title = e.target.value;
      setBook((state) => ({ ...state, title }));
    }
    if (e.target.id === 'bookCategory') {
      category = e.target.value;
      setBook((state) => ({ ...state, category }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Book.title === '') {
      const alert = document.querySelector('.alert');
      if (alert) {
        alert.classList.add('show');
      }
      return;
    }

    dispatch(createAction({ ...Book, id: idGenerator(), progress: randNum() }));
    setBook((state) => ({ ...state, title: '', category: '' }));
  };

  return (
    <form onSubmit={handleSubmit} className="col-12">
      <div className="mb-3">
        <label htmlFor="bookTitle" className="form-label">
          ADD NEW BOOK
        </label>
        <input
          type="text"
          className="form-control"
          id="bookTitle"
          value={Book.title}
          placeholder="Book title"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <select
          onChange={handleChange}
          id="bookCategory"
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue>Select category</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Add book
      </button>
    </form>
  );
};

export default BookForm;
export { categories };
