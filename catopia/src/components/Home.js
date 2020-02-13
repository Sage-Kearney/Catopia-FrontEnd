import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home(props) {
  console.log(props.cats);
  return (
    <div>
      {props.cats.map(cat => {
        return (
          <div>
            <img src={cat.img}></img>
            <h1>{cat.name}</h1>
            <Link to={`/${cat.name}`}>See More</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
