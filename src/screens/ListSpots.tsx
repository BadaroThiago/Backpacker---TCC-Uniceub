import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles";

import { BPCardLocal } from '../components/card';
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

        <Text style={styles.title2}>Locais</Text>

        <FlatList
        data={[
          { id: "adfqwe", nome: "Nome da viagem 1" },
          { id: "adfxxz", nome: "Nome da viagem 2" },
          { id: "adffdfgy", nome: "Nome da viagem 3" },
          { id: "adfqwee", nome: "Nome da viagem 4" },
        ]}
        renderItem={(doc) => (
          <BPCardLocal name={doc.item.nome} width="85%" height={100} />
        )}
        keyExtractor={(t) => t.id}
      />

        <BPFab/>

    </View>
  );
};
