import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useContext, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getTravels, Travel } from "../api/travel";
import { BPCardTravelList } from "../components/cards/BPCardTravelList";
import FabHome from "../components/FAB";
import { TravelRoutes } from "../navigation";
import { styles } from "../styles";

import { TravelContext } from "../context";

export default ({ navigation }) => {
  const [travels, setTravels] = useState<[Travel]>();

  useFocusEffect(
    useCallback(() => {
      getTravels()
        .then((res) => setTravels(res.data))
        .catch((err) => console.log(err));
      return () => {};
    }, [])
  );

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Viagens</Text>

      <FlatList
        data={travels}
        renderItem={(t) => (
          <BPCardTravelList
            travel={t.item}
            onPress={() => {
              navigation.navigate(TravelRoutes.Stack, {
                id_viagem: t.item.id_viagem,
              });
            }}
            width="85%"
            height={100}
          />
        )}
        keyExtractor={(t) => t.id_viagem.toString()}
      />

      <FabHome />
    </View>
  );
};
