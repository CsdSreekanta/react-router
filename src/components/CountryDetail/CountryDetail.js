import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} =useParams()


    const [country, setCountry] = useState([])
    console.log(country)
    

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res =>res.json())
        .then(data=>setCountry(data))

    },[countryName])
    return (
        <div>
            <h2 className='text-2xl font-bold '>The name of Country: <span className='text-blue-700'>{countryName}</span></h2>
          <div className=' flex justify-center shadow-lg mt-4'>
          {
            country.map(info => 
            <div>
              <h1 className="text-xl font-bold "> Official Name : <span className="text-green-600"> {info.name.official}</span></h1>
              <h1 className="text-xl font-bold">  Capital: {info.capital}</h1>
              <h1 className="text-xl font-bold">  Population: {info.population}</h1>
              <h1 className="text-xl font-bold"> Continents: {info.continents}</h1>
              <img className='w-30 h-30' src={info.flags.png} alt="" />

            </div>)
           }
          </div>
            

        </div>
    );
};

export default CountryDetail;