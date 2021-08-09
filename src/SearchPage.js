import React from "react";
import { View, Text, FlatList } from "react-native";
import tailwind from "tailwind-rn";

const SearchPage = ({ searchData }) => {
  return (
    <View style={tailwind("justify-center")}>
      <FlatList
        data={searchData}
        renderItem={({ item }) => (
          <Text style={{ padding: 10 }}>{item.name} </Text>
        )}
        keyExtractor={(item) => item.name}
        // ItemSeparatorComponent={this.renderSeparator}
        // ListHeaderComponent={this.renderHeader}
      />
      {/* <Text style={tailwind("mt-8")}>{searchText}</Text> */}
    </View>
  );
};

export default SearchPage;
