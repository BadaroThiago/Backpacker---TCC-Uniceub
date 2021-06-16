import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Document } from "../../models/document";
import { colorConstants, styles } from "../../styles";

interface Props {
  doc: Document;
}

export const BPCardDocDetail = ({ doc }: Props) => {
  return (
    <View
      style={{
        ...styles.card,
        width: "85%",
        height: 100,
        alignSelf: "center",
        padding: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: "50%",
        }}
      >
        <Text
          style={{
            flex: 1,
            fontSize: 16,
            color: colorConstants.WhiteText,
            // fontWeight: "bold",
          }}
        >
          {doc.descricao}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          height: "50%",
          alignItems: "flex-end",
        }}
      ></View>
    </View>
  );
};
