import React from 'react';
import { Link } from 'react-router-dom';



export default function Show(props) {
    console.log(props);
    return (
      <div>
        <img src={props.selectedCat.img} />
        <h1>{props.selectedCat.name}</h1>
        <h3>Type: {props.selectedCat.type}</h3>
        <p>Personality: {props.selectedCat.personality}</p>
        <Link to={`/${props.selectedCat.name}/edit`}>Edit</Link>
      </div>
    );
}


