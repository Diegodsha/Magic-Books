const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return [...action.books];
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.book.id);
    case 'UPDATE_BOOK': {
      const updatedState = state.map((book) => {
        const update = book.id === action.book.id ? { ...book, ...action.book } : book;
        return update;
      });
      return [...updatedState];
    }
    default:
      return state;
  }
};

export default bookReducer;
