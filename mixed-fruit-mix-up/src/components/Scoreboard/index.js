import React, { Component } from "react";
import "./style.css";

class Scoreboard extends Component {


    render() {
      return(
        <div>
          <h2 className='time'>Time: <span>{this.props.time}</span></h2>
          <h2 className='score'>Score: <span>{this.props.score}</span></h2>
        </div>
      );
    }
    
}

export default Scoreboard;