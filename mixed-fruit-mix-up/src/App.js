import React, { Component } from "react";
import FruitCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import fruits from "./fruits.json";


shuffle = (array) => {
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

    if (this.state.score >= 12) {
      alert("Nice Job! You've crafted the perfect salad!");

      this.setState({
        score: 0,
        clickedName: "",
        fruitClicked: false,
        fruits
      })
    }
  }
  
  handleFruitClick = event => {

    const { name } = event.target;

    if ( (fruitClicked === true) && (this.state.clickedName === name) ) {
      
      const newScore = this.state.score + 1;
      
      this.setState({
        clickedName: "",
        score: newScore,
        fruitClicked: false
      })

    } else if ( (fruitClicked === true) && (!this.state.clickedName === name) ) {
      
      alert("Wrong fruit, boyyo!")
      
      this.setState({
        score: 0,
        clickedName: "",
        fruitClicked: false
      })

    } else {

      this.setState({
        clickedName: name,
        fruitClicked: true
      })
    }

  }
  


  render () {
    <Wrapper>
      <Title>
        {shuffle(this.state.fruits).map(fruit =>
          <FruitCard
            name={fruit.name}
            key={fruit.id}
            buttonAction={this.handleFruitClick}
            buttonType="btn btn-success mt-2"
            buttonText="Save Book"
          />
          )}
        
        />

      </Title>
    </Wrapper>
  }
}

export default App;
