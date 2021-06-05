import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Alert } from "react-native";
import { styles, colorConstants } from "../styles";

import BPHeader from "../components/header";
import { BPEmailInput } from "../components/inputs";
import { BPButton } from "../components/buttons";

import firebase from "firebase";

export default () => {
  let navigation = useNavigation();

  let [email, setEmail] = useState("");

  let sendRecoverEmail = async () => {
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          "Email enviado",
          `Foi enviado um email para ${email} com as instruções para recuperar a senha.`
        );

        navigation.navigate("SignIn");
      })
      .catch(err => {
        Alert.alert("Falha ao enviar email", err.message);
      });
  };

  return (
    <View style={styles.view}>
      <BPHeader showMenuButton={false} onPress={() => navigation.goBack()} />

      <Text style={styles.title2}>Redefinir senha</Text>

      <View style={styles.smallText}>
        <Text
          style={{
            color: colorConstants.WhiteText,
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          Será enviado para o email fornecido abaixo um link para redefinir a
          senha da conta.
        </Text>
      </View>

      <BPEmailInput onChangeText={t => setEmail(t)} />

      <BPButton text="REDEFINIR SENHA" onPress={sendRecoverEmail} />
    </View>
  );
};
