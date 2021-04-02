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

import { getUser, editUser, UserFormFields } from "../api/User";
import firebase from "firebase";

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

  const updateUser = async () => {
    let user = firebase.auth().currentUser;

    // Caso email ou senha tenham sido alterados
    // TODO: refatorar isso
    if (user.email !== emailField) {
      user.email = emailField;
      await firebase.auth().updateCurrentUser(user);
    } else if (passwordField !== "" && passwordField === confirmPasswordField) {
      await user.updatePassword(passwordField);
    }

    let data: UserFormFields = {};
    data.nome_usuario = nameField;
    data.email = emailField;

    try {
      await editUser(data);
      Alert.alert("Atualizado com sucesso!");
    } catch(err) {
      Alert.alert("Erro ao atualizar dados", err.message);
    }
  }


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
        onPress={updateUser}
      />

      <BPButtonDel
        text="EXCLUIR"
        //   onPress={}
      />
    </View>
  );
};
