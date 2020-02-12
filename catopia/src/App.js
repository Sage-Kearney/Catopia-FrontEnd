import React, { Component } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Show from './components/Show';
import New from './components/New';
import Edit from './components/Edit';

class App extends Component () {
  constructor() {
    super();
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    const catsUrl = 'https://localhost:3000/cats'

    fetch(catUrl)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({ cats: response })
    });
  }

  render();
  return;
}

export default App;
