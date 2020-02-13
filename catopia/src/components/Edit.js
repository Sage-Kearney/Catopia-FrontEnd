import React from 'react'

export default function Edit(props) {
    console.log(props)
    return (
      <div>
        <h1>Edit</h1>
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            value={props.selectedCat.name}
            onChange={props.handleChange}
          ></input>
          <input
            type="text"
            value={props.selectedCat.type}
            onChange={props.handleChange}
          ></input>
          <input
            type="text"
            value={props.selectedCat.img}
            onChange={props.handleChange}
          ></input>
          <input
            type="text"
            value={props.selectedCat.personality}
            onChange={props.handleChange}
          ></input>
          <button type='submit'>Submit</button>
          <button onClick={props.handleDelete}>Delete</button>
        </form>
      </div>
    );
}
