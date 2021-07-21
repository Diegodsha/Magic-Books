import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import App from './Components/App';
import rootReducer from './Reducers/index';
import { idGenerator } from './Helpers/helpers';

const bookReducer = [
  {
    id: idGenerator(),
    title: 'Clean Code',
    category: 'Learning',
    author: 'Robert Cecil Martin',
    progress: 46,
  },
  {
    id: idGenerator(),
    title: 'The Shinning',
    category: 'Horror',
    author: 'Stephen King',
    progress: 17,
  },
  {
    id: idGenerator(),
    title: 'The Martian',
    category: 'Sci-Fi',
    author: 'Andy Weir',
    progress: 87,
  },
];

const intialState = { bookReducer };

const store = createStore(
  rootReducer,
  intialState,
  devToolsEnhancer(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
