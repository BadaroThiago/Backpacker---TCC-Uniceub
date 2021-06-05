import React from "react";
import { View, Text, TextStyle } from "react-native";
import { colorConstants } from "../styles";

interface Props {
  text: string;
  style?: TextStyle
}

export const BPEmptyListView = ({ text, style }: Props) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: colorConstants.WhiteText,
          fontSize: 18,
          ...style,
        }}
      >
        {text}
      </Text>
    </View>
  );
};
