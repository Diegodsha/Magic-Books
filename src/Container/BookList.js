import { useDispatch, useSelector } from 'react-redux';
import Book from '../Components/Book';
import { filterAction, removeAction } from '../Actions/index';
import CategoryFilter from '../Components/CategoryFilter';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch(removeAction(book));
  };
  const filter = useSelector((state) => state.filterReducer);
  const handleFilterChange = (e) => {
    dispatch(filterAction(e.target.value));
  };

  return (
    <div className="col-8 mt-4">
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">
              <CategoryFilter handleFilterChange={handleFilterChange} />
            </th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {books
            .filter((book) => book.category === filter || filter === 'All')
            .map((book) => (
              <Book key={book.id} book={book} removeBook={handleRemoveBook} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
