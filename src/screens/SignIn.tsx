import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles, colorConstants } from "../styles";

import { BPEmailInput, BPPasswordInput } from "../components/inputs";
import { BPButton } from "../components/buttons";
import { BPLoadingView } from "./Loading";

import firebase from "firebase";

import { StackRoutes, AuthRoutes } from "../navigation";
import { getToken, setToken } from "../api/Auth";

export default ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getToken()
      .then(() => {
        navigation.navigate(StackRoutes.Home);
      })
      .catch((error) => {
        console.log("SignIn:", error);
      });
  }, []);

  let login = async () => {
    setIsLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      await setToken(email, password);
      navigation.navigate(StackRoutes.Home);
    } catch (error) {
      console.log(error);
      Alert.alert("Falha ao logar", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.view}>
      <BPLoadingView isLoading={isLoading}>
        <Text style={styles.title}>Entrar</Text>

        <BPEmailInput
          value={email}
          onChangeText={(t) => setEmail(t)}
          placeholder="Email"
        />

        <BPPasswordInput
          placeholder="Senha"
          onChangeText={(t: string) => setPassword(t)}
        />

        <BPButton text="ENTRAR" onPress={login} />

        <TouchableOpacity
          style={styles.smallText}
          onPress={() => navigation.navigate(AuthRoutes.SignUp)}
        >
          <Text style={{ color: colorConstants.WhiteText }}>
            Ainda não possui uma conta?{" "}
          </Text>
          <Text style={{ color: colorConstants.WhiteText, fontWeight: "bold" }}>
            Cadastre-se
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.smallText}
          onPress={() => navigation.navigate(AuthRoutes.ResetPassword)}
        >
          <Text style={{ color: colorConstants.WhiteText }}>
            Esqueceu sua senha?{" "}
          </Text>
          <Text style={{ color: colorConstants.WhiteText, fontWeight: "bold" }}>
            Redefinir senha
          </Text>
        </TouchableOpacity>
      </BPLoadingView>
    </View>
  );
};
