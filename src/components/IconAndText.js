import React  from 'react';
import {Text, View} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'; 

export const IconAndText = ({nome, text}) => {
  return (
 
    <View style={{flexDirection:'row'}}>
	    <FontAwesome5 name= {nome} size={20} color="#ECE9E6"></FontAwesome5>
      
      <Text style={{color:'#ECE9E6', marginLeft: 5}}>{text}</Text> 
    </View>
   
  );
}

