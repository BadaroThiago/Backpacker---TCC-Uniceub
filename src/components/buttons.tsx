import React from "react";
import { Text, TouchableOpacity, View} from "react-native";
import { styles } from "../styles";
import { AntDesign } from "@expo/vector-icons";

export const BPButton = ({ text, onPress }) => { 
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{ text }</Text>
    </TouchableOpacity>
  );
}

export const BPButtonDelete = ({ text, onPress }) => { 
  return (
    <TouchableOpacity style={styles.buttondel} onPress={onPress}>
      <Text style={styles.buttonText}>{ text }</Text>
    </TouchableOpacity>
  );
}

export const BPButtonDelete2 = ({ text, onPress }) => { 
  return (
    <TouchableOpacity style={styles.buttondel2} onPress={onPress}>
      <Text style={styles.buttonText2}>{ text }</Text>
    </TouchableOpacity>
  );
}