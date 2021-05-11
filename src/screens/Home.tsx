import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { styles } from "../styles";

import { BPCardTravelList } from '../components/card';
import FabHome from '../components/FAB';

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>

        <Text style={styles.title}>Viagens</Text>

        <BPCardTravelList width="85%" height={100}/>
        <BPCardTravelList width="85%" height={100}/>
        <BPCardTravelList width="85%" height={100}/>
        <BPCardTravelList width="85%" height={100}/>
        <BPCardTravelList width="85%" height={100}/>

        <FabHome/>

      <BPButtonPlus
        text="Criar"
        onPress={() => navigation.navigate("AddTravel")}
      />
    </View>
  );
};
