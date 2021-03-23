import React from 'react';

const Card = ({name, image, status})=>{
    return(
        <div className="card bg-secondary mb-3" > 
        <div className="card-header">{name}</div>
        <div className="card-body">
            <img alt={name} className="w-100 img" src={image}></img>
            <p className="card-text">Status: {status}</p>
        </div>
    </div>
    )
};

export default Card;