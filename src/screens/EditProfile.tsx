import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Alert } from "react-native";
import { styles } from "../styles";

import {
  BPEmailInput,
  BPPasswordInput,
  BPTextInput,
} from "../components/inputs";
import { BPButton, BPButtonDelete, BPButtonDelete2 } from "../components/buttons";
import BPHeader from "../components/header";

import { getUser, editUser, deleteUser, UserFormFields } from "../api/User";
import firebase from "firebase";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNamelField] = useState<string>("");
  const [emailField, setEmailField] = useState<string>("");
  const [passwordField, setPasswordField] = useState<string>("");
  const [confirmPasswordField, setConfirmPasswordField] = useState<string>("");
  const [shouldUpdateUser, setShouldUpdateUser] = useState<boolean>(false);

  useEffect(() => {
    getUser().then((res) => {
      setEmailField(res.data.email);
      setNamelField(res.data.nome_usuario);
    });
  }, []);

  const updateUser = async () => {
    try {
      if (shouldUpdateUser) {
        let data: UserFormFields = {};
        data.nome_usuario = nameField;
        data.email = emailField;
        await editUser(data);
      }

      let user = firebase.auth().currentUser;

      // Caso email ou senha tenham sido alterados
      // TODO: refatorar isso
      if (user.email !== emailField) {
        user.email = emailField;
        await firebase.auth().updateCurrentUser(user);
      } else if (passwordField !== "" && passwordField === confirmPasswordField) {
        await user.updatePassword(passwordField);
      }

      Alert.alert("Atualizado com sucesso!");
      setShouldUpdateUser(false);
    } catch(err) {
      console.log(err);
      Alert.alert("Erro ao atualizar dados", err.message);
    }
  }

  const removeUser = async (softDelete = false) => {
    try {
      await deleteUser(softDelete);
      await firebase.auth().currentUser.delete()

      Alert.alert(`Conta ${softDelete ? "desativada" : "excluida" } com sucesso!`);
      navigation.navigate("SignIn");
    } catch(err) {
      Alert.alert("Erro", err.message);
    }
  }

  const onChangeName = name => {
    setNamelField(name);
    setShouldUpdateUser(true);
  }

  const onChangeEmail = email => {
    setEmailField(email);
    setShouldUpdateUser(true);
  }

  return (
    <View style={styles.view}>
      <BPHeader showMenuButton={false} onPress={() => navigation.goBack()} />

      <Text style={styles.title2}>Editar Perfil</Text>

      <BPTextInput
        value={nameField}
        placeholder="Nome"
        onChangeText={(t) => onChangeName(t)}
      />

      <BPEmailInput value={emailField} onChangeText={(t) => onChangeEmail(t)} />

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

      <BPButtonDelete
        text="DESATIVAR CONTA"
        onPress={() => removeUser(true)}
      />
      <BPButtonDelete2
        text="EXCLUIR CONTA"
        onPress={() => removeUser()}
      />
    </View>
  );
};
