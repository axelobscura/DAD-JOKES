import React, {Component} from 'react';
import './Joke.css';

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i class="lni-angle-double-up" onClick={this.props.upvote}></i>
          <span className="Joke-votes">{this.props.votes}</span>
          <i class="lni-angle-double-down" onClick={this.props.downvote}></i>
        </div>
        <div className="Joke-text">{this.props.text}</div>
        <div className="Joke-smiley">
          <i class="em em-rolling_on_the_floor_laughing"></i>
        </div>
      </div>
    );
  }
}
 
export default Joke;