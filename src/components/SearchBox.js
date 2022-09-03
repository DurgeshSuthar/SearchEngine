import React from 'react';
import './sb.css';
const SearchBox = ({searchfield,searchChange}) =>{
    return (
        <div className='pa2' >
            <input className='abc' type='search' placeholder='search cricketers'
            onChange={searchChange} 
            />
        </div>
    );
}
export default SearchBox;