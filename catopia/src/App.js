// import axios from 'axios';
import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Show from './components/Show';
import New from './components/New';
import Edit from './components/Edit';

let cats = [
  {
    name: 'Gabby',
    type: 'Domestic shorthair- black kitty',
    img: 'https://i.imgur.com/POh2l9a.jpg',
    personality: 'Super sweet, with a wild side!'
  },
  {
    name: 'Chewy',
    type: 'Tabby',
    img: 'https://i.imgur.com/wQyAbf1.jpg',
    personality: 'Lovable shithead.'
  },
  {
    name: 'Simba',
    type: 'Ocicat',
    img: 'https://i.imgur.com/tbg9Pqz.jpg',
    personality: 'Fiesty! Very independent'
  },
  {
    name: 'Luna',
    type: 'Burmese',
    img: 'https://i.imgur.com/mvoACHa.jpg',
    personality: 'She loves the moon.'
  },
  {
    name: 'Flashlight',
    type: 'Tuxedo',
    img: 'https://i.imgur.com/W6QRvBY.jpeg',
    personality: 'Low key, mysterious, but also loves the lime light.'
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: cats,
      selectedCat:''
    };
  }

  setCat = cat => {
    this.setState({ selectedCat: cat })
  }

  handleSubmit = evt => {
    evt.preventDefault(); 
  }

  handleChange = evt => {
    console.log(evt.target.id, evt.target.value);
    this.setState({ [evt.target.id]: evt.target.value });
  }

  handleDelete = () => {
    // this.setState((prevState) => ({
    //   cats: prevState.cats.filter(cat => cat.id !== id)
    // }))
  }
  // componentDidMount() {
  //   const catsUrl = 'https://localhost:4000/cats';

  //   axios
  //     .get(catsUrl)
  //     .then(response => response.json())
  //     .then(response => {
  //       console.log(response);
  //       this.setState({ cats: response });
  //     });
  // }

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
              render={() => <Home cats={this.state.cats} setCat={this.setCat}/>}
            />
            <Route exact path='/:name' render={() =>{
              return(
                <Show selectedCat={this.state.selectedCat} />
              )
            }}/>
            <Route exact path='/:name/edit' render={() => {
              return(
                <Edit selectedCat={this.state.selectedCat} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleDelete={this.handleDelete}/>
              )
            }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
