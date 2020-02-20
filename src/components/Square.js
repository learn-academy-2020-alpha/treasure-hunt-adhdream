import React, { Component } from 'react';
class Square extends Component {

handleClick = () => {
    this.props.handleLocation(this.props.value)
}

  render() {


    return (
     <div id="square" onClick = {this.handleClick}>
        {this.props.value}
      </div>
    );
  }
}


export default Square
