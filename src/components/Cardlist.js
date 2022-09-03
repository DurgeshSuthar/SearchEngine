import React from 'react';
import Card from './Card';

const Cardlist = ({cricketers})=>{
    const CardArray = cricketers.map((user,i)=>{
        return <Card key={i} id={cricketers[i].id} name={cricketers[i].name} country={cricketers[i].country}/>;
    })
    return (
        <div>
            {CardArray}
        </div>
    )
}

export default Cardlist;