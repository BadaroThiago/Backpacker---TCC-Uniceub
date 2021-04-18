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

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  return (
    <View style={styles.view}>
      <BPHeader showMenuButton={false} onPress={()=> navigation.navigate('Home')} />

      <Text style={styles.title2}>Adicionar Viagem</Text>

      <BPTextInput
        value={name}
        placeholder="Nome"
        onChangeText={(t) => setName(t)}
      />

      <BPDescriptionTextInput
        value={description}
        placeholder="Descrição (Opcional)"
        onChangeText={(t) => setDescription(t)}
      />

      <BPTextInput
        value={budget}
        placeholder="Meta de Gastos (Opcional)"
        onChangeText={(t) => setBudget(t)}
      />


      <BPTextInput
        placeholder="Data de Início (DD/MM/YYYY)"
        onChangeText={t => setStartDate(t)}
      />

      <BPTextInput
        placeholder="Data de Término (DD/MM/YYYY)"
        onChangeText={t => setEndDate(t)}
      />

      <BPButton
        text="Adicionar"
        onPress={()=> navigation.navigate('AddLocal')}
      />

      <FabButton render={navigation} style={{ top : 700, right: 50}}/>
    </View>
  );
};
