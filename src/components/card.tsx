import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

import { styles, colorConstants } from "../styles";

export const BPCardDocsList = ({ onPress, width, height }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Card
          style={{
            ...styles.card,
            height,
            width,
            alignSelf: "center",
            padding: 10,
            paddingHorizontal: 15,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              // backgroundColor: "red",
              alignItems: "baseline",
              width: "100%",
              height: "100%",
              // backgroundColor: 'blue',
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
              "teste"
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};


