import React, {Component} from 'react';

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
          <span>{this.props.votes}</span>
          <i class="lni-angle-double-down" onClick={this.props.downvote}></i>
        </div>
        <div className="Joke-text">{this.props.text}</div>
      </div>
    );
  }
}
 
export default Joke;