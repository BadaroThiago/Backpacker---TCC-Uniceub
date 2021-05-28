import React, { useState, useCallback, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
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
  BPDescriptionTextInput,
  BPDateInput,
  BPBudgetInput,
} from "../components/inputs";
import { BPButton } from "../components/buttons";
import BPHeader from "../components/header";
import { TravelContext } from "../context";
import { Travel, getTravel, editTravel } from "../api/travel";
import { formatDate } from "../helpers/utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TravelRoutes } from "../navigation";

export default ({ navigation }) => {
  const { idViagem } = useContext(TravelContext);

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useFocusEffect(
    useCallback(() => {
      getTravel(idViagem)
        .then((res) => {
          let data: Travel = res.data;
          setName(data.nome_viagem);
          setDescription(data.descricao);
          setBudget(data.orcamento_viagem as string);
          setStartDate(formatDate(data.dt_inicio as Date));
          setEndDate(formatDate(data.dt_fim as Date));
        })
        .catch((err) => console.log(err));
      return () => {};
    }, [])
  );

  const onEditTravel = async () => {
    let travel: Travel = {
      nome_viagem: name,
      descricao: description,
      orcamento_viagem: budget,
      dt_inicio: startDate,
      dt_fim: endDate,
      id_viagem: idViagem
    };

    editTravel(travel)
      .then(() => {
        Alert.alert("Editado com sucesso");
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Erro ao editar viagem");
        navigation.goBack();
      });
  };

  return (
    <View style={styles.view}>
      <BPHeader showMenuButton={false} onPress={() => navigation.goBack()} />

      <Text style={styles.title2}>Editar Viagem</Text>

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

          <BPBudgetInput
            value={budget}
            placeholder="Meta de Gastos (Opcional)"
            onChangeText={(t) => setBudget(t)}
          />

          <BPDateInput
            value={startDate}
            placeholder="Data de Início (DD/MM/YYYY)"
            onChangeText={(t) => setStartDate(t)}
          />

          <BPDateInput
            value={endDate}
            placeholder="Data de Término (DD/MM/YYYY)"
            onChangeText={(t) => setEndDate(t)}
          />

          <BPButton text="Atualizar" onPress={onEditTravel} />
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
      <FAB />
    </View>
  );
};
