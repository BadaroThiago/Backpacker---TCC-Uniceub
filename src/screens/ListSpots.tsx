import React, { useCallback, useContext, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles";

import FAB from "../components/FAB";
import BPHeader from "../components/header";

import { TravelRoutes, SpotRoutes } from "../navigation";
import { getSpots } from "../api/spot";
import { useFocusEffect } from "@react-navigation/native";
import { TravelContext } from "../context";
import { Spot } from "../models/spot";
import { BPCardLocal } from "../components/cards/BPCardSpot";
import { BPEmptyListView } from '../components/emptyList';

export default ({ navigation }) => {
  const { idViagem } = useContext(TravelContext);
  const [spots, setSpots] = useState<[Spot]>();

  useFocusEffect(
    useCallback(() => {
      getSpots(idViagem)
        .then((res) => {
          setSpots(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return () => {};
    }, [])
  );

  return (
    <View style={styles.view}>
      <BPHeader onPress={() => navigation.navigate(TravelRoutes.List)} />

      <Text style={styles.title2}>Locais</Text>

      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1 }}
        data={spots}
        renderItem={(spot) => (
          <BPCardLocal
            spot={spot.item}
            onPress={() => {
              navigation.navigate(SpotRoutes.Detail, {
                id_local: spot.item.id_local,
              });
            }}
          />
        )}
        keyExtractor={(t) => t.id_local.toString()}
        ListEmptyComponent={<BPEmptyListView text="Nenhum local adicionado"/>}
      />

      <FAB context="spot" />
    </View>
  );
};
