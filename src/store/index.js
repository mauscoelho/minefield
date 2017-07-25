import { compose, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducers from '../reducers';
import epics from '../epics';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware(epics);

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

export default store;
