import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";

export const BPButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export const BPButtonDelete = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttondel} onPress={onPress}>
      <Text style={styles.buttonText}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export const BPButtonDelete2 = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttondel2} onPress={onPress}>
      <Text style={styles.buttonText2}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export const PickerImage = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.input} onPress={onPress}>
      <Text style={styles.buttonImage}>{text}</Text>
    </TouchableOpacity>
  );
};
