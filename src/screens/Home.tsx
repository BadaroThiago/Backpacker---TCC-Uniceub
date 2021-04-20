import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { styles } from "../styles";

import Card from '../components/card';
import FabButton from '../components/fabButton';
import { BPButtonPlus } from "../components/buttons";

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
        <Text style={styles.title}>Viagens</Text>

        

        <FabButton render={navigation} style={{ top : 700, right: 50}}/>

        <BPButtonPlus text="Criar" onPress={()=> navigation.navigate('AddTravel')}/>

    </View>
  );
};
