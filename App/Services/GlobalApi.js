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

const nearByPlace = (lat, lng, type) =>
  axios.get(
    `${BASE_URL}/nearbysearch/json?location=${lat},${lng}&radius=5000&type=${type}&key=${API_KEY}`
  );

export default { nearByPlace };
