import React, { Component } from 'react';
import { connect } from 'react-redux';

// DISPATCHERS
import * as toneActions from '../../store/actions/tones.js';

class Feed extends Component {

  toneClick = e => {
    e.preventDefault();
    let selectedTone = e.target.dataset.tone;
    if (!this.props.tones.includes(selectedTone)) { this.props.addTone(selectedTone); }
  }

  retrieveFeed = () => {
    // let tones = this.props.tones;

  }

  render() {
    //detect joy, fear, sadness, anger, analytical, confident and tentative tones
    let tones = ['joy', 'fear', 'sadness', 'anger', 'analytical', 'confident', 'tentative'];
    return (
      <section className="tone-links">
        {
          tones.map(tone =>
            <a key={tone} className={`tone ${tone}`} data-tone={tone} onClick={this.toneClick}>{tone}</a>
          )
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  tones: state.tones,
});

const mapDispatchToProps = dispatch => ({
  addTone: payload => dispatch(toneActions.addTone(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);