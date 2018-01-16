import React, { Component } from 'react';
import './App.css';
import Item from './Item';

class App extends Component {
    constructor() {
    super()
    this.state = {
      input: 'Duri',
      items: ['Apples', 'sddfsf', 'Crapes']
    }
    this.handleInput = this.handleInput.bind(this)
    this.add = this.add.bind(this)
    this.delete = this.delete.bind(this)
  }

  // we bind the method only when we have this. inside of it
  add() {
    this.setState({
      items: [...this.state.items, this.state.input]
    })
  }

  delete(itemIndex) {
    const newList = [...this.state.items]
    newList.splice(itemIndex , 1)
    this.setState({
      items: newList
    })
  }

  handleInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <input onChange={ this.handleInput } value={this.state.input} />
          <button onClick={this.add}>Add</button>
          {this.state.items.map( (item, i) => {
            return <Item i={i} delete={this.delete} item={item} />
          })}
          {/* <Item item={this.state.items[0]}/>
          <Item item={this.state.items[1]} />
          <Item item={this.state.items[2]} /> */}
        </div>
      </div>
    );
  }
}

export default App;
