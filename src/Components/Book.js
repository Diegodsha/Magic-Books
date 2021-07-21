import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BookCol } from '../StyledComponents/styles';

const Book = ({ book, removeBook }) => (
  <BookCol className="col-12 my-2">
    <div className="row justify-content-between align-items-center">
      <div className="col-12 col-md-4">
        <div className="d-flex flex-column">
          <span className="book-category">{book.category}</span>
          <span className="book-title">{book.title}</span>
          <span className="book-author edit-book mb-2">
            {book.author ?? 'Author'}
          </span>
        </div>
        <div>
          <span className="comments edit-book pe-3">Comments</span>
          <span>
            <button
              className="remove edit-book px-3"
              onClick={() => removeBook(book)}
              type="button"
            >
              Remove
            </button>
          </span>
          <span className="edit edit-book ps-3">Edit</span>
        </div>
      </div>
      <div className="col-12 col-md-7 content">
        <div className="percentage d-flex align-items-center">
          <CircularProgressbar className="prog-svg" value={5} text={`${5}%`} />
          <div className="d-flex flex-column ">
            <span className="read-percentage">0%</span>
            <span className="completed">Completed</span>
          </div>
        </div>
        <span className="divider align-self-center" />
        <div className="d-flex flex-column justify-content-center">
          <span className="current-chapter">CURRENT CHAPTER</span>
          <span className="chapter">Chapter 15</span>
          <button className="update-btn" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  </BookCol>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
