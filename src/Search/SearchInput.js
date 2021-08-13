import React from "react";
import { View, TextInput } from "react-native";
import tailwind from "tailwind-rn";

const SearchInput = ({ searchText, searchItems }) => {
  return (
    <View>
      <TextInput
        style={tailwind(
          "absolute -top-4 border-b-2 border-r border-l border-gray-300 h-9 w-96 rounded-full bg-gray-200 px-4"
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
