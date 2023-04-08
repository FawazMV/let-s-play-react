import { useState } from "react";
import { Location_Search } from "../../../../API/Mapbox";

const LocationSearch = ({ formLocation, err }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const textChange = async (event) => {
        setSearchTerm(event.target.value);
        const results = await Location_Search(searchTerm);
        setSearchResults(results);
    };

    const handleLocationSelect = (result) => {
        setSearchTerm(result.text)
        setSearchResults([])
        const context = result.context
        let distric = null;
        let state = null;
        for (const x of context) {
            if (x.id.includes('district')) distric = x.text;
            if (x.id.includes('region')) state = x.text;
        }
        formLocation({
            location: result.text,
            distric, state
        })
    };

    return (
        <div className="" onClick={() => setSearchResults([])}>
            <div className="mb-4" >
                <label className="block text-gray-600 font-semibold mb-2" htmlFor='location'>Location</label>
                <input type="text" value={searchTerm} name="location" onChange={textChange} placeholder="Enter location name" id="location"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${err ? "border-red-500" : ""}`} />
                <p className="text-red-500 text-xs italic">{err}</p>
            </div>
            <ul className="mt-4 w-full  bg-white rounded-md" >
                {searchResults.map((result) => (
                    <li key={result.id} onClick={() => handleLocationSelect(result)} className="px-3 py-2 cursor-pointer border-b-2 hover:bg-gray-200">
                        <span className="text-lg font-bold">{result.text}</span> <br />
                        {result.place_name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LocationSearch