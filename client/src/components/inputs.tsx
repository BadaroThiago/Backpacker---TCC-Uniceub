import React from "react";
import { TextInput } from "react-native";
import { styles } from "../styles";


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

export const BPPasswordInput = ({ onChangeText }) => {
  return (
      <TextInput
        style={styles.input}
        placeholderTextColor="#ccc"
        placeholder="Senha"
        autoCompleteType="password"
        secureTextEntry={true}
        textContentType="password"
        onChangeText={onChangeText}
      />
  );
}
