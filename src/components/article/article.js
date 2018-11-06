import React from 'react';

export default class Article extends React.Component {

  formatTime = date => {
    console.log(...date);
  }

  render() {
    let article = this.props.article;
    // let time = this.formatTime(new Date(article.date_published));

    return (
      <article key={article.id}>
        <img src={article.image} />
        <h2>{article.title}</h2>
        <p>{article.date_published}</p>
        <p>{article.description}</p>
        <a rel="noopener noreferrer" target="_blank" href={article.url}>Src: {article.url}</a>
      </article>
    );
  }
}