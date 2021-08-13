import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={tailwind("w-6 h-6")}>
      <TouchableOpacity
        style={tailwind("absolute left-2")}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
