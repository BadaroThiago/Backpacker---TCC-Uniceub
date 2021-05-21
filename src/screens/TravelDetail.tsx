import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

import FabButton from "../components/fabButton";
import { BPButtonPlus } from "../components/buttons";

export default ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Viagens</Text>

      <FabButton render={navigation} style={{ top: "90%", right: 50 }} />

      <BPButtonPlus
        text="Criar"
        onPress={() => navigation.navigate("AddTravel")}
      />
    </View>
  );
};
