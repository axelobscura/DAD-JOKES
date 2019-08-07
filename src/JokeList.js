import React, { Component } from 'react';
import axios from 'axios';

class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  static defaultProps = {
    numJokesToGet: 10
  }

  async componentDidMount(){
    let res = await axios.get("https://icanhazdadjoke.com/", {
      headers: {Accept: "application/json"}
    });
    console.log(res.data.joke);
  }

  render() { 
    return (
      <div>
        <h1>DAD JOKES</h1>
      </div>
    );
  }
}
 
export default JokeList;