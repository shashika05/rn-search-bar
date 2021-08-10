import React from "react";
import { View, Text } from "react-native";

export default function DataPage({ resultArray }) {
  return (
    <View>
      <Text>{resultArray.name}</Text>
    </View>
  );
}
