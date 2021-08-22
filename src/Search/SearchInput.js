import React from "react";
import { View, TextInput, Platform } from "react-native";
import tailwind from "tailwind-rn";

const styleDetector = [
  Platform.OS === "ios"
    ? tailwind("absolute -top-4 -right-60")
    : tailwind("absolute -top-4"),
];

const SearchInput = ({ searchText, searchItems }) => {
  return (
    <View style={styleDetector}>
      <TextInput
        style={tailwind(
          "border-b-2 border-r border-l border-gray-300 h-9 w-96 rounded-full bg-gray-200 px-4"
        )}
        onChangeText={(text) => searchItems(text)}
        value={searchText}
        placeholder="Search here...."
        autoFocus={true}
        maxLength={32}
      />
    </View>
  );
};

export default SearchInput;
