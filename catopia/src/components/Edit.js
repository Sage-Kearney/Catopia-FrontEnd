import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleted: false
    };
  }

  // // to go in handleDelete
  // .then(this.props.history.push({ pathname: '/', state: { deleted: this.state.book._id } }))

  handleDelete() {
    const deletedCatUrl = `http://localhost:4000/cats/${this.props.selectedCat._id}`;

    fetch(deletedCatUrl, {
      method: 'DELETE'
    })
      .then(
        this.props.history.push({
          pathname: '/',
          state: { deleted: this.props.selectedCat._id }
        })
      )
      .then(function refreshPage() {
        window.location.reload(false);
      })
      .catch(console.error);
    console.log(this.props.history);
  }

  render() {
    if (this.state.isDeleted) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Edit</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            value={this.props.selectedCat.name}
            onChange={this.props.handleChange}
          ></input>
          <input
            type="text"
            value={this.props.selectedCat.type}
            onChange={this.props.handleChange}
          ></input>
          <input
            type="text"
            value={this.props.selectedCat.img}
            onChange={this.props.handleChange}
          ></input>
          <input
            type="text"
            value={this.props.selectedCat.personality}
            onChange={this.props.handleChange}
          ></input>
          <button type="submit">Submit</button>
          <button onClick={() => this.handleDelete()}>Delete</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Edit);
