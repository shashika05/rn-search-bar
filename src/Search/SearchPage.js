import React, { useState } from "react";
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
  isSearchedSomething,
  setIsSearchedSomething,
  setFilteredArray,
  setRecentSearchArray,
}) => {
  const navigation = useNavigation();

  console.log(isSearchedSomething);
  console.log(recentSearch);

  const onFlatlistPress = (name) => {
    Keyboard.dismiss;
    setDataName(name);
    // Push recent searches into array
    setRecentSearch(name);
    setIsSearchedSomething(true);
    navigation.navigate("DataPage");
    setSearchText("");
    setSearchData([]);
  };

  const clearRecentSearches = () => {
    setRecentSearchArray([]);
    setFilteredArray([]);
    setIsSearchedSomething(false);
  };

  return (
    <View style={tailwind("justify-center")}>
      {!isSearchedSomething ? (
        <FlatList
          data={searchData}
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
      ) : (
        <View style={tailwind("p-2")}>
          <Text style={tailwind("px-2 text-blue-700 font-bold")}>
            Recently Searched ...
          </Text>
          <FlatList
            data={recentSearch}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onFlatlistPress(item)}>
                <View
                  style={tailwind(
                    "h-12 flex flex-row items-center px-6 bg-gray-300 m-2 rounded-xl"
                  )}
                >
                  <Image
                    source={{
                      uri:
                        "https://ui-avatars.com/api/?background=random&name=" +
                        item +
                        "&size=200",
                    }}
                    style={tailwind("w-8 h-8 rounded-full")}
                  />
                  <Text style={{ padding: 10 }}>{item} </Text>
                  <TouchableOpacity
                    onPress={() => onFlatlistPress(item)}
                    style={tailwind("absolute right-4")}
                  >
                    <Ionicons name="arrow-forward" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
          <TouchableOpacity style={tailwind("flex items-center")}>
            <Text
              style={tailwind("text-blue-700 font-medium")}
              onPress={() => clearRecentSearches()}
            >
              Clear Recent Searches
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SearchPage;
