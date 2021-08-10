import React, { useState } from "react";
import { Keyboard, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/Home";
import DataPage from "./src/DataPage";

// Search Components
import SearchPage from "./src/Search/SearchPage";
import SearchButton from "./src/Search/SearchButton";
import SearchInput from "./src/Search/SearchInput";

import dataArray from "./dataArray";

const Stack = createStackNavigator();

export default function App() {
  // Search Bar States
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

  // State for when clicked entry in Search data Flatlist
  const [dataName, setDataName] = useState("Data Page");

  // Search event handling
  const searchItems = (text) => {
    const newData = dataArray.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setSearchData(newData);
    setSearchText(text);
  };

  // Filter array by searched name
  var resultArray = dataArray.filter((obj) => {
    return obj.name == dataName;
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            headerRight: () => {
              return <SearchButton />;
            },
          }}
        />
        <Stack.Screen
          children={() => (
            <SearchPage
              searchData={searchData.reverse()}
              setDataName={setDataName}
            />
          )}
          name="SearchPage"
          options={{
            headerTitle: () => {
              return (
                <SearchInput
                  searchText={searchText}
                  searchItems={searchItems}
                />
              );
            },
            headerRight: () => {
              return (
                <TouchableOpacity
                  style={tailwind("absolute right-8")}
                  onPress={() => Keyboard.dismiss()}
                >
                  <AntDesign name="search1" size={24} color="black" />
                </TouchableOpacity>
              );
            },
          }}
        />
        <Stack.Screen
          name="DataPage"
          children={() => <DataPage resultArray={resultArray[0]} />}
          options={{
            headerTitle: dataName,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
