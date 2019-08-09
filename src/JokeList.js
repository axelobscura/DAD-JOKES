import React, { Component } from 'react';
import Joke from './Joke';
import './JokeList.css';
import uuid from 'uuid/v4';
import axios from 'axios';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  }
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    }
  }
  async componentDidMount(){
    let jokes = [];
    while(jokes.length < this.props.numJokesToGet){
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: {Accept: "application/json"}
      });
      jokes.push({id: uuid(), text: res.data.joke, votes: 0});
    };
    this.setState({
      jokes: jokes
    });
  }
  handleVote(id,delta){
    this.setState(
      st => ({
        jokes: st.jokes.map(j =>
          j.id === id ? {...j, votes: j.votes + delta} : j)
      })
    )
  }
  render() { 
    return (
      <div className='JokeList'>
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>DAD</span> JOKES
          </h1>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8935/5401c4ee-e703-4f89-9f52-ae174ef235e7.svg" alt=""/>
          <button className="JokeList-getmore">Get Jokes!</button>
        </div>
        
        <div className='JokeList-jokes'>
          {this.state.jokes.map(j => (
            <Joke 
              key={j.id} 
              votes={j.votes} 
              text={j.text} 
              upvote={() => this.handleVote(j.id, 1)} 
              downvote={() => this.handleVote(j.id, -1)}
              />
          ))}
        </div>
      </div>
    );
  }
}
 
export default JokeList;