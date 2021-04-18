import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

import { IconAndText } from "./IconAndText";

export default class App extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Card
            style={{
              backgroundColor: "#333C47",
              height: 100,
              width: 300,
              marginLeft: 37.08,
              marginRight: 38.33,
              marginTop: 15,
              marginBottom: 15,
              borderRadius: 6,
              shadowColor: "black",
              shadowOpacity: 0.4,
              shadowOffset: { width: 0, height: 3 },
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 14,
                  marginTop: 10,
                  marginLeft: 8,
                  color: "#ECE9E6",
                }}
              >
                Nome da viagem
              </Text>
              <Text style={{ fontSize: 12, marginTop: 10, marginRight: 8 }}>
                <IconAndText nome="users" text="5 viajantes"></IconAndText>
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ flex: 1, fontSize: 12, marginTop: 40, marginLeft: 8 }}
              >
                <IconAndText
                  nome="plane-departure"
                  text="10/12/2022"
                ></IconAndText>
              </Text>
              <Text style={{ fontSize: 12, marginTop: 40, marginRight: 8 }}>
                <IconAndText
                  nome="plane-arrival"
                  text="10/12/2022"
                ></IconAndText>
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}
