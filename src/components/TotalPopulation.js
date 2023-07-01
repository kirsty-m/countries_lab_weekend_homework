import React from 'react';

const TotalPopulation = ({countries}) => {
    const worldTotal = countries.reduce(
        (total, country) => total + country.population, 0)


return (
    <>
    <h4>This is the total world population: {worldTotal}</h4>
    </>
)


};




export default TotalPopulation;