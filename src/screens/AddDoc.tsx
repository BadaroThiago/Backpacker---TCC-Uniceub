import React, { useContext, useState } from "react";
import { View, Text, Alert } from "react-native";
import { styles } from "../styles";

import FAB from "../components/FAB";

import { BPTextInput, BPDescriptionTextInput } from "../components/inputs";
import { BPButton } from "../components/buttons";
import BPHeader from "../components/header";

import { DocRoutes } from "../navigation";
import { Document } from '../models/document'
import { createDocument } from "../api/document";
import { TravelContext } from "../context";


export default ({ navigation }) => {
  const { idViagem } = useContext(TravelContext); 

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onAdd = async () => {
    let document: Document = {
      id_viagem: idViagem,
      nome_documento: name,
      descricao: description
    }

    try {
      await createDocument(document);
      navigation.navigate(DocRoutes.List);
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao criar document", err.message);
    }
  }

  return (
    <View style={styles.view}>
      <BPHeader
        onPress={() => navigation.navigate(DocRoutes.Stack)}
      />

      <Text style={styles.title2}>Adicionar Documento</Text>

      <BPTextInput
        value={name}
        placeholder="Nome"
        onChangeText={(t) => setName(t)}
      />

      <BPDescriptionTextInput
        value={description}
        placeholder="Descrição (Opcional)"
        onChangeText={(t) => setDescription(t)}
      />

      <BPButton
        text="ADICIONAR"
        onPress={onAdd}
      />
    </View>
  );
};
