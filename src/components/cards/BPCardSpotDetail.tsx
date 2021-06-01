import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { formatDate } from "../../helpers/utils";
import { Spot } from "../../models/spot";
import { colorConstants, styles } from "../../styles";
import { IconAndText } from "../IconAndText";

interface Props {
  spot: Spot;
}

export const BPCardSpotDetail = ({ spot }: Props) => {
  return (
    <View>
      <Card
        style={{
          ...styles.card,
          width: "85%",
          maxHeight: 300,
          alignSelf: "center",
          padding: 10,
          marginBottom: 10
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 16,
              color: colorConstants.WhiteText,
              fontWeight: "bold",
              marginBottom: 30
            }}
          >
            {spot.descricao_local}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          {spot.dt_planejada ? (
            <Text style={{ flex: 1, fontSize: 12 }}>
              <IconAndText
                nome="calendar"
                text={formatDate(spot.dt_planejada as Date)}
              />
            </Text>
          ) : (
            <View></View>
          )}
        </View>
      </Card>
    </View>
  );
};
