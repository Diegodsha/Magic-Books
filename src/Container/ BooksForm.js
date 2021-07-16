/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BookForm = () => (
  <form className="col-8">
    <div className="mb-3">
      <label htmlFor="bookTitle" className="form-label">
        Book title
      </label>
      <input type="text" className="form-control" id="bookTitle" />
    </div>
    <div className="mb-3">
      <select className="form-select" aria-label="Default select example">
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

export default BookForm;
