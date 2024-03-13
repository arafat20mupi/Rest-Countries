import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [countries , setCountries ] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])
    return (
        <div className=" w-full container mx-auto">
           <h1 className="text-2xl mt-4 pl-8 ">All Countries: {countries.length}</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    countries.map(country => <Country country={country} key={country.cca3}></Country>)
                }
            </section>
        </div>
    );
};

export default Countries;