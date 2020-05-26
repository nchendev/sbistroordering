import React from 'react'
import {Component} from 'react';
import Menu from './components/Menu.js';
import Order from './components/Order.js';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  //fetch("https://www.neckch.in/sbistro/menu.json")
  //  .then(res => res.json())
  //  .then(response => this.setState(response));
  state = {
    categories: {
      Appetizer: [
        {
          spicy: 0,
          english: 'Egg Roll',
          chinese: '蛋卷',
          price: '2.10'
        },
        {
          spicy: 1,
          english: 'Spring Roll',
          chinese: '春卷',
          price: '4.00'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Menu/>
        <Order/>
      </div>
    );
  }
}

export default App;
