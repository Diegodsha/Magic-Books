import BookForm from '../Container/ BooksForm';
import BookList from '../Container/BookList';

function App() {
  return (
    <div className="App justify-content-center row ">
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
