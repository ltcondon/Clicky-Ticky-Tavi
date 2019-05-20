import React, { Component } from "react";
import "./style.css";
// import { setInterval } from "timers";

class Scoreboard extends Component {

    state = {
        time: 30,
        highScore: 0,
        highTime: 0
    }

    // componentDidMount = () => {
    //     this.setState({
    //         score: this.props.score,
    //     })
    // }

    // handleTimer = () => {
    //     setInterval
    // }
  
    render() {

        let time = <h1>Time: {this.state.time}</h1>
        let score = <h1>Score: {this.props.score}</h1>

        return (
          <div>
            {time}
            {score}
          </div>
        )

    }
    
}

export default Scoreboard;