import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "../styles";

import FAB from "../components/FAB";

import {
  BPTextInput,
  BPDateInput,
  BPDescriptionTextInput,
} from "../components/inputs";
import { BPButton } from "../components/buttons";
import BPHeader from "../components/header";

import { Travel, createTravel } from "../api/travel";

import { TravelRoutes } from "../navigation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const addTravel = async () => {
    let travelData: Travel = {
      nome_viagem: name,
      descricao: description,
      orcamento_viagem: budget,
      dt_inicio: startDate,
      dt_fim: endDate,
    };

    createTravel(travelData)
      .then(() => {
        Alert.alert("Criado viagem com sucesso!");
        navigation.navigate(TravelRoutes.List);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", err.message);
        navigation.navigate(TravelRoutes.List);
      });
  };

  return (
    <View style={styles.view}>
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate(TravelRoutes.List)}
      />

      <Text style={styles.title2}>Adicionar Viagem</Text>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView>
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

          <BPDateInput
            placeholder="Data de Início (DD/MM/YYYY)"
            onChangeText={(t) => setStartDate(t)}
            value={startDate}
          />

          <BPDateInput
            placeholder="Data de Término (DD/MM/YYYY)"
            onChangeText={(t) => setEndDate(t)}
            value={endDate}
          />

          <BPButton text="Adicionar" onPress={addTravel} />
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
      <FAB />
    </View>
  );
};
