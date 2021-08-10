import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import tailwind from "tailwind-rn";

import { useNavigation } from "@react-navigation/native";

const SearchButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tailwind("absolute right-4")}
      onPress={() => navigation.navigate("SearchPage")}
    >
      <AntDesign name="search1" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default SearchButton;
