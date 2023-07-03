import React, {useState} from 'react';
import './Country.css'
// import FavouriteCountryForm from './FavouriteCountryForm'

const Country = ({country}) => {



    if (!country){
        return null
    }



    return (
        <>
        <div id='country-box'>
        <h3>Name: {country.name.common}</h3><img id="flags" src={country.flags.png}></img>
        {/* <FavouriteCountryForm/> */}
        </div>
        </>
    )

};

export default Country;