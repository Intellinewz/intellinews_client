import { createStore, combineReducers } from 'redux';

import toneReducer from './reducers/tones.js';
import feedReducer from './reducers/feed.js';

let reducers = combineReducers({
  tones: toneReducer,
  feed: feedReducer,
});

export default () => createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());