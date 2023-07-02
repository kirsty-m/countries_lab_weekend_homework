import React from 'react';
import './CountrySelector.css'

const CountrySelector = ({countries, onCountrySelected}) => {

    const handleChange = event => {
        onCountrySelected(event.target.value)
    }

    return(
        <>
        <select onChange={handleChange} id='dropdown'>
            <option>CHOOSE A COUNTRY</option>
            {countries.map(country => {
                return (
                    <option key={country.cca3} value={country.cca3}>{country.name.common}</option>
                )
            })
            }
        </select>

        
        </>
    )

}


export default CountrySelector;