import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

import { IconAndText } from "./IconAndText";
import { styles, colorConstants } from "../styles";

import { BPTextExpenseInfo } from "../components/expenses/text";
import { BPGoalChart } from "../components/charts";

export const BPCardLocal = ({ width, height, onPress }) => {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              sodales arcu id commodo vestibulum.
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
              <IconAndText nome="calendar" text="10/12/2022"></IconAndText>
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

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

export const BPCardExpenseList = ({ name, width, height, onPress }) => {
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
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              // backgroundColor: "red",
              justifyContent: "space-between",
              alignContent: "flex-start",
              height: "100%",
            }}
          >
            <BPTextExpenseInfo title={name} value={10000} />
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export const BPCardExpensesInfo = ({ width }) => {
  return (
    <View>
      <TouchableOpacity>
        <Card
          style={{
            ...styles.card,
            width,
            alignSelf: "center",
            padding: 10,
            paddingHorizontal: 15,
            marginBottom: 20,
            alignContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <View style={{ marginBottom: 10 }}>
            <BPGoalChart
              goal={30000}
              currentValue={15000}
              title="Meta de gastos"
            />
            <BPGoalChart goal={1500} currentValue={1000} title="Meta diária" />
          </View>
          <View>
            <BPTextExpenseInfo title="Total já gasto:" value={10000} />
            <BPTextExpenseInfo title="Total por viajante:" value={10000} />
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};
