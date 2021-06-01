import React, { useCallback, useContext, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

import {
  BPButton,
  BPButtonDelete,
  BPButtonDelete2,
} from "../components/buttons";

import BPHeader from "../components/header";

import { SpotRoutes } from "../navigation";
import { TravelContext } from "../context";
import { useFocusEffect } from "@react-navigation/native";
import { Spot } from "../models/spot";
import { getSpot } from "../api/spot";
import { BPCardSpotDetail } from "../components/cards/BPCardSpotDetail";

export default ({ navigation }) => {
  const { idViagem } = useContext(TravelContext);
  const [spot, setSpot] = useState<Spot>();

  useFocusEffect(
    useCallback(() => {
      getSpot(idViagem)
        .then((res) => setSpot(res.data))
        .catch((err) => console.log(err));
      return () => {};
    }, [])
  );

  return spot === undefined ? (
    <View style={styles.view}></View>
  ) : (
    <View style={styles.view}>
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate(SpotRoutes.List)}
      />

      <Text style={styles.title2}>{spot.nome_local}</Text>

      <BPCardSpotDetail spot={spot} />

      <BPButton
        text="MARCAR COMO VISITADO"
        onPress={() => navigation.navigate(SpotRoutes.List)}
      />
      <BPButtonDelete2
        text="EDITAR LOCAL"
        onPress={() => navigation.navigate(SpotRoutes.Edit)}
      />
      <BPButtonDelete
        text="EXCLUIR"
        onPress={() => navigation.navigate(SpotRoutes.List)}
      />
    </View>
  );
};
