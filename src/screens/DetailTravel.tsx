import React, { useContext, useCallback, useState } from "react";
import { Text, View } from "react-native";
import { BPCardDetailTrip, BPCardDetailTrip_2 } from "../components/card";
import { useFocusEffect } from "@react-navigation/native";
import BPFab from "../components/FAB";
import BPHeader from "../components/header";
import { TravelContext } from "../context";
import { TravelRoutes } from "../navigation";
import { styles } from "../styles";

import { Travel, getTravel } from "../api/travel";

export default ({ navigation }) => {
  const { idViagem } = useContext(TravelContext);
  const [travel, setTravel] = useState<Travel>();

  useFocusEffect(
    useCallback(() => {
      getTravel(idViagem)
        .then((res) => setTravel(res.data))
        .catch((err) => console.log(err));
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

      <BPCardDetailTrip description="adsfasdf" width="85%" height={200} />
      <BPCardDetailTrip_2 width="85%" height={310} />

      <BPFab />
    </View>
  );
};
