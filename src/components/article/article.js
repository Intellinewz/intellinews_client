import React from 'react';

// STYLESHEET
import './article.scss';

export default class Article extends React.Component {

  formatTime = date => {
    /* IF WE WANT TO FORMAT DATE <Saturday / November 3, 2018 5:29 am> then use Lines 11-22 */

    // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // let day = days[date.getDay()];
    // let dateNumber = date.getDate();
    // let month = months[date.getMonth()];
    // let year = date.getFullYear();
    // let hour = (date.getHours() % 12) === 0 ? 12 : date.getHours() % 12;
    // let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    // let amOrPM = date.getHours() > 12 ? 'pm' : 'am';

    // return `${day} / ${month} ${dateNumber}, ${year} ${hour}:${minutes} ${amOrPM}`;

    let currentTime = new Date();
    let minsAgo = Math.floor((currentTime.getTime() - date.getTime()) / 1000 / 60);
    let hoursAgo = Math.floor((currentTime.getTime() - date.getTime()) / 1000 / 60 / 60);
    let daysAgo = Math.floor((currentTime.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);

    return minsAgo < 60 
      ? minsAgo === 1 ? '1 minute ago' : `${minsAgo} minutes ago` 
      : hoursAgo < 24 
        ?  hoursAgo === 1 ? '1 hour ago' : `${hoursAgo} hours ago`
        : daysAgo === 1 ? '1 day ago' : `${daysAgo} days ago`;
  }

  render() {
    let article = this.props.article;
    let time = this.formatTime(new Date(article.date_published));
    let source = article.source.replace('.com', '');
    let articleClass = `feed-article ${article.dom_tone.toLowerCase()}`;
    let domToneClass = `dom-tone ${article.dom_tone.toLowerCase()}`;
    return (
      <article className={articleClass} key={article.id}>
        <img src={article.image} />
        <h2><a rel="noopener noreferrer" target="_blank" href={article.url}>{article.title}</a></h2>
        <p><span className={domToneClass}>{article.dom_tone.toLowerCase()}</span></p>
        <p><span className="article-src">{source}</span> - <span className="article-date">{time}</span></p>
        <p>{article.description}</p>
      </article>
    );
  }
}