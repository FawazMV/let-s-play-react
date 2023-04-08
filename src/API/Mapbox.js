import Axios from "axios";

export const Location_Search = async (search) => {
    const response = await Axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?country=IN&types=locality,district&access_token=${process.env.REACT_APP_mapboxToken}`);
    return response.data.features;
} 