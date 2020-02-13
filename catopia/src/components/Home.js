import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home(props) {
  console.log(this.props.cats);
  return <div>props.cats.map(cat => {})</div>;
}

export default Home;
