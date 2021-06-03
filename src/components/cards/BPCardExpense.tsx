import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { formatDate, numberToCurrency } from "../../helpers/utils";
import { Expense } from "../../models/expenses";
import { colorConstants, styles } from "../../styles";
import { IconAndText } from "../IconAndText";

interface Props {
  expense: Expense;
}

export const BPCardExpense = ({ expense }: Props) => {
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
        }}
      >
        <View
          style={{
            flexDirection: "column",
            paddingBottom: 20,
          }}
        >
          {expense.descricao_gasto ? (
            <Text
              style={{
                fontSize: 16,
                color: colorConstants.WhiteText,
                fontWeight: "bold",
                paddingBottom: 15,
              }}
            >
              {expense.descricao_gasto}
            </Text>
          ) : (
            <View />
          )}
          <Text
            style={{
              fontSize: 16,
              color: colorConstants.WhiteText,
              fontWeight: "bold",
            }}
          >
            {numberToCurrency(expense.valor_gasto as number)}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ flex: 1, fontSize: 12 }}>
            <IconAndText
              nome="calendar"
              text={formatDate(expense.dt_gasto as Date)}
            />
          </Text>
        </View>
      </Card>
    </View>
  );
};
