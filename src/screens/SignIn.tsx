import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles, colorConstants } from "../styles";

import { BPEmailInput, BPPasswordInput } from "../components/inputs";
import { BPButton } from "../components/buttons";

import firebase from "firebase";

import { StackRoutes } from '../navigation';

export default ({ navigation }) => {
  const [emailField, setEmailField] = useState<string>("");
  const [passwordField, setPasswordField] = useState<string>("");

  let login = () => {
    navigation.navigate(StackRoutes.Home);
    // TODO: DEBUGGGG
    // firebase
      // .auth()
      // .signInWithEmailAndPassword(emailField, passwordField)
      // .then(() => {
        // navigation.navigate("Home");
        // Alert.alert("Bem vindo!");
      // })
      // .catch((err) => {
        // Alert.alert("Falha ao logar", err.message);
      // });

  };

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Entrar</Text>

      <BPEmailInput onChangeText={(t) => setEmailField(t)} />

      <BPPasswordInput
        placeholder="Senha"
        onChangeText={(t) => setPasswordField(t)}
      />

      <BPButton text="ENTRAR" onPress={login} />

      <TouchableOpacity
        style={styles.smallText}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={{ color: colorConstants.WhiteText }}>
          Ainda não possui uma conta?{" "}
        </Text>
        <Text style={{ color: colorConstants.WhiteText, fontWeight: "bold" }}>
          Cadastre-se
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.smallText}
        onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={{ color: colorConstants.WhiteText }}>
          Esqueceu sua senha?{" "}
        </Text>
        <Text style={{ color: colorConstants.WhiteText, fontWeight: "bold" }}>
          Redefinir senha
        </Text>
      </TouchableOpacity>
    </View>
  );
};
