//rcc -> class component
//rsc -> functional component
import React from 'react';
import './Card.css';

//props:
// -url for image: url
// -title for card: title
// -text for card: text
const Card = (props) => {
    return (
        <div className="card" >
            <img src={props.url} className="card-img-top" alt={props.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
};

export default Card;