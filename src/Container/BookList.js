import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from '../Components/Book';
import { filterAction, removeBook, fetchBooks } from '../Actions/index';
import CategoryFilter from '../Components/CategoryFilter';

// eslint-disable-next-line react/prop-types
const BookList = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };
  const filter = useSelector((state) => state.filterReducer);
  const handleFilterChange = (e) => {
    dispatch(filterAction(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="container-fluid p-2 px-md-5 py-2 py-md-4">
      <CategoryFilter
        style={{ width: '15%' }}
        handleFilterChange={handleFilterChange}
      />
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
