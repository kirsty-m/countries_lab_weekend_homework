import React from 'react';

const Country = ({country}) => {

    if (!country){
        return null
    }

    return (
        <>
        <h3>Name: {country.name.common}</h3><img id="flags" src={country.flags.png}></img>
        </>
    )

}

export default Country;