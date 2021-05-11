import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { styles } from "../styles";

import {
    BPButton,
    BPButtonDelete,
    BPButtonDelete2,
  } from "../components/buttons";

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

        <Text style={styles.title2}> Nome Documento </Text>

        <BPCardLocal width="85%" height={160}/>

        <BPButton text="VISUALIZAR ANEXO" onPress={() => navigation.navigate("Local")} />
        <BPButtonDelete2 text="EDITAR" onPress={() => navigation.navigate("AddLocal")} />
        <BPButtonDelete text="EXCLUIR" onPress={() => navigation.navigate("Local")} />

        <BPFab/>

    </View>
  );
};
