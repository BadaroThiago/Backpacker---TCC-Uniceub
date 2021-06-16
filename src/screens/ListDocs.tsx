import React, { useCallback, useContext, useState } from "react";
import { View, Text, FlatList } from "react-native";

import BPHeader from "../components/header";
import { BPCardDocsList } from "../components/card";
import { styles } from "../styles";

import { DocRoutes, TravelRoutes } from "../navigation";
import { Document } from "../models/document";
import { useFocusEffect } from "@react-navigation/native";
import { getDocuments } from "../api/document";
import { TravelContext } from "../context";

export default ({ navigation }) => {
  const { idViagem } = useContext(TravelContext);
  const [docs, setDocs] = useState<[Document]>();

  useFocusEffect(
    useCallback(() => {
      getDocuments(idViagem)
        .then((res) => {
          setDocs(res);
        })
        .catch((err) => {
          console.log(err);
        });
      return () => {};
    }, [])
  );

  return (
    <View style={styles.view}>
      <BPHeader onPress={() => navigation.navigate(TravelRoutes.List)} />

      <Text style={styles.title2}>Documentos</Text>

      <FlatList
        data={docs}
        renderItem={(doc) => (
          <BPCardDocsList
            onPress={() => navigation.navigate(DocRoutes.Detail)}
            name={doc.item.nome_documento}
          />
        )}
        keyExtractor={(t) => t.id_documento.toString()}
      />
    </View>
  );
};
