import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from '../reducer';

const middleware = [reduxThunk];

export default () => createStore(
  reducer,
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  ),
);