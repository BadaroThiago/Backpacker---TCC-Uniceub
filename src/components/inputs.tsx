import React from "react";
import { TextInput } from "react-native";
import { styles } from "../styles";

import { TextInputMask } from "react-native-masked-text";

export const BPDateInput = ({ value, placeholder, onChangeText }) => {
  return (
    <TextInputMask
      style={styles.input}
      placeholderTextColor="#ccc"
      placeholder={placeholder}
      onChangeText={onChangeText}
      textContentType="none"
      autoCorrect={false}
      value={value}
      type="datetime"
      options={{ format: "DD/MM/YYYY" }}
    />
  );
};

export const BPTextInput = ({ value, placeholder, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#ccc"
      placeholder={placeholder}
      onChangeText={onChangeText}
      textContentType="none"
      autoCorrect={false}
      value={value}
    />
  );
};

export const BPBudgetInput = ({ value, placeholder, onChangeText }) => {
  return (
    <TextInputMask
      style={styles.input}
      placeholderTextColor="#ccc"
      placeholder={placeholder}
      onChangeText={onChangeText}
      textContentType="none"
      autoCorrect={false}
      value={value}
      type="money"
    />
  );
};

export const BPDescriptionTextInput = ({
  value,
  placeholder,
  onChangeText,
}) => {
  return (
    <TextInput
      style={styles.descriptionInput}
      placeholderTextColor="#ccc"
      placeholder={placeholder}
      onChangeText={onChangeText}
      textContentType="none"
      autoCorrect={false}
      value={value}
      multiline={true}
      textAlignVertical="top"
      numberOfLines={10}
    />
  );
};

export const BPEmailInput = ({ value, onChangeText }) => {
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
      value={value}
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
};
