import React from "react";
import { View, Text } from "react-native";
import { sumExpenses } from "../../models/expenses";
import { countSpots, countVisitedSpots, Travel } from "../../models/travel";
import { styles } from "../../styles";
import { BPGoalChart, BPLocalChart } from "../charts";
// import { IconAndText } from "../IconAndText";

interface Props {
  travel: Travel;
}

export const BPCardDetailTravel2 = ({ travel }: Props) => {
  return (
    <View
      style={{
        ...styles.card,
        width: "85%",
        alignSelf: "center",
        padding: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
      }}
    >
      <View style={{ marginBottom: 1 }}>
        <BPLocalChart
          goal={countSpots(travel)}
          currentValue={countVisitedSpots(travel)}
          title="Locais Visitados"
        />
        <BPGoalChart
          goal={travel.orcamento_viagem}
          currentValue={sumExpenses(travel.expenses)}
          title="Meta de gastos"
        />
      </View>
    </View>
  );
};
// <View>
// <Text
// style={{
// fontSize: 16,
// marginTop: 1,
// marginBottom: 12,
// color: colorConstants.WhiteText,
// fontWeight: "bold",
// }}
// >
// Viajantes
// </Text>
// <Text style={{ fontSize: 12, borderBottomWidth: 1 }}>
// <IconAndText nome="user" text="Fulano de Tal" />
// </Text>
// <Text style={{ fontSize: 12, borderBottomWidth: 1, marginTop: 5 }}>
// <IconAndText nome="user" text="Fulano de Tal" />
// </Text>
// <Text style={{ fontSize: 12, borderBottomWidth: 1, marginTop: 5 }}>
// <IconAndText nome="user" text="Fulano de Tal" />
// </Text>
// <Text style={{ fontSize: 12, borderBottomWidth: 1, marginTop: 5 }}>
// <IconAndText nome="user" text="Fulano de Tal" />
// </Text>
// <Text style={{ fontSize: 12, borderBottomWidth: 1, marginTop: 5 }}>
// <IconAndText nome="user" text="Fulano de Tal" />
// </Text>
// </View>
