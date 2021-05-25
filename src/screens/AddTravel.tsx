import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Alert } from "react-native";
import { styles } from "../styles";

import FAB from '../components/FAB';

import { BPTextInput, BPDescriptionTextInput } from "../components/inputs";
import { BPButton } from "../components/buttons";
import BPHeader from "../components/header";

import { TravelFormFields, createTravel } from "../api/travel";
import moment from "moment";

import { StackRoutes, TravelRoutes } from '../navigation';

export default ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const addTravel = async () => {
    let travel: TravelFormFields = {
      nome_viagem: name,
      descricao: description,
      dt_inicio: moment(startDate, "DD/MM/YYYY").toDate(),
      dt_fim: moment(endDate, "DD/MM/YYYY").toDate(),
      orcamento_viagem: Number.parseFloat(budget),
    };

    createTravel(travel)
      .then(() => {
        Alert.alert("Criado viagem com sucesso!");
        navigation.navigate(TravelRoutes.Stack);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", err.message);
        navigation.navigate(TravelRoutes.Stack);
      });
  };

  return (
    <View style={styles.view}>
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate(TravelRoutes.List)}
      />

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
        onChangeText={(t) => setStartDate(t)}
      />

      <BPTextInput
        placeholder="Data de Término (DD/MM/YYYY)"
        onChangeText={(t) => setEndDate(t)}
      />

      <BPButton text="Adicionar" onPress={addTravel} />

      <FAB/>
    </View>
  );
};
