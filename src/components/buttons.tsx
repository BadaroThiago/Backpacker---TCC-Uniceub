import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";

export const BPButton = ({ text, onPress }) => { 
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{ text }</Text>
    </TouchableOpacity>
  );
}

export const BPButtonDel = ({ text, onPress }) => { 
  return (
    <TouchableOpacity style={styles.buttondel} onPress={onPress}>
      <Text style={styles.buttonText}>{ text }</Text>
    </TouchableOpacity>
  );
}
