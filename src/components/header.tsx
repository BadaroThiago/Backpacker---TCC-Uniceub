import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles";

export default ({ onPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={onPress}
        style={{ width: 40}}
      >
        <Image source={require("../assets/Arrow.png")} />
      </TouchableOpacity>
    </View>
  );
};
