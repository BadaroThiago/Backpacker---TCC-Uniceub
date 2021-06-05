import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { BPGoalChart } from "../charts";
import { BPTextExpenseInfo } from "../expenses/text";

import { styles } from "../../styles";
import { Expense, sumExpenses } from "../../models/expenses";
import { Travel } from "../../models/travel";

interface Props { 
  expenses: [Expense]
  travel: Travel
}

export const BPCardExpensesInfo = ({ expenses, travel }: Props) => {
  return (
    <View>
        <Card
          style={{
            ...styles.card,
            width: "85%",
            alignSelf: "center",
            padding: 10,
            paddingHorizontal: 15,
            marginBottom: 20,
            alignContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <View style={{ marginBottom: 10 }}>
            <BPGoalChart
              goal={travel.orcamento_viagem}
              currentValue={sumExpenses(expenses)}
              title="Meta de gastos"
            />
            <BPGoalChart goal={1500} currentValue={1000} title="Meta diária" />
          </View>
          <View>
            <BPTextExpenseInfo title="Total já gasto:" value={sumExpenses(expenses)} />
            <BPTextExpenseInfo title="Total por viajante:" value={10000} />
          </View>
        </Card>
    </View>
  );
};
