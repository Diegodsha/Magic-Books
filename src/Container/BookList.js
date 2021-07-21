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
    <div className="container-fluid p-2 px-md-5 py-2 py-md-4">
      <CategoryFilter style={{ width: '15%' }} handleFilterChange={handleFilterChange} />
      <div className="row g-0">
        {books
          .filter((book) => book.category === filter || filter === 'All')
          .map((book) => (
            <Book key={book.id} book={book} removeBook={handleRemoveBook} />
          ))}
      </div>
    </div>
  );
};

export default BookList;
