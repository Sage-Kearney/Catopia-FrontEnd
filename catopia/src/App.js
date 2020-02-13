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
      cats: [],
      selectedCat: ''
    };
  }

  setCat = cat => {
    this.setState({ selectedCat: cat });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  handleChange = evt => {
    console.log(evt.target.id, evt.target.value);
    this.setState({ [evt.target.id]: evt.target.value });
  };

  handleDelete = () => {
    // this.setState((prevState) => ({
    //   cats: prevState.cats.filter(cat => cat.id !== id)
    // }))
  };

  componentDidMount() {
    const catsUrl = 'http://localhost:4000/cats';

    fetch(catsUrl)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ cats: response });
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
              render={() => (
                <Home cats={this.state.cats} setCat={this.setCat} />
              )}
            />
            <Route
              exact
              path="/:name"
              render={() => {
                return <Show selectedCat={this.state.selectedCat} />;
              }}
            />
            <Route
              exact
              path="/:name/edit"
              render={() => {
                return (
                  <Edit
                    selectedCat={this.state.selectedCat}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                  />
                );
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
