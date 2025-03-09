// import { View, Text, Image } from "react-native";
// import React from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import Colors from "../../Shared/Colors";

// export default function PlaceItem({ place }) {
//   console.log("Place Object:", place);
//   console.log("Photos Array:", place.photos);
//   const photoUrl =
//     place.photos && place.photos.length > 0
//       ? `https://maps.gomaps.pro/maps/api/place/photo?photo_reference=${place.photos[0].photo_reference}&maxwidth=5000&key=AlzaSym1lsQooWBsUNN1_L8pEJGVK9Vkmbqei8d`
//       : place.icon || "https://via.placeholder.com/100"; // Fallback to a placeholder imagereturn
//   <View
//     style={{
//       display: "flex",
//       flexDirection: "row",
//       alignItems: "center",
//       gap: 10,
//       marginTop: 20,
//     }}
//   >
//     {/* <Image
//         // source={{
//         //   uri: "https://maps.gomaps.pro/maps/api/place/photo?photo_reference=AXCi2Q59amUunqkSqsu0t4Quvnaezc9aFUu1yH_hKGL0FLU6jN-8SZO8MszcyknygB8qhnG9uhZBmqO-UDbdza48EZEUgn4dJF0DFNF79EvVgoqgp1HS4DhcMQLKoWtud6UXLyp5ma5-ZTQT7NaAZIAhmzlXbXBB8FTUPkQs7HESYGM4nCLl&maxwidth=400&key=AlzaSym1lsQooWBsUNN1_L8pEJGVK9Vkmbqei8d",
//         //   //uri: "https://maps.gomaps.pro/maps/api/place/photo?photo_reference=AXCi2Q59amUunqkSqsu0t4Quvnaezc9aFUu1yH_hKGL0FLU6jN-8SZO8MszcyknygB8qhnG9uhZBmqO-UDbdza48EZEUgn4dJF0DFNF79EvVgoqgp1HS4DhcMQLKoWtud6UXLyp5ma5-ZTQT7NaAZIAhmzlXbXBB8FTUPkQs7HESYGM4nCLl&maxwidth=400&key=AlzaSym1lsQooWBsUNN1_L8pEJGVK9Vkmbqei8d",
//         //   //uri: "https:///maps.gomaps.pro/maps/api/place/photo?maxwidth=400&photo_reference=ATJ83zhSSAtkh5LTozXMhBghqubeOxnZWUV2m7Hv2tQaIzKQJgvZk9yCaEjBW0r0Zx1oJ9RF1G7oeM34sQQMOv8s2zA0sgGBiyBgvdyMxeVByRgHUXmv-rkJ2wyvNv17jyTSySm_-_6R2B0v4eKX257HOxvXlx_TSwp2NrICKrZM2d5d2P4q&key=AlzaSym1lsQooWBsUNN1_L8pEJGVK9Vkmbqei8d",
//         // }}

//         style={{ width: 120, height: 120, borderRadius: 15 }}
//       /> */}

//     {/* {place.icon ? <Image src={place.icon} /> : <p>No Image Available</p>} */}
//     <Image
//       source={{ uri: photoUrl }}
//       style={{ width: 100, height: 100, borderRadius: 15 }}
//       onError={(e) => console.log("Failed to load image:", e.nativeEvent.error)}
//     />
//     <View style={{ flex: 1 }}>
//       <Text
//         numberOfLines={1}
//         style={{ fontSize: 15, fontFamily: "LatoBold", marginBottom: 5 }}
//       >
//         {place.name}
//       </Text>
//       <Text>{place.name}</Text>
//       <Text numberOfLines={1} style={{ fontSize: 15, marginBottom: 5 }}>
//         {place.vicinity}
//       </Text>
//       <View
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           gap: 5,
//         }}
//       >
//         <FontAwesome name="star" size={20} color={Colors.YELLOW} />
//         <Text>{place.rating}</Text>
//       </View>
//     </View>
//   </View>;
// }

// //https://maps.gomaps.pro/maps/api/place/photo?photo_reference=AUy1YQ1N_GcTQq5Xp1nJHsAkOAPjVufTpeTJAnLB98I0UMAy_cqwASwGC5S8I_AdOjH-zjtpJbQB2IcvorK7k92I3vN8o8n37BuzgUquY1mhTbneFXQT1GDI1pRMy8HcGAnCPLR1NGSX8Dc1V-_Zi2TLMe2nvZphsqQ1kzpjhh8W0jyvfzR3A8IZAFbO&maxwidth=4608&key=AlzaSym1lsQooWBsUNN1_L8pEJGVK9Vkmbqei8d

import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../Shared/Colors";

export default function PlaceItem({ place }) {
  console.log("Place Object:", place); // Log the place object for debugging
  console.log("Photos Array:", place.photos); // Log the photos array for debugging

  // Construct the photo URL if photos are available
  const [photoUrl, setPhotoUrl] = useState(
    place.photos && place.photos.length > 0
      ? `https://maps.gomaps.pro/maps/api/place/photo?photo_reference=${place.photos[0].photo_reference}&maxwidth=400&key=AlzaSym1lsQooWBsUNN1_L8pEJGVK9Vkmbqei8d`
      : "https://5bestincity.com/listimg/India/kolhapur-mh/Hotel-purn-Kolhapuri-Tadka-Food-Family-restaurants-Kolhapur-Maharashtra-1.jpg" // Fallback to a placeholder image
  );

  console.log("Photo URL:", photoUrl); // Log the photo URL for debugging

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
      <Image
        source={{ uri: photoUrl }}
        style={{ width: 100, height: 100, borderRadius: 15 }}
        onError={(e) => {
          console.log("Failed to load image:", e.nativeEvent.error);
          setPhotoUrl("https://via.placeholder.com/100"); // Set fallback image on error
        }}
      />

      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={1}
          style={{ fontSize: 15, fontFamily: "LatoBold", marginBottom: 5 }}
        >
          {place.name}
        </Text>
        <Text numberOfLines={1} style={{ fontSize: 15, marginBottom: 5 }}>
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
