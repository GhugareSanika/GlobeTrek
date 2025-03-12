import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../Shared/Colors";

export default function PlaceItem({ place }) {
  // Construct the photo URL if photos are available
  const [photoUrl, setPhotoUrl] = useState(
    place.photos && place.photos.length > 0
      ? `https://maps.gomaps.pro/maps/api/place/photo?photo_reference=${place.photos[0].photo_reference}&maxwidth=400&key=AlzaSym1lsQooWBsUNN1_L8pEJGVK9Vkmbqei8d`
      : place.icon || "https://via.placeholder.com/100" // Fallback to a placeholder image
  );

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
