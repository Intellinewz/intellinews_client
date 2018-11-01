import React, { Component } from 'react';
import logo from '../../logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>Intellinewz</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}