import React, { Component } from "react";
// import Nav from "./components/Nav";
import { Container, Row, Col } from "./components/Grid";
import FruitCard from "./components/FruitCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import fruits from "./fruits.json";
import Scoreboard from "./components/Scoreboard";


const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

class App extends Component {

  state = {
    score: 0,
    time: 30,
    clickedName: "",
    fruitClicked:'',
    fruits
  }

  timer() {
    this.setState({
      time: this.state.time - 1
    })

    if(this.state.fruitClicked === false) { 
      clearInterval(this.intervalId);
      this.setState({
        time: 30
      })
    }

    if (this.state.time < 1) {
      alert("Times up!")
        
        this.setState({
          score: 0,
          clickedName: "",
          fruitClicked: false,
          fruits: shuffle(fruits)
        })
    }
  }

  handleFruitClick = event => {
    const name = event.target.name;

    switch(this.state.clickedName.includes(name)) {
      case(true):
        alert("You added that fruit already!")
        
        this.setState({
          score: 0,
          clickedName: "",
          fruitClicked: false,
          fruits: shuffle(fruits)
        })
      break;

      default:
        const newScore = this.state.score + 1;
        const nameArr = [name, ...this.state.clickedName];

        if (newScore > 10) {
          alert("Nice Job! You've crafted the perfect salad!");
    
          this.setState({
            score: 0,
            clickedName: "",
            fruitClicked: false,
            fruits: shuffle(fruits)
          })
          
        }

        if (!this.state.fruitClicked) {
          this.intervalId = setInterval(this.timer.bind(this), 1000);

          this.setState({
            fruitClicked: true,
          })
        }

        this.setState({
          clickedName: nameArr,
          score: newScore,
          fruits: shuffle(fruits)
        })
      }

    console.log(`Score: ${this.state.score}  Fruits: ${this.state.clickedName || name}`);

    }

  render () {
    return (
    <Wrapper>
      <Row>
        <Col size="md-4">
          <Scoreboard score={this.state.score} time={this.state.time} />
        </Col>
      </Row>
      <Title>Fruit Salad Mix-Up | </Title>
        
        <Container>
          <Row>
            {this.state.fruits.map(fruit => (
              <Col size="md-3 sm-3">
               <FruitCard
            name={fruit.name}
            key={fruit.id}
            onClick={this.handleFruitClick}
            image={fruit.image}
          />
              </Col>
            ))}
          </Row>
        </Container>

        <br></br><br></br>
        
    </Wrapper>
    )
  }
}

export default App;
