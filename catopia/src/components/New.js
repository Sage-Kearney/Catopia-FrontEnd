import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   id: null,
      //   name: '',
      //   type: '',
      //   personality: ''
      //   //   cat: {},
      //   //   cats: []
      isNew: false
    };
    // this.handleChange = this.handleChange.bind(this);
    // console.log(this.handleChange);
    // this.addCat = this.addCat.bind(this);
    // console.log(this.addCat);
  }

  handleAdd() {
    const addedCatUrl = `http://localhost:4000/cats`;

    fetch(addedCatUrl, {
      method: 'POST'
    })
      .then(
        this.props.history.push({
          pathname: '/',
          state: { added: this.props.selectedCat._id }
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
        <form onSubmit={this.props.handleSubmit}>
          Name:<input onChange={this.props.handleChange} type="text"></input>
          Type:
          <input onChange={this.props.handleChange} type="text"></input>
          Img:
          <input onChange={this.props.handleChange} type="text"></input>
          Personality:
          <input onChange={this.props.handleChange} type="text"></input>
          <button type="submit" onClick={() => this.handleAdd()}>
            Add Cat
          </button>
        </form>
      </div>
    );
  }
}

export default New;
