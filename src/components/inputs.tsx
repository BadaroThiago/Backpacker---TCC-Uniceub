import React from "react";
import { TextInput } from "react-native";
import { styles } from "../styles";


export const BPTextInput = ({ placeholder, onChangeText }) => {
    return (
      <TextInput
        style={styles.input}
        placeholderTextColor="#ccc"
        placeholder={placeholder}
        onChangeText={onChangeText}
        textContentType="none"
        autoCorrect={false}
      />
    );
};

export const BPEmailInput = ({ onChangeText }) => {
    return (
      <TextInput
        style={styles.input}
        placeholderTextColor="#ccc"
        placeholder="Email"
        onChangeText={onChangeText}
        textContentType="emailAddress"
        autoCompleteType="email"
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
      />
    );
};

export const BPPasswordInput = ({ placeholder, onChangeText }) => {
  return (
      <TextInput
        style={styles.input}
        placeholderTextColor="#ccc"
        placeholder={placeholder}
        autoCompleteType="password"
        secureTextEntry={true}
        textContentType="password"
        onChangeText={onChangeText}
      />
  );
}
