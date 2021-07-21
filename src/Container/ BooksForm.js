/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAction } from '../Actions/index';
import { idGenerator, randNum } from '../Helpers/helpers';
import { StyledForm } from '../StyledComponents/styles';

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
    if (Book.category === '') {
      return;
    }

    dispatch(createAction({ ...Book, id: idGenerator(), progress: randNum() }));
    setBook((state) => ({ ...state, title: '', category: '' }));
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
        <div className=" add-book">ADD NEW BOOK</div>
        <div className="col-5 mb-3">
          <input
            type="text"
            className="form-control"
            id="bookTitle"
            value={Book.title}
            placeholder="Book title"
            required
            onChange={handleChange}
          />
        </div>
        <div className=" col-4 mb-3">
          <select
            onChange={handleChange}
            id="bookCategory"
            className="form-select"
            aria-label="Default select example"
          >
            <option defaultValue>Category</option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary col-3">
          Add book
        </button>
      </StyledForm>
    </>
  );
};

export default BookForm;
export { categories };
