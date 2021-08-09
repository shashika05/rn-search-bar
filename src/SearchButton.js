import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const SearchButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ marginRight: 12 }}
      onPress={() => navigation.navigate("SearchPage")}
    >
      <AntDesign name="search1" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default SearchButton;
