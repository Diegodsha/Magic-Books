import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App';
import rootReducer from './Reducers/index';

const idGenerator = () => Math.floor(Math.random() * 500);

const bookReducer = [
  {
    id: idGenerator(),
    title: 'Clean Code',
    category: 'Learning',
  },
  {
    id: idGenerator(),
    title: 'The Shinning',
    category: 'Horror',
  },
  {
    id: idGenerator(),
    title: 'The Martian',
    category: 'Sci-Fi',
  },
];

const intialState = { bookReducer };

const store = createStore(rootReducer, intialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
