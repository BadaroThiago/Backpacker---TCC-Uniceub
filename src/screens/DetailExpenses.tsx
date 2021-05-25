import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles";

import {
  BPButton,
  BPButtonDelete,
  BPButtonDelete2,
} from "../components/buttons";

import { BPCardLocal } from "../components/card";
import BPFab from "../components/FAB";
import BPHeader from "../components/header";

import { ExpenseRoutes } from "../navigation";

export default ({ navigation }) => {
  return (
    <View style={styles.view}>
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate(ExpenseRoutes.List)}
      />

      <Text style={styles.title2}> Nome Gasto </Text>

      <FlatList
        data={[{ id: "adf", nome: "Nome da viagem 1" }]}
        renderItem={(doc) => (
          <BPCardLocal name={doc.item.nome} width="85%" height={160} />
        )}
        keyExtractor={(t) => t.id}
      />

      <BPButton
        text="VISUALIZAR ANEXO"
        onPress={() => console.log("Visualiza anexo")}
      />
      <BPButtonDelete2
        text="EDITAR"
        onPress={() => navigation.navigate(ExpenseRoutes.Edit)}
      />
      <BPButtonDelete text="EXCLUIR" onPress={() => console.log("Delete")} />

      <BPFab />
    </View>
  );
};
