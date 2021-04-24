import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { styles } from "../styles";

import { BPCardLocal } from '../components/card';
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

        <Text style={styles.title2}>Locais</Text>

        <BPCardLocal width="85%" height={100}/>
        <BPCardLocal width="85%" height={100}/>
        <BPCardLocal width="85%" height={100}/>
        <BPCardLocal width="85%" height={100}/>

        <BPFab/>

    </View>
  );
};