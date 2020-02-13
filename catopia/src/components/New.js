import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {
      _id:'',
      name: '',
      type: '',
      img: '',
      personality:''
      },
      isNew: false
    };
    // this.handleChange = this.handleChange.bind(this);
    // console.log(this.handleChange);
    // this.addCat = this.addCat.bind(this);
    // console.log(this.addCat);
  }

  handleChange = (evt) => {
    const updatedField = {
      [evt.target.id]: evt.target.value
    }
    const newCat = Object.assign(this.state.cat, updatedField)
    this.setState({ cat: newCat })
  }

  handleAdd(evt) {
    evt.preventDefault();
    const addedCatUrl = `http://localhost:4000/cats`;
    let newCat = {
      name: this.state.name,
      type: this.state.type,
      img
    };

    fetch(addedCatUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        // [evt.target.id]: evt.target.value,
        // [evt.target.id]: evt.target.value,
        // [evt.target.id]: evt.target.value,
        // [evt.target.id]: evt.target.value
      })
    })
      .then(
        this.props.history.push({
          pathname: '/',
          state:
            ({ added: this.props.selectedCat._id },
            { added: this.props.selectedCat.name })
        })
      )
      .then(function refreshPage() {
        window.location.reload(false);
      })
      .catch(console.error);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAdd}>
          Name:<input onChange={this.props.handleChange} type="text" id="name" ></input>
          Type:
          <input onChange={this.props.handleChange} type="text" id="type"></input>
          Img:
          <input onChange={this.props.handleChange} type="text" id="img"></input>
          Personality:
          <input onChange={this.props.handleChange} type="text" id="personality"></input>
          <button type="submit">Add Cat</button>
        </form>
      </div>
    );
  }
}

export default withRouter(New);
