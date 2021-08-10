import React from "react";
import { View, Text } from "react-native";

export default function DataPage({ dataName }) {
  return (
    <View>
      <Text>{dataName}</Text>
    </View>
  );
}
