import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { styles } from "../styles";

import FAB from '../components/FAB';

import { BPTextInput, BPDescriptionTextInput } from "../components/inputs";
import { BPButton  } from "../components/buttons";
import BPHeader from "../components/header";

import { TravelRoutes } from '../navigation';

export default ({ navigation }) => {
  const [nameField, setNamelField] = useState<string>("");
  const [DescriptionField, setDescriptionField] = useState<string>("");

  return (
    <View style={styles.view}>
      <BPHeader showMenuButton={false} onPress={()=> navigation.navigate(TravelRoutes.List)} />

      <Text style={styles.title2}>Adicionar Documento</Text>

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

      <FAB/>

    </View>
  );
};
