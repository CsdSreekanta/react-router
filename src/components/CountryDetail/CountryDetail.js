import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} =useParams()

    const [country, setCountry] = useState({})
    console.log(country)

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res =>res.json())
        .then(data=>setCountry(data))

    },[])
    return (
        <div>
            <h2>This is for country detail:{countryName}</h2>
            

        </div>
    );
};

export default CountryDetail;