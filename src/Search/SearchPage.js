import React from "react";
import { View, Text, FlatList, TouchableOpacity, Keyboard } from "react-native";
import tailwind from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";

const SearchPage = ({ searchData, setDataName }) => {
  const navigation = useNavigation();

  onFlatlistPress = (name) => {
    Keyboard.dismiss;
    setDataName(name);
    navigation.navigate("DataPage");
  };
  return (
    <View style={tailwind("justify-center")}>
      <FlatList
        data={searchData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onFlatlistPress(item.name)}>
            <Text style={{ padding: 10 }}>{item.name} </Text>
          </TouchableOpacity>
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
