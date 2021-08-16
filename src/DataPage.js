import React from "react";
import { View, Text, Image } from "react-native";
import tailwind from "tailwind-rn";

export default function DataPage({ resultArray }) {
  return (
    <View style={tailwind("items-center justify-center")}>
      <View
        style={tailwind(
          "m-8 rounded-2xl border-b-4 border-r-2 border-l-2 border-gray-500 bg-gray-400 w-72 h-5/6 items-center justify-center"
        )}
      >
        <Image
          source={{
            uri:
              "https://ui-avatars.com/api/?background=random&name=" +
              resultArray.name +
              "&size=200",
          }}
          style={tailwind("w-28 h-28 rounded-full mb-4")}
        />
        <Text>Name: {resultArray.name}</Text>
        <Text>Email: {resultArray.mail}</Text>
      </View>
    </View>
  );
}
