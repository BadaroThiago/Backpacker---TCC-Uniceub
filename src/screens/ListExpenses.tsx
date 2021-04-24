import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BPHeader from "../components/header";
import { BPCardDocsList } from "../components/card";
import { styles } from "../styles";

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate("Home")}
      />

      <Text style={styles.title2}>Lista de gastos</Text>

      <FlatList
        data={[
          { id: "adf", nome: "Nome do documento 1" },
          { id: "adfasdfk", nome: "Nome do documento 2" },
          { id: "adasdff", nome: "Nome do documento 3" },
        ]}
        renderItem={(doc) => (
          <BPCardDocsList name={doc.item.nome} width="85%" height={100} />
        )}
        keyExtractor={(t) => t.id}
      />
    </View>
  );
};
