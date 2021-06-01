import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles";

import { BPCardLocal } from "../components/card";
import BPFab from "../components/FAB";
import BPHeader from "../components/header";

import { TravelRoutes, SpotRoutes } from "../navigation";

export default ({ navigation }) => {
  return (
    <View style={styles.view}>
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate(TravelRoutes.List)}
      />

      <Text style={styles.title2}>Locais</Text>

      <FlatList
        data={[
          { id: "adfqwe", nome: "Nome da viagem 1" },
          { id: "adfxxz", nome: "Nome da viagem 2" },
          { id: "adffdfgy", nome: "Nome da viagem 3" },
          { id: "adfqwee", nome: "Nome da viagem 4" },
        ]}
        renderItem={spot => (
          <BPCardLocal
            width="85%"
            height={100}
            onPress={() => {
              console.log("Pressionou");
              navigation.navigate(SpotRoutes.Detail);
            }}
          />
        )}
        keyExtractor={t => t.id}
      />

      <BPFab />
    </View>
  );
};
