import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BookCol } from '../StyledComponents/styles';
// import { randNum } from '../Helpers/helpers';

const Book = ({ book, removeBook }) => (
  <BookCol className="col-12 my-2">
    <div className="row justify-content-between align-items-center">
      <div className="col-12 col-md-4">
        <div className="d-flex flex-column align-items-center align-items-md-start">
          <span className="book-category">{book.category}</span>
          <span className="book-title">{book.title}</span>
          <span className="book-author edit-book mb-2">
            {book.author ?? 'Author'}
          </span>
        </div>
        <div className="d-flex justify-content-center justify-content-md-start">
          <span className="comments edit-book pe-3"><a className="text-decoration-none" href="#Comments">Comments</a></span>
          <span>
            <button
              className="remove edit-book px-3"
              onClick={() => removeBook(book)}
              type="button"
            >
              Remove
            </button>
          </span>
          <span className="edit edit-book ps-3"><a className="text-decoration-none" href="#Edit">Edit</a></span>
        </div>
      </div>
      <div className="col-12 col-md-7 content">
        <div className="row m-0 p-0 w-100">
          <div className="percentage d-flex align-items-center col-12 col-lg-7 justify-content-center my-4 my-md-0">
            <span className="prog-svg">
              <CircularProgressbar
                value={book.progress}
                text={`${book.progress}%`}
              />
            </span>
            <div className="d-flex flex-column ">
              <span className="read-percentage">
                {book.progress}
                %
              </span>
              <span className="completed ">Completed</span>
            </div>
          </div>
          <span className="divider align-self-center p-0 d-none d-lg-block" />
          <div className="d-flex flex-column justify-content-center col-12 col-lg-4 align-items-center align-items-lg-start">
            <span className="current-chapter">CURRENT CHAPTER</span>
            <span className="chapter">Chapter 15</span>
            <button className="update-btn" type="button">
              UPDATE PROGRESS
            </button>
          </div>
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
    progress: PropTypes.number.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
