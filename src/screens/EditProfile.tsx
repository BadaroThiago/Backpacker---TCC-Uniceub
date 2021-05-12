import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Alert } from "react-native";
import { styles } from "../styles";

import FabButton from "../components/fabButton";

import {
  BPEmailInput,
  BPPasswordInput,
  BPTextInput,
} from "../components/inputs";
import {
  BPButton,
  BPButtonDelete,
  BPButtonDelete2,
} from "../components/buttons";
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
    getUser()
      .then((res) => {
        setEmailField(res.data.email);
        setNamelField(res.data.nome_usuario);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateUser = async () => {
    try {
      let data: UserFormFields = {
        nome_usuario: nameField,
        email: emailField,
        password: passwordField,
        confirmPassword: confirmPasswordField,
      };
      await editUser(data);

      Alert.alert("Atualizado com sucesso!");
      setShouldUpdateUser(false);
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao atualizar dados", err.message);
    }
  };

  const removeUser = async (softDelete = false) => {
    try {
      await deleteUser(softDelete);
      await firebase.auth().currentUser.delete();

      Alert.alert(
        `Conta ${softDelete ? "desativada" : "excluida"} com sucesso!`
      );
      navigation.navigate("SignIn");
    } catch (err) {
      Alert.alert("Erro", err.message);
    }
  };

  const onChangeName = (name) => {
    setNamelField(name);
    setShouldUpdateUser(true);
  };

  const onChangeEmail = (email) => {
    setEmailField(email);
    setShouldUpdateUser(true);
  };

  return (
    <View style={styles.view}>
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate("Home")}
      />

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

      <BPButton text="SALVAR" onPress={updateUser} />

      <BPButtonDelete text="DESATIVAR CONTA" onPress={() => removeUser(true)} />
      <BPButtonDelete2 text="EXCLUIR CONTA" onPress={() => removeUser()} />

      <FabButton render={navigation} style={{ top: 700, right: 50 }} />
    </View>
  );
};
