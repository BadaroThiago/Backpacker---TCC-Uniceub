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
              Locais Viajados
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
              }}
            >
              Locais Visitados
            </Text>
            <Text
              style={{
                flex: 2,
                fontSize: 16,
                color: colorConstants.WhiteText,
                fontWeight: "bold",
              }}
            >
              Meta de Gastos
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 15,
                color: colorConstants.WhiteText,
                fontWeight: "bold",
              }}
            >
              Viajantes
            </Text>
          </View>
          <View>
          <Text style={{ fontSize: 12 }}>
            <IconAndText nome="user" text="Fulano de Tal"></IconAndText>
          </Text>
          <Text style={{ fontSize: 12 }}>
            <IconAndText nome="user" text="Fulano de Tal"></IconAndText>
          </Text>
          <Text style={{ fontSize: 12 }}>
            <IconAndText nome="user" text="Fulano de Tal"></IconAndText>
          </Text>
          <Text style={{ fontSize: 12 }}>
            <IconAndText nome="user" text="Fulano de Tal"></IconAndText>
          </Text>
          <Text style={{ fontSize: 12 }}>
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
              flexDirection: "row",
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
