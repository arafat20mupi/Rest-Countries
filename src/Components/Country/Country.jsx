import { useState } from "react";

const Country = ({country, handleVisitedCountry}) => {
    // console.log(country);
    const {name ,flags , population, area} = country;
    const [visited , setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }

    

    return (
        <div>
            
            <div className={` ${visited? 'bg-lime-300':'bg-lime-200' } rounded-2xl  space-y-3 h-[550px] p-10 `}>
                <h3 className="text-xl font-medium ml-2">Name: {name.common}</h3>
                <img className="text-center h-52 w-full p-5" src={flags.png} alt="" />
                <p className="text-xl  ml-2">Population: {population}</p>
                <p className="text-xl  ml-2">Area: {area}</p>

                <button onClick={() =>handleVisitedCountry(country)} className="p-2 mr-3 rounded-lg bg-gray-200">Visited done</button>
                <br />
                <button onClick={handleVisited} className="p-2 mr-3 rounded-lg bg-gray-200">{visited? "Visited" : "Going"}</button>
                {visited? 'visited this country':''}
            </div>
        </div>
    );
};

export default Country;