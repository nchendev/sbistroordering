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
    menu: {
      Appetizer: [
        {
          spicy: 0,
          english: 'Egg Roll',
          chinese: '蛋卷',
          price: '2.10',
          sizes: '1'
        },
        {
          spicy: 1,
          english: 'Spring Roll',
          chinese: '春卷',
          price: '4.00',
          sizes: '1'
        }
      ],
      Soup: [
        {
          spicy: 1,
          english: 'Hot and Sour Soup',
          chinese: 'lazy',
          price: '2.10',
          sizes:'1'
        }
      ]
    }
  }
  render() {
    console.log(this.state.menu)
    console.log(typeof(this.state.menu))
    return (
      <div className="App">
        <Menu menu={this.state.menu}/>
        <Order/>
      </div>
    );
  }
}

export default App;
