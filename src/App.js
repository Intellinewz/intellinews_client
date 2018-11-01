import React, { Component } from 'react';

import { Provider } from 'react-redux';
import createStore from './store/index.js';
const store = createStore();

// COMPONENTS
import Header from './components/header/header.js';
import Feed from './components/feed/feed.js';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Feed />
        </div>
      </Provider>
    );
  }
}
