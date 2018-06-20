'use strict';

import React from 'react';

export default class SearchFrom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <form className={this.props.searchClass} onSubmit={this.props.redditSearch}>
        <input id="searchFormBoard" type="text" placeholder="Search..."/>
        <input id="searchFormLimit" type="number" min="0" max="100"/>
        <input type="submit"/>
      </form>
    );
  }
}