import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import tailwind from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const SearchPage = ({
  searchData,
  setSearchData,
  setDataName,
  setSearchText,
  setRecentSearch,
  recentSearch,
}) => {
  const navigation = useNavigation();

  const onFlatlistPress = (name) => {
    Keyboard.dismiss;
    setDataName(name);
    // Push recent searches into array
    setRecentSearch(name);
    navigation.navigate("DataPage");
    setSearchText("");
    setSearchData([]);
  };

  console.log(typeof searchData);

  var flatListData;

  if (searchData) {
    flatListData = searchData;
  } else {
    flatListData = flatListData;
  }

  return (
    <View style={tailwind("justify-center")}>
      <FlatList
        data={flatListData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onFlatlistPress(item.name)}>
            <View
              style={tailwind(
                "h-12 flex flex-row items-center px-6 bg-gray-300 m-2 rounded-xl"
              )}
            >
              <Image
                source={{
                  uri:
                    "https://ui-avatars.com/api/?background=random&name=" +
                    item.name +
                    "&size=200",
                }}
                style={tailwind("w-8 h-8 rounded-full")}
              />
              <Text style={{ padding: 10 }}>{item.name} </Text>
              <TouchableOpacity
                onPress={() => onFlatlistPress(item.name)}
                style={tailwind("absolute right-4")}
              >
                <Ionicons name="arrow-forward" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default SearchPage;
