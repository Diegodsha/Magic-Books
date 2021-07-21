import rootReducer from '../Reducers/index';

describe('reducers', () => {
  it('can add a book to the state', () => {
    const state = rootReducer(
      {
        bookReducer: [
          {
            id: 55,
            title: 'Clean Code',
            category: 'Learning',
            author: 'Robert Cecil Martin',
            progress: 55,
          },
          {
            id: 383,
            title: 'The Shinning',
            category: 'Horror',
            author: 'Stephen King',
            progress: 52,
          },
        ],
        filterReducer: 'All',
      },
      {
        type: 'CREATE_BOOK',
        book: {
          id: 473,
          title: 'The Martian',
          category: 'Sci-Fi',
          author: 'Andy Weir',
          progress: 66,
        },
      },
    );
    expect(state).toEqual({
      bookReducer: [
        {
          id: 55,
          title: 'Clean Code',
          category: 'Learning',
          author: 'Robert Cecil Martin',
          progress: 55,
        },
        {
          id: 383,
          title: 'The Shinning',
          category: 'Horror',
          author: 'Stephen King',
          progress: 52,
        },
        {
          id: 473,
          title: 'The Martian',
          category: 'Sci-Fi',
          author: 'Andy Weir',
          progress: 66,
        },
      ],
      filterReducer: 'All',
    });
  });

  it('can remove a book from state', () => {
    const state = rootReducer(
      {
        bookReducer: [
          {
            id: 55,
            title: 'Clean Code',
            category: 'Learning',
            author: 'Robert Cecil Martin',
            progress: 55,
          },
          {
            id: 383,
            title: 'The Shinning',
            category: 'Horror',
            author: 'Stephen King',
            progress: 52,
          },
          {
            id: 473,
            title: 'The Martian',
            category: 'Sci-Fi',
            author: 'Andy Weir',
            progress: 66,
          },
        ],
        filterReducer: 'All',
      },
      {
        type: 'REMOVE_BOOK',
        book: {
          id: 473,
          title: 'The Martian',
          category: 'Sci-Fi',
          author: 'Andy Weir',
          progress: 66,
        },
      },
    );
    expect(state).toEqual({
      bookReducer: [
        {
          id: 55,
          title: 'Clean Code',
          category: 'Learning',
          author: 'Robert Cecil Martin',
          progress: 55,
        },
        {
          id: 383,
          title: 'The Shinning',
          category: 'Horror',
          author: 'Stephen King',
          progress: 52,
        },
      ],
      filterReducer: 'All',
    });
  });
});
