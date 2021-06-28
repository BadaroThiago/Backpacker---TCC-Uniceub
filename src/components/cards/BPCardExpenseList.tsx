import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import { Expense } from "../../models/expenses";
import { styles } from "../../styles";
import { BPTextExpenseInfo } from "../expenses/text";

interface Props {
  expense: Expense;
  onPress: any;
}

export const BPCardExpenseList = ({ expense, onPress }: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Card
          style={{
            ...styles.card,
            height: 60,
            width: "85%",
            alignSelf: "center",
            padding: 10,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignContent: "flex-start",
              height: "100%",
            }}
          >
            <BPTextExpenseInfo
              title={expense.nome_gasto}
              value={expense.valor_gasto}
            />
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};
