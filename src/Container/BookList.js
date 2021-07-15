import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const BookList = ({ books }) => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <th scope="row">{book.id}</th>
            <td>{book.title}</td>
            <td>{book.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.array,
};

BookList.defaultProps = {
  books: [
    {
      id: 1,
      title: 'Book title',
      category: 'Book Category',
    },
  ],
};

// const mapStateToProps = (state) => ({ books: state.books });
// const mapDispatchToProps = (dispatch) => {
//   return {
//     submitNewBook: (book) => {
//       dispatch(addBook(book));
//     },
//   };
// };

export default BookList;
