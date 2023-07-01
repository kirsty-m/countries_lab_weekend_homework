import React from 'react';


const CountrySelector = ({countries, onCountrySelected}) => {

    const handleChange = event => {
        onCountrySelected(event.target.value)
    }

    return(
        <>
        <select onChange={handleChange}>
            <option>Choose Your Country</option>
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