import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles";

import { BPCardDetailTrip, BPCardDetailTrip_2 } from '../components/card';
import BPFab from '../components/FAB';

import BPHeader from "../components/header";

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>

      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate("Home")}
      />

        <Text style={styles.title2}> Nome da Viagem </Text>

        <FlatList
        data={[
          { id: "adf", nome: "Nome da viagem 1" },
        ]}
        renderItem={(doc) => (
          <BPCardDetailTrip name={doc.item.nome} width="85%" height={199} />
        )}
        keyExtractor={(t) => t.id}
      />

        <FlatList
        data={[
          { id: "adf", nome: "Nome da viagem 1" },
        ]}
        renderItem={(doc) => (
          <BPCardDetailTrip_2 name={doc.item.nome} width="85%" height={307} />
        )}
        keyExtractor={(t) => t.id}
      />

        <BPFab/>

    </View>
  );
};
