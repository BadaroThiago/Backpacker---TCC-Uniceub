import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles";

import { BPCardDetailTrip, BPCardDetailTrip_2 } from "../components/card";
import BPFab from "../components/FAB";

import BPHeader from "../components/header";

import { TravelRoutes } from "../navigation";
import { TravelContext } from "../context";

export default ({ navigation }) => {
  const id_viagem = useContext(TravelContext);
  console.log(id_viagem);

  return (
    <View style={styles.view}>
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate(TravelRoutes.List)}
      />

      <Text style={styles.title2}> Nome da Viagem </Text>

      <BPCardDetailTrip description="adsfasdf" width="85%" height={200} />
      <BPCardDetailTrip_2 width="85%" height={310} />

      <BPFab />
    </View>
  );
};
