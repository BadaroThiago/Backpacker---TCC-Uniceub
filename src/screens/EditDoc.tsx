import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, Alert } from "react-native";
import { styles } from "../styles";

import { BPTextInput, BPDescriptionTextInput } from "../components/inputs";
import { BPButton } from "../components/buttons";
import BPHeader from "../components/header";

import { DocRoutes } from "../navigation";
import { editDocument, getDocument } from "../api/document";
import { Document } from "../models/document";

export default ({ navigation, route }) => {
  const idDoc = route.params.idDoc;

  const [id, setID] = useState(0);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useFocusEffect(
    useCallback(() => {
      getDocument(idDoc)
        .then(data => {
          setID(data.id_documento);
          setName(data.nome_documento);
          setDescription(data.descricao);
        })
        .catch(err => console.log(err));
      return () => {};
    }, [])
  );

  const onEdit = async () => {
    let data: Document = {
      id_documento: id,
      nome_documento: name,
      descricao: description
    };

    try {
      await editDocument(data);
      navigation.navigate(DocRoutes.List);
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao atualizar documento", err.message);
    }
  };

  return (
    <View style={styles.view}>
      <BPHeader onPress={() => navigation.navigate(DocRoutes.Stack)} />

      <Text style={styles.title2}>Editar Documento</Text>

      <BPTextInput
        value={name}
        placeholder="Nome"
        onChangeText={t => setName(t)}
      />

      <BPDescriptionTextInput
        value={description}
        placeholder="Descrição (Opcional)"
        onChangeText={t => setDescription(t)}
      />

      <BPButton text="ATUALIZAR" onPress={onEdit} />
    </View>
  );
};
