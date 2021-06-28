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
import { BPLoadingView } from "../screens/Loading";
import { BPButton } from "../components/buttons";
import BPHeader from "../components/header";
import {
  BPDateInput,
  BPEmailInput,
  BPPasswordInput,
  BPTextInput,
} from "../components/inputs";
import { styles } from "../styles";
import { StackRoutes } from "../navigation";
import firebase from "firebase";
import { setToken } from "../api/Auth";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNamelField] = useState<string>("");
  const [dateField, setDateField] = useState<string>("");
  const [emailField, setEmailField] = useState<string>("");
  const [passwordField, setPasswordField] = useState<string>("");
  // const [confirmPasswordField, setConfirmPasswordField] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let signUp = async () => {
    setIsLoading(true);
    try {
      await createUser(nameField, emailField, passwordField, dateField);
      await firebase.auth().signInWithEmailAndPassword(emailField, passwordField);
      await setToken(emailField, passwordField);
      navigation.navigate(StackRoutes.Home);
      Alert.alert("Bem vindo!");
    } catch (err) {
      console.log("SignUp:", err);
      Alert.alert("Falha ao criar conta", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.view}>
      <BPLoadingView isLoading={isLoading}>
        <BPHeader onPress={() => navigation.goBack()} />

        <Text style={styles.title2}>Cadastrar</Text>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAwareScrollView>
            <BPTextInput
              placeholder="Nome"
              onChangeText={(t: string) => setNamelField(t)}
              value={undefined}
            />

            <BPDateInput
              placeholder="Data de Nascimento (DD/MM/YYYY)"
              onChangeText={(t: string) => setDateField(t)}
              value={dateField}
            />

            <BPEmailInput
              placeholder="Email"
              onChangeText={(t: string) => setEmailField(t)}
              value={emailField}
            />

            <BPPasswordInput
              placeholder="Senha"
              onChangeText={(t: string) => setPasswordField(t)}
            />

            <BPButton text="CRIAR CONTA" onPress={signUp} />
          </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
      </BPLoadingView>
    </View>
  );
};
