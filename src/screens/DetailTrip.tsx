import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { styles } from "../styles";

import { BPCardDetailTrip, BPCardDetailTrip_2 } from '../components/card';
import BPFab from '../components/FAB';
import BPHeader from "../components/header";

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>

      <BPHeader
        showMenuButton={false}
        onPress={() => navigation.navigate("Home")}
      />

        <Text style={styles.title2}>Nome da Viagem</Text>

        <BPCardDetailTrip width="85%" height={199}/>
        <BPCardDetailTrip_2 width="85%" height={307}/>

        <BPFab/>

    </View>
  );
};
