import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { styles } from "../styles";

import { BPEmailInput, BPTextInput } from "../components/inputs";
import { BPButton } from "../components/buttons";
import BPHeader from "../components/header";

import { TravelRoutes } from "../navigation";

export default ({ navigation }) => {
  const [emailField, setEmailField] = useState<string>("");

  return (
    <View style={styles.view}>
      <BPHeader onPress={() => navigation.goBack()} />

      <Text style={styles.title2}>Adicionar Viajante</Text>

      <BPEmailInput
        value={emailField}
        placeholder="E-mail do Viajante"
        onChangeText={t => setEmailField(t)}
      />

      <BPButton
        text="Adicionar"
        onPress={() => navigation.navigate(TravelRoutes.List)}
      />
    </View>
  );
};
