import { useState } from "react";
import { getLocationWiseTurfs } from "../../../../API/ServerRequests/Turf/TurfsApi";
import {Location_Search} from "../../../../API/Mapbox"

const SearchLoacation = ({ setTurfs }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const textChange = async (event) => {
        setSearchTerm(event.target.value);
        const results = await Location_Search(searchTerm);
        setSearchResults(results);
    };


    const handleLocationSelect = async (result) => {
        setSearchTerm(result.text)
        setSearchResults([])
        const context = result.context
        let distric = null;
        for (const x of context) {
            if (x.id.includes('district')) {
                distric = x.text;
                break;
            }
        }
        const locationResult = await getLocationWiseTurfs(distric)
        setTurfs(locationResult)
    };
    return (
        <div className="bg-gray-800 w-full md:w-auto py-5 px-8 xs:px-20 sm:px-24  md:p-5 float-right">
            <span className="absolute  md:right-64 mt-[7px] text-gray-100 flex items-center pl-2">
                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                </button>
            </span>
            <input value={searchTerm}  autoComplete="of" type="text" name="Search" onChange={textChange} placeholder="Location..." className=" py-2 pl-10 text-sm rounded-md w-full md:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900 focus:border-violet-400" />

            <ul className=" w-full absolute  bg-white rounded-md" >
                {searchResults.map((result) => (
                    <li key={result.id} onClick={() => handleLocationSelect(result)} className="px-3 py-2 cursor-pointer border-b-2 hover:bg-gray-200">
                        <span className="text-lg font-bold">{result.text}</span> <br />
                        {result.place_name}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default SearchLoacation