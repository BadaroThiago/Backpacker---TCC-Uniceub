import React, { useCallback, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles";

import {
  BPButton,
  BPButtonDelete,
  BPButtonDelete2,
} from "../components/buttons";

import BPHeader from "../components/header";

import { ExpenseRoutes } from "../navigation";
import { BPCardExpense } from "../components/cards/BPCardExpense";
import { Expense } from "../models/expenses";
import { useFocusEffect } from "@react-navigation/native";
import { getExpense } from "../api/expenses";
import { BPLoadingView2 } from "../screens/Loading";

export default ({ navigation, route }) => {
  const idExpense = route.params.idExpense;
  const [expense, setExpense] = useState<Expense>();
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      getExpense(idExpense)
        .then((res) => {
          setExpense(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
      return () => {};
    }, [])
  );

  return !expense ? (
    <View style={styles.view} />
  ) : (
    <View style={styles.view}>
      <BPHeader onPress={() => navigation.navigate(ExpenseRoutes.List)} />
      <BPLoadingView2 isLoading={isLoading}>
        <Text style={styles.title2}>{expense.nome_gasto}</Text>

        <BPCardExpense expense={expense} />

        <BPButton
          text="VISUALIZAR ANEXO"
          onPress={() => console.log("Visualiza anexo")}
        />
        <BPButtonDelete2
          text="EDITAR"
          onPress={() =>
            navigation.navigate(ExpenseRoutes.Edit, {
              idExpense: expense.id_gasto,
            })
          }
        />
        <BPButtonDelete text="EXCLUIR" onPress={() => console.log("Delete")} />
      </BPLoadingView2>
    </View>
  );
};
