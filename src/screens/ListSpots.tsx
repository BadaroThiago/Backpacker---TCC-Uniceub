import React, { useCallback, useContext, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { colorConstants, styles } from "../styles";

import FAB from "../components/FAB";
import BPHeader from "../components/header";

import { TravelRoutes, SpotRoutes } from "../navigation";
import { getSpots } from "../api/spot";
import { useFocusEffect } from "@react-navigation/native";
import { TravelContext } from "../context";
import { Spot } from "../models/spot";
import { BPCardLocal } from "../components/cards/BPCardSpot";

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
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate(TravelRoutes.List)}
      />

      <Text style={styles.title2}>Locais</Text>

      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={spots}
        renderItem={(spot) => (
          <BPCardLocal
            spot={spot.item}
            onPress={() => {
              navigation.navigate(SpotRoutes.Detail, { id_local: spot.item.id_local });
            }}
          />
        )}
        keyExtractor={(t) => t.id_local.toString()}
        ListEmptyComponent={
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: colorConstants.WhiteText,
                fontSize: 18,
              }}
            >
              Nenhum local a ser visitado
            </Text>
          </View>
        }
      />

      <FAB context="spot" />
    </View>
  );
};
