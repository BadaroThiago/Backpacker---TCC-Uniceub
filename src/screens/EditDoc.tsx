import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { styles } from "../styles";

import MyComponent from '../components/FAB';

import { BPTextInput, BPDescriptionTextInput } from "../components/inputs";
import { BPButton  } from "../components/buttons";
import BPHeader from "../components/header";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNamelField] = useState<string>("");
  const [DescriptionField, setDescriptionField] = useState<string>("");

  return (
    <View style={styles.view}>
      <BPHeader showMenuButton={false} onPress={()=> navigation.navigate('Home')} />

      <Text style={styles.title2}>Editar Documento</Text>

      <BPTextInput
        value={nameField}
        placeholder="Nome"
        onChangeText={(t) => setNamelField(t)}
      />

      <BPDescriptionTextInput
        value={DescriptionField}
        placeholder="Descrição (Opcional)"
        onChangeText={(t) => setDescriptionField(t)}
      />

      <BPButton
        text="Adicionar"
        onPress={()=> navigation.navigate('AddSpent')}
      />

      <MyComponent/>

    </View>
  );
};
