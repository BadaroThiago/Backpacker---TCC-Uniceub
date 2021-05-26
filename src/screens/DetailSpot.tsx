import React from "react";
// import { useNavigation } from "@react-navigation/native";
import { View, Text} from "react-native";
import { styles } from "../styles";

import {
  BPButton,
  BPButtonDelete,
  BPButtonDelete2,
} from "../components/buttons";

import { BPCardLocal } from "../components/card";
import BPFab from "../components/FAB";
import BPHeader from "../components/header";

import { SpotRoutes } from "../navigation";

export default ({ navigation }) => {
  return (
    <View style={styles.view}>
      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate(SpotRoutes.List)}
      />

      <Text style={styles.title2}> Nome Local </Text>

      <BPCardLocal width="85%" height={160} onPress={() => {}} />

      <BPButton
        text="MARCAR COMO VISITADO"
        onPress={() => navigation.navigate(SpotRoutes.List)}
      />
      <BPButtonDelete2
        text="EDITAR LOCAL"
        onPress={() => navigation.navigate(SpotRoutes.Edit)}
      />
      <BPButtonDelete
        text="EXCLUIR"
        onPress={() => navigation.navigate(SpotRoutes.List)}
      />

      <BPFab />
    </View>
  );
};
