import { useSelector } from 'react-redux';
import Book from '../Components/Book';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer);

  return (
    <div className="col-8 mt-4">
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
            <Book key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
