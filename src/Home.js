import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

const Home = () => {
  return (
    <View style={tailwind("items-center justify-center")}>
      <View
        style={tailwind(
          "m-8 rounded-2xl border-b-4 border-r-2 border-l-2 border-gray-500 bg-gray-400 w-72 h-5/6 items-center justify-center"
        )}
      >
        <Text>Search Test - App</Text>
      </View>
    </View>
  );
};

export default Home;
