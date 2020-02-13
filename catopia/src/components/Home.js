import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

// componentDidUpdate() {
//   // We can check if the component from the previous
//   // route sent us some data using the location prop.
//   // For convenience, we're destructuring the state
//   // property from the location object.  For clarity,
//   // (so we don't confuse it with the component's state)
//   // we're renaming it to locationState when we destructure.
//   const { state: locationState } = this.props.location
//   // Now we check if the locationState is undefined
//   // and if it isn't, check if it has a deleted property.
//   if (locationState && locationState.deleted) {
//     // Use the book id passed in the deleted property
//     // to find out of there's actually a book to remove
//     // from state so that we don't fall into an infinite loop.
//     const catToRemove = this.state.cats.find(cat => cat._id === locationState.deleted)
//     if (catToRemove) {
//       // Only run getBooks if the state still contains
//       // a deleted book.
//       this.getCats()
//     }
//   }
// }

function Home(props) {
  console.log(props.cats);
  return (
    <div>
      <Link to="/Add/Cat">
        <button>Add New Cat</button>
      </Link>
      {props.cats.map(cat => {
        return (
          <div>
            <img src={cat.img}></img>
            <h1>{cat.name}</h1>
            <Link
              to={`/${cat.name}`}
              onClick={() => props.setCat(cat)}
              key={cat.name}
            >
              See More
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
