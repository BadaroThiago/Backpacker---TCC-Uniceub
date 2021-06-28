import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

import { styles, colorConstants } from "../styles";

interface Props {
  onPress: any;
  name: string;
}

export const BPCardDocsList = ({ onPress, name }: Props) => {
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
            paddingHorizontal: 15,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              alignItems: "baseline",
              width: "100%",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: colorConstants.WhiteText,
                fontWeight: "bold",
                flexDirection: "row",
              }}
              numberOfLines={2}
            >
              {name}
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};
