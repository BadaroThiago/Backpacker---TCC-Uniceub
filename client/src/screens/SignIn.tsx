import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles, colorConstants } from "../styles";

import { BPEmailInput, BPPasswordInput } from '../components/inputs';
import { BPButton } from '../components/buttons';

import firebase from "firebase";

export default () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState<string>("");
  const [passwordField, setPasswordField] = useState<string>("");

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

      <BPEmailInput
        onChangeText={t => setEmailField(t)}
      />

      <BPPasswordInput
        onChangeText={t => setPasswordField(t)}
      />

      <BPButton
        text="ENTRAR"
        onPress={login}
      />

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
