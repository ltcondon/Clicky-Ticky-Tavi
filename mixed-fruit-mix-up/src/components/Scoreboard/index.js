import React, { Component } from "react";
import "./style.css";

class Scoreboard extends Component {


    render() {
      return(
        <div>
          <h2>Time: {this.props.time}</h2>
          <h2>Score: {this.props.score}</h2>
        </div>
      );
    }
    
}

export default Scoreboard;