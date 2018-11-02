import React, { Component } from 'react';
import { connect } from 'react-redux';

// API 
import {retrieveFeed} from '../../api/api.js';

// DISPATCHERS
import * as toneActions from '../../store/actions/tones.js';
import * as feedActions from '../../store/actions/feed.js';

class Feed extends Component {

  toneClick = e => {
    e.preventDefault();
    let selectedTone = e.target.dataset.tone;
    if (!this.props.tones.includes(selectedTone)) { 
      this.props.addTone(selectedTone);
      this.retrieveFeed([...this.props.tones, selectedTone]);
    }
    else { 
      this.props.deleteTone(selectedTone);
      let tones = this.props.tones.filter(tone => tone !== selectedTone);
      this.retrieveFeed(tones);
    }
  }

  retrieveFeed = async tones => {
    let feed = await retrieveFeed(tones);
    this.props.addToFeed(feed.feed);
  }

  render() {
    //detect joy, fear, sadness, anger, analytical, confident and tentative tones
    let tones = ['joy', 'fear', 'sadness', 'anger', 'analytical', 'confident', 'tentative'];
    return (
      <React.Fragment>
        <section className="tone-links">
          {
            tones.map(tone =>
              <a key={tone} className={`tone ${tone}`} data-tone={tone} onClick={this.toneClick}>{tone}</a>
            )
          }
        </section>
        <section className="feed">
          {
            this.props.feed && this.props.feed.length ?
              this.props.feed.map(article => 
                <article key={article.title}>
                  <h2>{article.title}</h2>
                </article>
              )
              :
              null
          }
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tones: state.tones,
  feed: state.feed,
});

const mapDispatchToProps = dispatch => ({
  addTone: payload => dispatch(toneActions.addTone(payload)),
  deleteTone: payload => dispatch(toneActions.deleteTone(payload)),
  addToFeed: payload => dispatch(feedActions.addToFeed(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);