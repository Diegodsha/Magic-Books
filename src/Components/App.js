import BookForm from '../Container/ BooksForm';
import BookList from '../Container/BookList';
import Nav from './Nav';

function App() {
  return (
    <div className="App justify-content-center row ">
      <Nav />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
