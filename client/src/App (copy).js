import React from 'react'
import {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Menu from './components/Menu.js';
import Order from './components/Order.js';

//import logo from './logo.svg';
import './App.css';

import 'typeface-roboto';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

class App extends Component {
  //fetch("https://www.neckch.in/sbistro/menu.json")
  //  .then(res => res.json())
  //  .then(response => this.setState(response));
  state = {
    menu: {} // {}
  }

  componentDidMount() {
    axios.get('https://www.neckch.in/sbistro/menu.json')
      .then(res => this.setState({todos: ...res.data}))
  }
  render() {
    console.log(this.state.menu)
    console.log(typeof(this.state.menu))
    return (
      <Router>
        <div className="App">
          <Menu menu={this.state.menu}/>
          <Order/>
        </div>
      </Router>
    );
  }
}

export default App;
