import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { formatDate } from "../../helpers/utils";
import { Spot } from "../../models/spot";
import { colorConstants, styles } from "../../styles";
import { IconAndText } from "../IconAndText";
import CheckBox from '@react-native-community/checkbox';


interface Props {
  onPress: any;
  spot: Spot;
  setSelection: any;
  isSelected: boolean;
}

export const BPCardLocal = ({ spot, onPress, setSelection, isSelected }: Props) => {``
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
      }}>

      <TouchableOpacity onPress={onPress}>
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
            {spot.nome_local}
          </Text>
        </View>
        
        <View
          style={{
            flexDirection: "row",
            height: "50%",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ flex: 1, fontSize: 12, marginBottom: 5}}>
            <IconAndText
              nome="calendar"
              text={formatDate(spot.dt_planejada as Date)}
            />
          </Text>

          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />

        </View>
      </TouchableOpacity>
    </View>
  );
};
