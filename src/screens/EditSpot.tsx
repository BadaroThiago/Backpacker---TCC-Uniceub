import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";
import React, { useCallback, useContext, useState } from "react";
import {
  Alert,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { editSpot, getSpot } from "../api/spot";
import { BPButton } from "../components/buttons";
import BPHeader from "../components/header";
import {
  BPDateInput,
  BPDescriptionTextInput,
  BPTextInput,
} from "../components/inputs";
import { Spot } from "../models/spot";
import { SpotRoutes } from "../navigation";
import { styles } from "../styles";

export default ({ navigation, route }) => {
  const idLocal = route.params.id_local;

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [id, setId] = useState<number>(0);

  useFocusEffect(
    useCallback(() => {
      getSpot(idLocal)
        .then((res) => {
          let data: Spot = res.data;
          setName(data.nome_local);
          setDescription(data.descricao_local);
          setDate(moment(data.dt_planejada).format("DD/MM/YYYY"));
          setId(data.id_local);
        })
        .catch((err) => console.log(err));
      return () => {};
    }, [])
  );

  const onEditSpot = async () => {
    let spot: Spot = {
      nome_local: name,
      descricao_local: description,
      dt_planejada: date,
      id_local: id,
    };

    editSpot(spot)
      .then(() => {
        console.log("Deu bom");
        navigation.navigate(SpotRoutes.List);
      })
      .catch((err) => Alert.alert("Erro ao atualizar lugar", err));
  };

  return (
    <View style={styles.view}>
      <BPHeader
        onPress={() => navigation.navigate(SpotRoutes.List)}
      />

      <Text style={styles.title2}>Editar local</Text>

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
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>

      <BPButton text="ATUALIZAR" onPress={onEditSpot} />
    </View>
  );
};
