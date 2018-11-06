import React from 'react';

export default class Article extends React.Component {
  render() {
    let article = this.props.article;
    return (
      <article key={article.title}>
        <h2>{article.title}</h2>
        <a href={article.url}>Src: {article.url}</a>
      </article>
    );
  }
}