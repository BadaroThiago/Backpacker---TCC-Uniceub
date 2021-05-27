import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getTravels, Travel } from "../api/travel";
import { BPCardTravelList } from "../components/cards/BPCardTravelList";
import FabHome from "../components/FAB";
import { TravelRoutes } from "../navigation";
import { styles } from "../styles";



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
