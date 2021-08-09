import React, { useState } from "react";
import { TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/Home";
import DataPage from "./src/DataPage";
import SearchPage from "./src/SearchPage";

import SearchButton from "./src/SearchButton";
import SearchInput from "./src/SearchInput";

const Stack = createStackNavigator();

const arrayNew = [
  { name: "Robert" },
  { name: "Bryan" },
  { name: "Vicente" },
  { name: "Tristan" },
  { name: "Marie" },
  { name: "Onni" },
  { name: "sophie" },
  { name: "Brad" },
  { name: "Samual" },
  { name: "Omur" },
  { name: "Ower" },
  { name: "Awery" },
  { name: "Ann" },
  { name: "Jhone" },
  { name: "z" },
  { name: "bb" },
  { name: "cc" },
  { name: "d" },
  { name: "e" },
  { name: "f" },
  { name: "g" },
  { name: "h" },
  { name: "i" },
  { name: "j" },
  { name: "k" },
  { name: "l" },
];

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

  const searchItems = (text) => {
    const newData = arrayNew.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setSearchData(newData);
    setSearchText(text);
  };
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
            <SearchPage searchData={searchData} arrayNew={arrayNew} />
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
          }}
        />
        <Stack.Screen component={DataPage} name="Data Page" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
