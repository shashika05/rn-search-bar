import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tailwind("absolute left-2")}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
