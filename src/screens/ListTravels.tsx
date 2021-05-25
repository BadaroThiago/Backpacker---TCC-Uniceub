import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles";

import { BPCardTravelList } from "../components/card";
import FabHome from "../components/FAB";

import { TravelRoutes } from "../navigation";

export default ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Viagens</Text>

      <FlatList
        data={[
          { id: "adfasdasd", nome: "Nome da viagem 1" },
          { id: "adf", nome: "Nome da viagem 2" },
          { id: "adasdff", nome: "Nome da viagem 3" },
          { id: "aasdasdff", nome: "Nome da viagem 4" },
        ]}
        renderItem={(doc) => (
          <BPCardTravelList
            onPress={() => navigation.navigate(TravelRoutes.Stack)}
            name={doc.item.nome}
            width="85%"
            height={100}
          />
        )}
        keyExtractor={(t) => t.id}
      />

      <FabHome />
    </View>
  );
};
