import React from "react";
import { View, TouchableOpacity, Image, Alert } from "react-native";
import { styles } from "../styles";

export default ({ showMenuButton, onPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require("../assets/Arrow.png")} />
      </TouchableOpacity>
    </View>
  );
};
