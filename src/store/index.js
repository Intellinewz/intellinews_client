import { createStore, combineReducers } from 'redux';

import toneReducer from './reducers/tones.js';

let reducers = combineReducers({
  tones: toneReducer,
});

export default () => createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());