import React from 'react';
import './User.css'

const user = (props) => {
    return (
        <div>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.email}</p>
            <span onClick={props.clicked}>X</span>
        </div>
    );
}

export default user;