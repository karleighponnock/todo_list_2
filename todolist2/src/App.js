import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
      this.setState({
        currentItem:{
          text: e.target.value,
          key: Date.now()
        }
      })
    }
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem
      if(newItem.text!==""){
        const newItems=[...this.state.items, newItems];
        this.setState({
          items:newItems,
          currentItem:{
            text:'',
            key:''
          }
        })
      }
    }
    
  render() {
    return (
      <div className="App">
        <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        </header>
        <ListItems items={this.state.items}></ListItems>
      </div>
    )
  }
}

export default App;
