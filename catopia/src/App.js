import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Show from './components/Show';
import New from './components/New';
import Edit from './components/Edit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    };
  }

  componentDidMount() {
    const catsUrl = 'https://localhost:3000/cats';

    fetch(catsUrl)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ cats: [response] });
      });
  }

  render() {
    console.log(this.state.cats);
    return (
      <div>
        <header className="app-header">
          <nav>
            <Link className="home-link" to="/">
              Catopia
            </Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home cats={this.state.cats} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
