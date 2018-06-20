'use strict';

import React from 'react';
import superagent from 'superagent';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import SearchForm from './reddit/searchform.js';
import SearchResultList from './reddit/searchresultlist.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      hasError: false,
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
        this.setState({hasError: false});
        let topics = results.body.data.children;
        this.setState(Object.assign(...this.state, {topics}));
      })
      .catch(err => this.setState({hasError: true}));
  }

  render() {
    return (
      <main>
        <div id="logo"><FontAwesomeIcon icon={['fab', 'reddit']} /></div>
        <h1>Reddit Search</h1>
        <SearchForm searchClass={this.state.hasError ? 'error' : 'success'} redditSearch={this.handleSubmit} />
        <ul>
          <SearchResultList searchResults={this.state.topics}/>
        </ul>
      </main>
    );
  }
}