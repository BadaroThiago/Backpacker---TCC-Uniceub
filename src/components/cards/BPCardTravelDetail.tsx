import React from "react";
import { View, Text } from "react-native";
import { formatDate, numberToCurrency } from "../../helpers/utils";
import { Travel } from "../../models/travel";
import { colorConstants, styles } from "../../styles";
import { IconAndText } from "../IconAndText";

interface Props {
  travel: Travel;
}

export const BPCardDetailTravel = ({ travel }: Props) => {
  return (
    <View
      style={{
        ...styles.card,
        width: "85%",
        alignSelf: "center",
        marginBottom: 20,
      }}
    >
      {travel.descricao ? (
        <View
          style={{
            flexDirection: "row",
            padding: 15,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              color: colorConstants.WhiteText,
            }}
          >
            {travel.descricao}
          </Text>
        </View>
      ) : (
        <View />
      )}

      <View
        style={{
          flexDirection: "row",
          padding: 15,
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

      <View
        style={{
          flexDirection: "row",
          padding: 15,
        }}
      >
        <Text style={{ flex: 1, fontSize: 12 }}>
          <IconAndText nome="users" text="1 viajante"></IconAndText>
        </Text>
        <Text style={{ fontSize: 12 }}>
          <IconAndText
            nome="dollar-sign"
            text={numberToCurrency(travel.orcamento_viagem as number)}
          ></IconAndText>
        </Text>
      </View>
    </View>
  );
};
