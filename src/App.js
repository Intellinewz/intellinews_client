import React, { Component } from 'react';

import { Provider, connect } from 'react-redux';
import store from './store';

// DISPATCHERS
import * as toneActions from './store/actions/tones.js';

import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    //detect joy, fear, sadness, anger, analytical, confident and tentative tones
    let tones = ['joy', 'fear', 'sadness', 'anger', 'analytical', 'confident', 'tentative'];
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Intellinewz</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <section className="tone-links">
            {
              tones.map(tone => 
                <a key={tone} className={`tone ${tone}`} data-tone={tone}>{tone}</a>
              )
            }
          </section>
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  tones: state.tones,
});

const mapDispatchToProps = dispatch => ({
  addTone: payload => dispatch(toneActions.addTone(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
