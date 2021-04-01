import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { styles, colorConstants } from "../styles";


export default ({ showMenuButton, onPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={onPress}
      >
        <Image source={require("../assets/Arrow.png")}/>
      </TouchableOpacity>
    </View>
  );
}
