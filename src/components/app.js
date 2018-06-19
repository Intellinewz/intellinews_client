'use strict';

import React from 'react';
import superagent from 'superagent';

import SearchForm from './reddit/searchform.js'; 

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topics: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchFormBoard = e.target.searchFormBoard.value.trim();
    let searchFormLimit = e.target.searchFormLimit.value;
    let url = `http://www.reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`;

    superagent.get(url)
      .then(results => {
        let topics = results.body.data.children;
        this.setState(Object.assign(...this.state, {topics}));
      })
      .catch(console.error);
  }

  render() {
    return (
      <main>
        <h1>Reddit Search</h1>
        <SearchForm redditSearch={this.handleSubmit} />
      </main>
    );
  }
}