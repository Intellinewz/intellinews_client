'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app.js';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <App />
      </React.Fragment>
    );
  }
}

ReactDom.render(<Main />, document.getElementById('root'));