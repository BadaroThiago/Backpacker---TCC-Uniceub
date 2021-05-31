import React from "react";
import { View, Text, FlatList } from "react-native";

import BPHeader from "../components/header";
import { BPCardExpenseList, BPCardExpensesInfo } from "../components/card";
import { styles } from "../styles";

import { TravelRoutes, ExpenseRoutes } from "../navigation";

export default ({ navigation }) => {
  return (
    <View style={styles.view}>
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate(TravelRoutes.List)}
      />

      <Text style={styles.title2}>Gastos</Text>

      <BPCardExpensesInfo width="85%" />

      <FlatList
        data={[
          { id: "adf", nome: "Nome do gasto 1" },
          { id: "adfasdfk", nome: "Nome do gasto 2" },
          { id: "adasdff", nome: "Nome do gasto 3" },
          { id: "aasdasdff", nome: "Nome do gasto 3" },
          { id: "adaasdsdff", nome: "Nome do gasto 3" },
          { id: "adasddsfa", nome: "Nome do gasto 3" },
          { id: "adasdfdddf", nome: "Nome do gasto 3" },
          { id: "adasdfaaaaaaaf", nome: "Nome do gasto 3" },
        ]}
        renderItem={(doc) => (
          <BPCardExpenseList
            onPress={() => navigation.navigate(ExpenseRoutes.Detail)}
            name={doc.item.nome}
            width="85%"
            height={60}
          />
        )}
        keyExtractor={(t) => t.id}
        ListHeaderComponent={
          <Text style={styles.listHeader}>Todos os gastos</Text>
        }
      />
    </View>
  );
};
