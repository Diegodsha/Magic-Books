/* eslint-disable no-alert */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateBook } from '../Actions/index';
import { StyledForm } from '../StyledComponents/styles';

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
    if (e.target.id === 'bookProgress' && e.target.id !== '') {
      progress = e.target.value;
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
        <div className="col-12 mb-3 p-0">
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
            className="form-control mt-3"
            id="bookChapter"
            value={Book.author}
            placeholder="Book chapter"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary col-5">
          Update Progress
        </button>
        <Link to="/" className="text-white text-decoration-none col-5">
          <button type="button" className="btn btn-primary w-100">
            Home
          </button>
        </Link>
      </StyledForm>
    </>
  );
};

UpdateProg.propTypes = {
  match: PropTypes.isRequired,
};

export default UpdateProg;
