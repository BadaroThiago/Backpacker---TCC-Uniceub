import React, { useContext, useCallback, useState } from "react";
import { Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import BPFab from "../components/FAB";
import BPHeader from "../components/header";
import { TravelContext } from "../context";
import { TravelRoutes } from "../navigation";
import { styles } from "../styles";

import { Travel } from "../models/travel";
import { getTravel } from "../api/travel";

import { BPCardDetailTravel } from "../components/cards/BPCardTravelDetail";
import { BPCardDetailTravel2 } from "../components/cards/BPCardTravelDetail2";

export default ({ navigation }) => {
  const { idViagem } = useContext(TravelContext);
  const [travel, setTravel] = useState<Travel>();

  useFocusEffect(
    useCallback(() => {
      getTravel(idViagem)
        .then(res => setTravel(res.data))
        .catch(err => console.log(err));
      return () => {};
    }, [])
  );

  return travel === undefined ? (
    <View style={styles.view}></View>
  ) : (
    <View style={styles.view}>
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate(TravelRoutes.List)}
      />

      <Text style={styles.title2}>{travel.nome_viagem}</Text>

      <BPCardDetailTravel travel={travel} />
      <BPCardDetailTravel2 travel={travel} />

      <BPFab />
    </View>
  );
};
