// import { View, Text, Image } from "react-native";
// import React, { useState } from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import Colors from "../../Shared/Colors";

// export default function PlaceItem({ place }) {
//   // Construct the photo URL if photos are available
//   const [photoUrl, setPhotoUrl] = useState(
//     place.photos && place.photos.length > 0
//       ? `https://maps.gomaps.pro/maps/api/place/photo?photo_reference=${place.photos[0].photo_reference}&maxwidth=400&key=AlzaSym1lsQooWBsUNN1_L8pEJGVK9Vkmbqei8d`
//       : place.icon || "https://via.placeholder.com/100" // Fallback to a placeholder image
//   );

//   return (
//     <View
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         gap: 10,
//         marginTop: 20,
//       }}
//     >
//       <Image
//         source={{ uri: photoUrl }}
//         style={{ width: 100, height: 100, borderRadius: 15 }}
//         onError={(e) => {
//           console.log("Failed to load image:", e.nativeEvent.error);
//           setPhotoUrl("https://via.placeholder.com/100"); // Set fallback image on error
//         }}
//       />

//       <View style={{ flex: 1 }}>
//         <Text
//           numberOfLines={1}
//           style={{ fontSize: 15, fontFamily: "LatoBold", marginBottom: 5 }}
//         >
//           {place.name}
//         </Text>
//         <Text numberOfLines={2} style={{ fontSize: 15, marginBottom: 5 }}>
//           {place.vicinity}
//         </Text>
//         <View
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             gap: 5,
//           }}
//         >
//           <FontAwesome name="star" size={20} color={Colors.YELLOW} />
//           <Text>{place.rating}</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../Shared/Colors";

export default function PlaceItem({ place }) {
  const API_KEY = "AlzaSym1lsQooWBsUNN1_L8pEJGVK9Vkmbqei8d"; // Replace with your GoMaps API key

  // Debug: Log the full place object
  useEffect(() => {
    console.log("Place object:", JSON.stringify(place, null, 2));
  }, [place]);

  const [photoUrl, setPhotoUrl] = useState(
    place.photos && place.photos.length > 0 && place.photos[0].photo_reference
      ? `https://maps.gomaps.pro/maps/api/place/photo?photo_reference=${encodeURIComponent(
          place.photos[0].photo_reference
        )}&maxwidth=400&key=${API_KEY}`
      : place.icon || "https://via.placeholder.com/100" // Fallback to a placeholder image
  );
  const [isLoading, setIsLoading] = useState(true);

  // Debug: Log the photo URL
  useEffect(() => {
    console.log("Photo URL:", photoUrl);
  }, [photoUrl]);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 20,
      }}
    >
      {isLoading && (
        <View
          style={{
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="small" color={Colors.PRIMARY} />
        </View>
      )}
      <Image
        source={{ uri: photoUrl }}
        style={{ width: 100, height: 100, borderRadius: 15 }}
        onLoad={() => setIsLoading(false)}
        onError={(e) => {
          console.log("Failed to load image:", e.nativeEvent.error);
          setPhotoUrl("https://via.placeholder.com/100"); // Set fallback image on error
          setIsLoading(false);
        }}
      />

      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={1}
          style={{ fontSize: 15, fontFamily: "LatoBold", marginBottom: 5 }}
        >
          {place.name}
        </Text>
        <Text numberOfLines={2} style={{ fontSize: 15, marginBottom: 5 }}>
          {place.vicinity}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <FontAwesome name="star" size={20} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
      </View>
    </View>
  );
}
