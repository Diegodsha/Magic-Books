import React from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

const Book = ({ book, removeBook }) => (
  <tr>
    <th scope="row">{book.id}</th>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button onClick={() => removeBook(book)} type="button" className="btn btn-sm btn-danger">
        <FaTrashAlt className="text-white trash" />
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
