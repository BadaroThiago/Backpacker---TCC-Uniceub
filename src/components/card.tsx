import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

import { IconAndText } from "./IconAndText";
import { styles, colorConstants } from "../styles";

import { BPTextExpenseInfo } from "../components/expenses/text";
import { BPGoalChart, BPLocalChart } from "../components/charts";

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

export const BPCardLocal = ({ width, height }) => {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales arcu id commodo vestibulum.
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
                nome="calendar"
                text="10/12/2022"
              ></IconAndText>
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export const BPCardDetailTrip = ({ width, height }) => {
  return (
    <View>
      <TouchableOpacity>
        <Card
          style={{
            ...styles.card,
            height,
            width,
            alignSelf: "center",
            padding: 20,
            paddingHorizontal: 20,
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
                fontSize: 14,
                color: colorConstants.WhiteText,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales arcu id commodo vestibulum. Donec pulvinar urna sapien, in rhoncus arcu iaculis sagittis. 
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              height: "50%",
              alignItems: "flex-end",
              padding: 12,
              flex: 2,
              marginTop: 15,
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

          <View
          style={{
            flexDirection: "row",
            height: "50%",
            padding: 15,
            }}
          >
            <Text style={{ flex: 1, fontSize: 12 }}>
              <IconAndText nome="users" text="5 viajantes"></IconAndText>
            </Text>
            <Text style={{ fontSize: 12 }}>
              <IconAndText nome="amazon" text="R$ 123456,78"></IconAndText>
            </Text>
          </View>

        </Card>
      </TouchableOpacity>
    </View>
  );
};

export const BPCardDetailTrip_2 = ({ width, height }) => {
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
              height: "50%",
            }}
          >
            <Text
              style={{
                flex: 1,
                marginTop: 10,
                fontSize: 16,
                color: colorConstants.WhiteText,
                fontWeight: "bold",
              }}>
            </Text>

            <View style={{ marginBottom: 1 }}>

            <BPLocalChart
              goal={15}
              currentValue={5}
              title="Locais Viajadoss"
            />
            <BPGoalChart goal={1500} currentValue={500} title="Meta de gastos" />
            </View>

            <Text
              style={{
                fontSize: 16,
                marginTop: 1,
                color: colorConstants.WhiteText,
                fontWeight: "bold",
              }}
            >
              Viajantes
            </Text>
          </View>
          <View>
          <Text
              style={{
                marginTop: 10,
              }}
            ></Text>
          <Text style={{ fontSize: 12, borderBottomWidth: 1 }}>
            <IconAndText nome="user" text="Fulano de Tal"></IconAndText>
          </Text>
          <Text style={{ fontSize: 12, borderBottomWidth: 1, marginTop: 2, }}>
            <IconAndText nome="user" text="Fulano de Tal"></IconAndText>
          </Text>
          <Text style={{ fontSize: 12, borderBottomWidth: 1, marginTop: 2, }}>
            <IconAndText nome="user" text="Fulano de Tal"></IconAndText>
          </Text>
          <Text style={{ fontSize: 12, borderBottomWidth: 1, marginTop: 2, }}>
            <IconAndText nome="user" text="Fulano de Tal"></IconAndText>
          </Text>
          <Text style={{ fontSize: 12, borderBottomWidth: 1, marginTop: 2, }}>
            <IconAndText nome="user" text="Fulano de Tal"></IconAndText>
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
              {name}
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export const BPCardExpenseList = ({ name, width, height }) => {
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
