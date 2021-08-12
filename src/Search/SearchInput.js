import React from "react";
import { View, TextInput } from "react-native";
import tailwind from "tailwind-rn";

const SearchInput = ({ searchText, searchItems }) => {
  return (
    <View>
      <TextInput
        style={tailwind("border-b ml-8 h-8 w-72 rounded-full bg-gray-200 px-4")}
        onChangeText={(text) => searchItems(text)}
        value={searchText}
        placeholder="Search here...."
        autoFocus={true}
      />
    </View>
  );
};

export default SearchInput;
