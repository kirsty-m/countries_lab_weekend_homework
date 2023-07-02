import React from 'react';

const TotalPopulation = ({countries}) => {
    const worldTotal = countries.reduce(
        (total, country) => total + country.population, 0)


return (
    <>
    <h4>There are {worldTotal} humans on Earth.</h4> 
    <p>Also there are a number of Aliens that reside on the planet.<br>
    </br>(We just haven't counted them yet.)</p>
    </>
)


};




export default TotalPopulation;