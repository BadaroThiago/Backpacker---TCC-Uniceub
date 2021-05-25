import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
// import { useNavigation } from "@react-navigation/native";

import BPHeader from "../components/header";
import { BPCardDocsList } from "../components/card";
import { styles } from "../styles";

import { TravelRoutes } from '../navigation';

export default ({ navigation }) => {
  // const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate(TravelRoutes.List)}
      />

      <Text style={styles.title2}>Documentos</Text>

      <FlatList
        data={[
          { id: "adf", nome: "Nome do documento bem grande 1" },
          { id: "adfasdfk", nome: "Nome do documento bem grande que deveria ajustar o tamanho de acordo" },
          { id: "adasdff", nome: "Nome do documento 3" },
          { id: "aasdasdff", nome: "Nome do documento 3" },
          { id: "adaasdsdff", nome: "Nome do documento 3" },
          { id: "adasddsfa", nome: "Nome do documento 3" },
          { id: "adasdfdddf", nome: "Nome do documento 3" },
          { id: "adasdfaaaaaaaf", nome: "Nome do documento 3" },
        ]}
        renderItem={(doc) => (
          <BPCardDocsList name={doc.item.nome} width="85%" height={60} />
        )}
        keyExtractor={(t) => t.id}
      />
    </View>
  );
};
