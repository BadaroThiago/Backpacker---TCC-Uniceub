import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Alert } from "react-native";
import { styles } from "../styles";

import {
  BPEmailInput,
  BPPasswordInput,
  BPTextInput,
} from "../components/inputs";
import { BPButton } from "../components/buttons";
import { BPButtonDel } from "../components/buttons";
import BPHeader from "../components/header";

import { createUser, getUser } from "../api/User";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNamelField] = useState<string>("");
  const [emailField, setEmailField] = useState<string>("");
  const [passwordField, setPasswordField] = useState<string>("");
  const [confirmPasswordField, setConfirmPasswordField] = useState<string>("");

  useEffect(() => {
    getUser().then((res) => {
      setEmailField(res.data.email);
      setNamelField(res.data.nome_usuario);
    });
  }, []);

  return (
    <View style={styles.view}>
      <BPHeader showMenuButton={false} onPress={() => navigation.goBack()} />

      <Text style={styles.title2}>Editar Perfil</Text>

      <BPTextInput
        value={nameField}
        placeholder="Nome"
        onChangeText={(t) => setNamelField(t)}
      />

      <BPEmailInput value={emailField} onChangeText={(t) => setEmailField(t)} />

      <BPPasswordInput
        placeholder="Senha"
        onChangeText={(t) => setPasswordField(t)}
      />

      <BPPasswordInput
        placeholder="Confirme a senha"
        onChangeText={(t) => setConfirmPasswordField(t)}
      />

      <BPButton
        text="SALVAR"
        //   onPress={}
      />

      <BPButtonDel
        text="EXCLUIR"
        //   onPress={}
      />
    </View>
  );
};
