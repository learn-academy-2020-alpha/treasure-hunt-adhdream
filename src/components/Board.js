import React, { Component } from 'react';
import Square from './Square'
class Board extends Component {
    constructor(props) {
        super(props)
          this.state = { spaces: ["🐄", "🐄", "🐄", "🐄", "🐄", "🐄", "🐄", "🐄", "🐄"],
          display:["🐄", "🐄", "🐄", "🐄", "🐄", "🐄", "🐄", "🐄", "🐄"]}
    }
    handleLocation = (index) => {
         //change this
    }

    resetGame = () =>{
        let {spaces} = this.state
        spaces = ["🐄", "🐄", "🐄", "🐄", "🐄", "🐄", "🐄", "🐄", "🐄"]
        this.setState({display:spaces})
    }
//creating method to get our random treasure and bomb locations


    revealBomb = () =>{
        let { display } = this.state
        display[Math.floor(Math.random() * this.state.spaces.length)] = "💩"
        this.setState({display: display})
    }


  render() {
      let { spaces,answer } = this.state
      let randomTreasure = Math.floor(Math.random() * spaces.length)
      let randomBomb = Math.floor(Math.random() * spaces.length)
      while(randomTreasure === randomBomb){
              randomTreasure = Math.floor(Math.random() * spaces.length)
          }

      answer[randomBomb] = "💩"
      answer[randomTreasure] = "💨"

    let square = spaces.map((value, index) => {
        return (
        <Square
        handleLocation = {this.handleLocation}
        randomize = {this.randomize}
        index = { index }
        value = { value }
        /> )})



    return (
     <div className = "board">
        {square}

        <button onClick = {this.randomize}> Start Game</button>
        <button onClick = {this.resetGame}> Reset Game</button>
      </div>
    );
  }
}

export default Board
