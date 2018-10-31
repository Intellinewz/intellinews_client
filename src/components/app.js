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
    let url = `http://localhost:6543/api/v1/feed/`;

    superagent.get(url)
      // .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJhZG1pbiJdLCJ1c2VyTmFtZSI6ImJlbm55Ym95MTIzNDU2QGdtYWlsLmNvbSIsInN1YiI6ImJlbm55Ym95MTIzNDU2QGdtYWlsLmNvbSIsImlhdCI6MTU0MDk1NDE4NH0.6zkAEbl0oKAE-fFGHL4BQ7wYioepk81qhiNsCQVgjRJx4zsNBBjRG2MOk6PWvtc9vNiBn6IWLKYEOA_JMSVNrA')
      .then(results => {
        console.log(results);
        this.setState({hasError: false});
        let topics = results.body.data.children;
        this.setState(Object.assign(...this.state, {topics}));
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <main>
        <div id="logo"><FontAwesomeIcon icon={['fab', 'reddit']} /></div>
        <h1>Intellinewz</h1>
        <SearchForm searchClass={this.state.hasError ? 'error' : 'success'} redditSearch={this.handleSubmit} />
        <ul>
          <SearchResultList searchResults={this.state.topics}/>
        </ul>
      </main>
    );
  }
}