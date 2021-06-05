import React from "react";
import { View, Text } from "react-native";
import { colorConstants } from "../../styles";
import { numberToCurrency } from "../../helpers/utils";

export const BPTextExpenseInfo = ({ title, value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        // backgroundColor: "red",
        justifyContent: "space-between",
        marginBottom: 10,
        // height: "50%",
      }}
    >
      <Text style={{ color: colorConstants.WhiteText, fontWeight: "bold" }}>
        {title}
      </Text>
      <Text style={{ color: colorConstants.WhiteText, fontWeight: "bold" }}>
        {numberToCurrency(value)}
      </Text>
    </View>
  );
};
