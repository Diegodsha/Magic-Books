import { useDispatch, useSelector } from 'react-redux';
import Book from '../Components/Book';
import { removeAction } from '../Actions/index';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch(removeAction(book));
  };

  return (
    <div className="col-8 mt-4">
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book key={book.id} book={book} removeBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
