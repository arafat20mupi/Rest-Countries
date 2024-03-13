import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [countries , setCountries ] = useState([]);

    const [visitedCountry , setVisitedCountry] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleVisitedCountry = (country) =>{
        // console.log(country);
        const newVisitedCountry = [...visitedCountry ,country];
        setVisitedCountry(newVisitedCountry);
    }
    return (
        <div className=" w-full container mx-auto">
           <h1 className="text-2xl mt-4 pl-8 ">All Countries: {countries.length}</h1>

           <div>
                <h1 className="text-2xl mt-4 pl-8 ">Visited Countries: {visitedCountry.length}</h1>
                <ul className="mt-3 space-y-2">
                    {
                        visitedCountry.map(country => <li className="text-xl font-medium  pl-8  " key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
           </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    countries.map(country => <Country handleVisitedCountry={handleVisitedCountry} country={country} key={country.cca3}></Country>)
                }
            </section>
        </div>
    );
};

export default Countries;