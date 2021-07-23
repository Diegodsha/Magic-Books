/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateBook } from '../Actions/index';
import { StyledForm } from '../StyledComponents/styles';
// import { categories } from './ BooksForm';

// eslint-disable-next-line react/prop-types
const UpdateProg = ({ match }) => {
  const { id } = match.params;
  const books = useSelector((state) => state.bookReducer);
  const bookToUpdate = books.filter((book) => book.id === Number(id));
  const dispatch = useDispatch();
  const [Book, setBook] = useState({
    progress: bookToUpdate[0].progress,
    chapter: bookToUpdate[0].chapter,
  });

  const handleChange = (e) => {
    let progress = '';
    let chapter = '';
    if (e.target.id === 'bookProgress') {
      progress = e.target.value;
      console.log(progress);
      setBook((state) => ({ ...state, progress }));
    }
    if (e.target.id === 'bookChapter') {
      chapter = e.target.value;
      setBook((state) => ({ ...state, chapter }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Book.progress === '') {
      alert('You forgot to update your progress');
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
        <div className=" add-book">UPDATE PROGRESS</div>
        <div className="col-5 mb-3">
          <input
            type="number"
            min="0"
            max="100"
            className="form-control"
            id="bookProgress"
            value={Book.title}
            placeholder="Book progress"
            required
            onChange={handleChange}
          />
          <input
            type="number"
            className="form-control"
            id="bookChapter"
            value={Book.author}
            placeholder="Book chapter"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary col-3">
          Update Progress
        </button>
      </StyledForm>
      <button type="button">
        <Link to="/">Home</Link>
      </button>
    </>
  );
};

export default UpdateProg;
