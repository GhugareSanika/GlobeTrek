// import axios from "axios";

// const BASE_URL = "https://maps.googleapis.com/maps/api/place";
// const API_KEY = "AIzaSyDa5MKOsPSj4IrXR3dJ7cC2XBS3Lmj3zfI";

// const nearByPlace = () =>
//   axios.get(
//     BASE_URL +
//       "/nearbysearch/json?" +
//       "&location=-33.86705222%2C151.1957362&radius=1500&type=restaurant" +
//       "&key=" +
//       API_KEY
//   );

// export default { nearByPlace };

import axios from "axios";

const BASE_URL = "https://maps.gomaps.pro/maps/api/place";
const API_KEY = "AlzaSym1lsQooWBsUNN1_L8pEJGVK9Vkmbqei8d";

const nearByPlace = () =>
  axios.get(
    `${BASE_URL}/nearbysearch/json?location=-33.86705222,151.1957362&radius=1500&type=restaurant&key=${API_KEY}`
  );

export default { nearByPlace };

`https://maps.gomaps.pro/maps/api/places/nearbysearch/json?location=-33.86705222,151.1957362&radius=1500&type=restaurant&key=AlzaSym1lsQooWBsUNN1_L8pEJGVK9Vkmbqei8d`;
