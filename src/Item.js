import React, { Component } from 'react';

export default class Item extends Component {
  constructor() {
    super()
    this.state = {
      color: 'blue'
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor() {
    this.setState({
      color: 'green'
    })
  }

  render() {
    return (
      <div onClick={this.changeColor} style={{color: this.state.color}}>
        {this.props.item}
        <button onClick={() => {this.props.delete(this.props.i)}}>Delete</button>
      </div>
    );
  }
}