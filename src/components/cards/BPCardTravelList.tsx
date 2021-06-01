import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

import { IconAndText } from "../IconAndText";
import { styles, colorConstants } from "../../styles";

import { formatDate } from "../../helpers/utils";
import { Travel } from "../../models/travel";

interface TravelCardProps {
  travel: Travel;
  width: any;
  height: any;
  onPress: any;
}

export const BPCardTravelList = ({
  travel,
  width,
  height,
  onPress,
}: TravelCardProps) => {
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
              flexDirection: "row",
              height: "50%",
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                color: colorConstants.WhiteText,
                fontWeight: "bold",
              }}
            >
              {travel.nome_viagem}
            </Text>
            <Text style={{ fontSize: 12 }}>
              <IconAndText nome="users" text="5"></IconAndText>
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              height: "50%",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ flex: 1, fontSize: 12 }}>
              <IconAndText
                nome="plane-departure"
                text={formatDate(travel.dt_inicio as Date)}
              />
            </Text>
            <Text style={{ fontSize: 12 }}>
              <IconAndText
                nome="plane-arrival"
                text={formatDate(travel.dt_fim as Date)}
              />
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};
