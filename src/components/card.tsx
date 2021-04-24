import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

import { IconAndText } from "./IconAndText";
import { styles, colorConstants } from "../styles";

export const BPCardTravelList = ({ width, height }) => {
  return (
    <View>
      <TouchableOpacity>
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
              // backgroundColor: "red",
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
              Nome da viagem
            </Text>
            <Text style={{ fontSize: 12 }}>
              <IconAndText nome="users" text="5"></IconAndText>
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              // backgroundColor: "white",
              height: "50%",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ flex: 1, fontSize: 12 }}>
              <IconAndText
                nome="plane-departure"
                text="10/12/2022"
              ></IconAndText>
            </Text>
            <Text style={{ fontSize: 12 }}>
              <IconAndText nome="plane-arrival" text="10/12/2022"></IconAndText>
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export const BPCardDocsList = ({ name, width, height }) => {
  return (
    <View>
      <TouchableOpacity>
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
              // backgroundColor: "red",
              justifyContent: "space-between",
              height: "50%",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: colorConstants.WhiteText,
                fontWeight: "bold",
              }}
            >
            {name}
            </Text>
            <Text style={{ fontSize: 12 }}>
              <IconAndText nome="users" text="5"></IconAndText>
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};
