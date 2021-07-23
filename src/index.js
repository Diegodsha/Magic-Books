import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './Components/App';
import EditBook from './Container/EditBook';
import rootReducer from './Reducers/index';
import UpdateProg from './Container/UpdateProg';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/edit/:id" component={EditBook} />
        <Route path="/update/:id" component={UpdateProg} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
