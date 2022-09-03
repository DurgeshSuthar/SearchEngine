import React from 'react';
import './cricc.css';
const Card = ({ name ,country,id }) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img className='cric' src={id} alt='-'/> 
            <div>
                <h2>{name}</h2>
                <p>{country}</p>
            </div>
        </div>
    );
}

export default Card;