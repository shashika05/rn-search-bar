import React from "react";
import { View, TextInput } from "react-native";
import tailwind from "tailwind-rn";

const SearchInput = ({ searchText, searchItems }) => {
  return (
    <View>
      <TextInput
        style={tailwind("border-b h-8 w-72")}
        onChangeText={(text) => searchItems(text)}
        value={searchText}
        placeholder="Search here...."
        autoFocus={true}
      />
    </View>
  );
};

export default SearchInput;
