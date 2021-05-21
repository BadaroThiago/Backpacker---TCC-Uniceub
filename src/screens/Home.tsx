import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles";

import { BPCardTravelList } from '../components/card';
import FabHome from '../components/FAB';

export default () => {
  const navigation = useNavigation();

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
          <BPCardTravelList name={doc.item.nome} width="85%" height={100} />
        )}
        keyExtractor={(t) => t.id}
      />

        <FabHome/>

    </View>
  );
};
