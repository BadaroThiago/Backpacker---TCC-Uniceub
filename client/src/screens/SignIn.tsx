import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles, colorConstants } from "../styles";

import firebase from "firebase";

export default () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  let login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailField, passwordField)
      .then(() => {
        Alert.alert("Bem vindo!");
      })
      .catch(err => {
        Alert.alert("Falha ao logar", err.message);
      });
  };

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Entrar</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor="#ccc"
        placeholder="Email"
        onChangeText={t => setEmailField(t)}
        textContentType="emailAddress"
        autoCompleteType="email"
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#ccc"
        placeholder="Senha"
        autoCompleteType="password"
        secureTextEntry={true}
        textContentType="password"
        onChangeText={t => setPasswordField(t)}
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.smallText}>
        <Text style={{ color: colorConstants.WhiteText }}>
          Ainda não possui uma conta?{" "}
        </Text>
        <Text style={{ color: colorConstants.WhiteText, fontWeight: "bold" }}>
          Cadastre-se
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.smallText}>
        <Text style={{ color: colorConstants.WhiteText }}>
          Esqueceu sua senha?{" "}
        </Text>
        <Text style={{ color: colorConstants.WhiteText, fontWeight: "bold" }}>
          Recuperar senha
        </Text>
      </TouchableOpacity>
    </View>
  );
};
