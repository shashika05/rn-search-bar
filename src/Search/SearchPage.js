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

const SearchPage = ({ searchData, setDataName }) => {
  const navigation = useNavigation();

  const onFlatlistPress = (name) => {
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
            <View style={tailwind("h-12 flex flex-row items-center px-4")}>
              <Image
                source={{
                  uri:
                    "https://ui-avatars.com/api/?background=random&name=" +
                    item.name +
                    "&size=120",
                }}
                style={tailwind("w-8 h-8 rounded-full")}
              />
              <Text style={{ padding: 10 }}>{item.name} </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default SearchPage;
