'use strict';

import React from 'react';

export default class SearchResultList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.searchResults.map( (topic, i) => 
            <li key={i}>
              <a href={topic.data.url}>
                <h2>{topic.data.title}</h2>
                <p>{topic.data.ups}</p>
              </a>
            </li>
          )
        }
      </React.Fragment>
    );
  }
}