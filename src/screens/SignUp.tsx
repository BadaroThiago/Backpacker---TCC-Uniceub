import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createUser } from "../api/User";
import { BPButton } from "../components/buttons";
import BPHeader from "../components/header";
import {
  BPEmailInput,
  BPPasswordInput,
  BPTextInput,
} from "../components/inputs";
import { styles } from "../styles";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNamelField] = useState<string>("");
  const [dateField, setDateField] = useState<string>("");
  const [emailField, setEmailField] = useState<string>("");
  const [passwordField, setPasswordField] = useState<string>("");
  const [confirmPasswordField, setConfirmPasswordField] = useState<string>("");

  let signIn = async () => {
    createUser(nameField, emailField, passwordField, dateField)
      .then(() => {
        navigation.navigate("SignIn");
        Alert.alert("Bem vindo!");
      })
      .catch(err => {
        Alert.alert("Falha ao logar", err.message);
      });
  };

  return (
    <View style={styles.view}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView>
          <BPHeader
            showMenuButton={false}
            onPress={() => navigation.goBack()}
          />

          <Text style={styles.title2}>Cadastrar</Text>

          <BPTextInput
            placeholder="Nome"
            onChangeText={t => setNamelField(t)}
            value={undefined}
          />

          <BPTextInput
            placeholder="Data de Nascimento (DD/MM/YYYY)"
            onChangeText={t => setDateField(t)}
            value={undefined}
          />

          <BPEmailInput onChangeText={t => setEmailField(t)} />

          <BPPasswordInput
            placeholder="Senha"
            onChangeText={t => setPasswordField(t)}
          />

          <BPPasswordInput
            placeholder="Confirme a senha"
            onChangeText={t => setConfirmPasswordField(t)}
          />

          <BPButton text="CRIAR CONTA" onPress={signIn} />
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};
