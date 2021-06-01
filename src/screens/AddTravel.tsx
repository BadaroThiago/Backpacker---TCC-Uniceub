import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createTravel } from "../api/travel";
import { BPButton } from "../components/buttons";
import FAB from "../components/FAB";
import BPHeader from "../components/header";
import {
  BPBudgetInput,
  BPDateInput,
  BPDescriptionTextInput,
  BPTextInput,
} from "../components/inputs";
import { Travel } from "../models/travel";
import { TravelRoutes } from "../navigation";
import { styles } from "../styles";

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
      .catch(err => {
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
            onChangeText={t => setName(t)}
          />

          <BPDescriptionTextInput
            value={description}
            placeholder="Descrição (Opcional)"
            onChangeText={t => setDescription(t)}
          />

          <BPBudgetInput
            value={budget}
            placeholder="Meta de Gastos (Opcional)"
            onChangeText={t => setBudget(t)}
          />

          <BPDateInput
            value={startDate}
            placeholder="Data de Início (DD/MM/YYYY)"
            onChangeText={t => setStartDate(t)}
          />

          <BPDateInput
            value={endDate}
            placeholder="Data de Término (DD/MM/YYYY)"
            onChangeText={t => setEndDate(t)}
          />
          <BPButton text="Adicionar" onPress={addTravel} />
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
      <FAB />
    </View>
  );
};
