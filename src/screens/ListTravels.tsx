import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles";

import { BPCardTravelList } from "../components/cards/BPCardTravelList";
import FabHome from "../components/FAB";

import { TravelRoutes } from "../navigation";
import { Travel, getTravels } from "../api/travel";

export default ({ navigation }) => {
  const [travels, setTravels] = useState<[Travel]>();

  useEffect(() => {
    getTravels()
      .then((res) => {
        console.log(res.data);
        setTravels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Viagens</Text>

      <FlatList
        data={travels}
        renderItem={(t) => (
          <BPCardTravelList
            travel={t.item}
            onPress={() => navigation.navigate(TravelRoutes.Stack)}
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
