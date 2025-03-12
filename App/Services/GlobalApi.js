import axios from "axios";

const BASE_URL = "https://maps.gomaps.pro/maps/api/place";
const API_KEY = "AlzaSym1lsQooWBsUNN1_L8pEJGVK9Vkmbqei8d";

const nearByPlace = (lat, lng, type) =>
  axios.get(
    `${BASE_URL}/nearbysearch/json?location=${lat},${lng}&radius=5000&type=${type}&key=${API_KEY}`
  );

const searchByText = (searchText) =>
  axios.get(`${BASE_URL}/textsearch/json?query=${searchText}&key=${API_KEY}`);

export default { nearByPlace, searchByText };

// https://maps.gomaps.pro/maps/api/place/textsearch/json?query=<string>&key=your api key from gomaps.pro
