'use strict';

import React from 'react';
import ReactDom from 'react-dom';

// Font Awesome Stuff
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(brands);

import App from './components/app.js';

import './style/main.scss';

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