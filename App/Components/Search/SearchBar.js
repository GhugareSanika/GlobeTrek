import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function SearchBar() {
  return (
    <View>
      <linearGradient
        // Button Linear Gradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.button}
      >
        <Text style={styles.text}>Sign in with Facebook</Text>
      </linearGradient>
    </View>
  );
}
