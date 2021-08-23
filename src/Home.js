import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import tailwind from "tailwind-rn";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={tailwind("items-center justify-center")}>
      <View
        style={tailwind(
          "m-8 rounded-2xl border-b-4 border-r-2 border-l-2 border-gray-500 border-opacity-80 bg-gray-400 w-72 h-4/6 items-center justify-center"
        )}
      >
        <Text style={tailwind("text-lg font-bold")}>React Native Search</Text>
        <TouchableOpacity
          style={tailwind(
            "flex-row justify-center items-center w-32 h-12 bg-black mt-8 rounded-lg"
          )}
          onPress={() => navigation.navigate("SearchPage")}
        >
          <Ionicons name="search" size={24} color="white" />
          <Text style={tailwind("text-white")}>Search here</Text>
        </TouchableOpacity>
        <Text style={tailwind("mt-32 text-center")}>
          Test app by{"\n"}-localhost443-
        </Text>
      </View>
    </View>
  );
};

export default Home;
