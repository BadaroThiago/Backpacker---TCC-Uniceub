import React, { useCallback, useContext, useState } from "react";
import { View, Text, FlatList } from "react-native";

import BPHeader from "../components/header";
import { styles } from "../styles";

import { TravelRoutes, ExpenseRoutes } from "../navigation";
import { Expense } from "../models/expenses";
import { useFocusEffect } from "@react-navigation/native";
import { getExpenses } from "../api/expenses";
import { TravelContext } from "../context";
import { BPCardExpenseList } from "../components/cards/BPCardExpenseList";
import { BPCardExpensesInfo } from "../components/cards/BPCardExpenseInfo";
import { Travel } from "../models/travel";
import { BPLoadingView2 } from "../screens/Loading";
import FAB from "../components/FAB";
import { BPEmptyListView } from "../components/emptyList";

export default ({ navigation }) => {
  const { idViagem } = useContext(TravelContext);
  const [expenses, setExpenses] = useState<[Expense]>();
  const [travel, setTravel] = useState<Travel>();
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      getExpenses(idViagem)
        .then((res) => {
          setExpenses(res.expense);
          setTravel(res.travel);
        })
        .catch((err) => {
          console.log(err);
        });
      setIsLoading(false);
      return () => {};
    }, [])
  );

  return (
    <View style={styles.view}>
      <BPLoadingView2 isLoading={isLoading}>
        <BPHeader onPress={() => navigation.navigate(TravelRoutes.List)} />
        <Text style={styles.title2}>Gastos</Text>

        {travel && expenses ? (
          <View>
            <BPCardExpensesInfo travel={travel} expenses={expenses} />

            <FlatList
              data={expenses}
              contentContainerStyle={{ flexGrow: 1 }}
              renderItem={(expense) => (
                <BPCardExpenseList
                  expense={expense.item}
                  onPress={() =>
                    navigation.navigate(ExpenseRoutes.Detail, {
                      idExpense: expense.item.id_gasto,
                    })
                  }
                />
              )}
              keyExtractor={(t) => t.id_gasto.toString()}
              ListHeaderComponent={
                <Text style={styles.listHeader}>Todos os gastos</Text>
              }
              ListEmptyComponent={
                <BPEmptyListView
                  text="Nenhum gasto cadastrado"
                  style={{ fontWeight: "normal", fontSize: 16 }}
                />
              }
            />
          </View>
        ) : (
          <View />
        )}

        <FAB context="expense" />
      </BPLoadingView2>
    </View>
  );
};
