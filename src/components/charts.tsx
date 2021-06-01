import React from "react";
import { View, Text } from "react-native";
import { colorConstants } from "../styles";
import { numberToCurrency } from "../helpers/utils";

import { LinearGradient } from "expo-linear-gradient";

export const BPGoalChart = ({ goal, currentValue, title }) => {
  const value = () => {
    let v = (currentValue * 100) / goal;
    return `${v}%`;
  };

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <Text style={{ color: colorConstants.WhiteText, fontWeight: "bold" }}>
        {title}
      </Text>
      <View
        style={{
          backgroundColor: "#fff",
          height: 10,
          borderRadius: 5,
          marginVertical: 3,
        }}
      >
        <LinearGradient
          colors={["#5055FF", "#867EFF"]}
          start={[0.0, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          style={{
            height: 10,
            width: value(),
            borderRadius: 5,
            zIndex: -1,
            flexDirection: "column",
          }}
        ></LinearGradient>
      </View>
      <Text style={{ color: colorConstants.WhiteText }}>
        {numberToCurrency(currentValue)} gastos de
        {" " + numberToCurrency(goal)}
      </Text>
    </View>
  );
};

export const BPLocalChart = ({ goal, currentValue, title }) => {
  const value = () => {
    let v = (currentValue * 100) / goal;
    return `${v}%`;
  };

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <Text style={{ color: colorConstants.WhiteText, fontWeight: "bold" }}>
        {title}
      </Text>
      <View
        style={{
          backgroundColor: "#fff",
          height: 10,
          borderRadius: 5,
          marginVertical: 3,
        }}
      >
        <LinearGradient
          colors={["#5055FF", "#867EFF"]}
          start={[0.0, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          style={{
            height: 10,
            width: value(),
            borderRadius: 5,
            zIndex: -1,
            flexDirection: "column",
          }}
        ></LinearGradient>
      </View>
      <Text style={{ color: colorConstants.WhiteText }}>
        {currentValue} locais visitados de
        {" " + goal}
      </Text>
    </View>
  );
};
