import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './Components/App';
import rootReducer from './Reducers/index';
// import { idGenerator, randNum } from './Helpers/helpers';
// import { API_URL, getBooks } from './api/api';

// const bookReducer = [
//   {
//     id: idGenerator(),
//     title: 'Clean Code',
//     category: 'Learning',
//     author: 'Robert Cecil Martin',
//     chapter: 13,
//     progress: randNum(),
//   },
//   {
//     id: idGenerator(),
//     title: 'The Shinning',
//     category: 'Horror',
//     author: 'Stephen King',
//     chapter: 9,
//     progress: randNum(),
//   },
//   {
//     id: idGenerator(),
//     title: 'The Martian',
//     category: 'Sci-Fi',
//     author: 'Andy Weir',
//     chapter: 5,
//     progress: randNum(),
//   },
// ];

// const intialState = { bookReducer };

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
