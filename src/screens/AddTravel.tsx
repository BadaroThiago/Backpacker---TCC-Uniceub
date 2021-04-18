import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Alert } from "react-native";
import { styles } from "../styles";

import FabButton from '../components/fabButton'

import { BPTextInput, BPDescriptionTextInput } from "../components/inputs";
import { BPButton  } from "../components/buttons";
import BPHeader from "../components/header";

export default () => {
  const navigation = useNavigation();

  const [nameField, setNamelField] = useState<string>("");
  const [DescriptionField, setDescriptionField] = useState<string>("");
  const [SpentField, setSpentField] = useState<string>("");
  const [dateField, setDateField] = useState<string>("");
  const [dateTField, setDateTField] = useState<string>("");

  return (
    <View style={styles.view}>
      <BPHeader showMenuButton={false} onPress={()=> navigation.navigate('Home')} />

      <Text style={styles.title2}>Adicionar Viagem</Text>

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

      <BPTextInput
        value={SpentField}
        placeholder="Meta de Gastos (Opcional)"
        onChangeText={(t) => setSpentField(t)}
      />


      <BPTextInput
        placeholder="Data de Início (DD/MM/YYYY)"
        onChangeText={t => setDateField(t)}
      />

      <BPTextInput
        placeholder="Data de Término (DD/MM/YYYY)"
        onChangeText={t => setDateTField(t)}
      />

      <BPButton
        text="Adicionar"
        onPress={()=> navigation.navigate('AddLocal')}
      />

      <FabButton render={navigation} style={{ top : 700, right: 50}}/>

    </View>
  );
};