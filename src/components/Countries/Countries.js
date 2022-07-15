// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Countries = () => {
//     const [countries, setCountries]= useState([])
   

//     useEffect(()=>{
//         fetch("https://restcountries.com/v3.1/all")
//         .then(res =>res.json())
//         .then(data=> setCountries(data))
//     },[])
//     return (
//         <div>
//             <h2>Welcome to my world:{countries.length}</h2>
//             {/* {
//                 countries.map(country=> <Link  className='mr-3 underline' to={`/country/:${country.name.common}`} key={country.id}>{country.name.common}</Link>)
//             } */}
           
//         </div>
//     );
// };

// export default Countries;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([])
    // console.log(countries)

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data =>setCountries(data))
    },[])
    return (
        <div>
            <h2>Welcome to the world!{countries.length}</h2>
           <ul>
           {
                countries.map(country =><Link className='mr-3 underline' to={`/country/${country.name.common}`} >{country.name.common}</Link>)
            }
           </ul>
        </div>
    );
};

export default Countries;