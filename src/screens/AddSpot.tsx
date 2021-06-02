import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "../styles";

import {
  BPTextInput,
  BPDescriptionTextInput,
  BPDateInput,
} from "../components/inputs";
import { BPButton } from "../components/buttons";
import BPHeader from "../components/header";

import { SpotRoutes } from "../navigation";
import { Spot } from "../models/spot";
import { TravelContext } from "../context";
import { createSpot } from "../api/spot";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const { idViagem } = useContext(TravelContext);

  const addSpot = async () => {
    let spot: Spot = {
      nome_local: name,
      descricao_local: description,
      dt_planejada: date,
      id_viagem: idViagem,
    };

    createSpot(spot)
      .then(() => {
        navigation.navigate(SpotRoutes.List);
      })
      .catch((err) => {
        Alert.alert("Erro ao criar local", err);
      });
  };

  return (
    <View style={styles.view}>
      <BPHeader
        onPress={() => navigation.navigate(SpotRoutes.List)}
      />

      <Text style={styles.title2}>Adicionar local</Text>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView>
          <BPTextInput
            value={name}
            placeholder="Nome"
            onChangeText={(t: string) => setName(t)}
          />

          <BPDescriptionTextInput
            value={description}
            placeholder="Descrição (Opcional)"
            onChangeText={(t: string) => setDescription(t)}
          />

          <BPDateInput
            placeholder="Data de visita (DD/MM/YYYY)"
            onChangeText={(t: string) => setDate(t)}
            value={date}
          />

          <BPButton text="ADICIONAR" onPress={addSpot} />
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};
