import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";

export default function CategoryItem({ category }) {
  return (
    <View
      style={{
        padding: 6,
        alignItems: "center",
        margin: 3,
        width: 100,
        height: 100,
        backgroundColor: Colors.White,
        justifyContent: "center",
        borderRadius: 12,
        elevation: 3,
      }}
    >
      <Image source={category.icon} style={{ width: 50, height: 50 }} />
      <Text style={{ fontSize: 13, fontFamily: "Lato" }}>{category.name}</Text>
    </View>
  );
}
