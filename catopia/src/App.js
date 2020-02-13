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

  // handleDelete(id) {
  //   const deletedCatUrl =``

  //   console.log(id);
  //   console.log(this.state.cats);
  //   const catsArray = this.state.cats.filter( cat => cat.id !== id );
  //   this.setState({ cats: catsArray });
  // };

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
                    // handleDelete={this.handleDelete}
                  />
                );
              }}
            />
            <Route
              exact
              path="/Add/Cat"
              render={() => {
                return (
                  <New
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                  />
                );
              }}
            />
            ;
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
