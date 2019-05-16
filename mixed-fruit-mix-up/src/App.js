import React, { Component } from "react";
// import Nav from "./components/Nav";
import { Container, Row, Col } from "./components/Grid";
import FruitCard from "./components/FruitCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import fruits from "./fruits.json";


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
    clickedName: "",
    fruitClicked: false,
    fruits
  }

  // componentDidMount() {
  //   const shuffledFruits = shuffle(fruits);
  //   this.setState({
  //     fruits: shuffledFruits
  //   })
  // }

  
  componentDidMount = () => {

    
  }


  handleFruitClick = event => {
    console.log("fruit clicked")
    console.log(this.state.fruitClicked);
    console.log(this.state.clickedName);
    const name = event.target.name;
    console.log(name);

    if ( (this.state.fruitClicked === true) && (!this.state.clickedName.includes(name)) ) {
      
      const newScore = this.state.score + 1;
      const nameArr = [...this.state.clickedName];

      nameArr.push(name);

      if (newScore >= 12) {
        alert("Nice Job! You've crafted the perfect salad!");
  
        this.setState({
          score: 0,
          clickedName: "",
          fruitClicked: false,
          fruits: shuffle(fruits)
        })
      }

      this.setState({
        clickedName: nameArr,
        score: newScore,
        fruits: shuffle(fruits)
      })

    } else if ( (this.state.fruitClicked === true) && (this.state.clickedName.includes(name)) ) {
      
      alert("You added that fruit already!")
      
      this.setState({
        score: 0,
        clickedName: "",
        fruitClicked: false,
        fruits: shuffle(fruits)

      })

    } else {

      this.setState({
        clickedName: [name],
        fruitClicked: true,
        fruits: shuffle(fruits)

      })
    }

  }

  render () {
    return (
    <Wrapper>
      <Row>
        <Col size="md-4">
          Score: {this.state.score}
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
