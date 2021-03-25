import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Card.css';

const Card = (props) => {
    return (
        <div className="card-container">
            <img className="card-student-image" src={props.src} alt="studentphoto" />
            <h2 className="card-student-name">{props.name}</h2>
            <FontAwesomeIcon icon={props.icon} size="3x" />
        </div>
    )
}

export default Card;