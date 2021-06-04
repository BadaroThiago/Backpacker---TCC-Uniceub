import React, { useCallback, useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
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
import { deleteExpense, getExpense } from "../api/expenses";
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

  const onDelete = async () => {
    Alert.alert(
      "Deletar local",
      `Deseja mesmo excluir o gasto ${expense.nome_gasto}?`,
      [
        {
          onPress: async () => {
            deleteExpense(idExpense)
              .then(() => navigation.navigate(ExpenseRoutes.List))
              .catch(err => console.log(err));
          },
          text: "Sim",
          style: "destructive",
        },
        { onPress: () => {}, text: "Não" },
      ]
    );
  };

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
        <BPButtonDelete text="EXCLUIR" onPress={onDelete} />
      </BPLoadingView2>
    </View>
  );
};
