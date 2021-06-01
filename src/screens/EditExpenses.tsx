import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { styles } from "../styles";

import FAB from "../components/FAB";

import { BPTextInput, BPDescriptionTextInput } from "../components/inputs";
import { BPButton } from "../components/buttons";
import BPHeader from "../components/header";

import { DocRoutes } from "../navigation";

export default ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <View style={styles.view}>
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate(DocRoutes.List)}
      />

      <Text style={styles.title2}>Editar Gastos</Text>

      <BPTextInput
        value={name}
        placeholder="Nome"
        onChangeText={t => setName(t)}
      />

      <BPDescriptionTextInput
        value={description}
        placeholder="Descrição (Opcional)"
        onChangeText={t => setDescription(t)}
      />

      <BPButton
        text="Adicionar"
        onPress={() => navigation.navigate(DocRoutes.List)}
      />

      <FAB />
    </View>
  );
};
