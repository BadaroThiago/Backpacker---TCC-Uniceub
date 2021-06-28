import React, { useCallback, useContext, useState } from "react";
import { View, Text, FlatList } from "react-native";

import BPHeader from "../components/header";
import { BPCardDocsList } from "../components/card";
import { styles } from "../styles";
import FAB from "../components/FAB";

import { DocRoutes, TravelRoutes } from "../navigation";
import { Document } from "../models/document";
import { useFocusEffect } from "@react-navigation/native";
import { getDocuments } from "../api/document";
import { TravelContext } from "../context";
import { BPEmptyListView } from "../components/emptyList";

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
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1 }}
        data={docs}
        renderItem={(doc) => (
          <BPCardDocsList
            onPress={() =>
              navigation.navigate(DocRoutes.Detail, {
                id_doc: doc.item.id_documento,
              })
            }
            name={doc.item.nome_documento}
          />
        )}
        keyExtractor={(t) => t.id_documento.toString()}
        ListEmptyComponent={<BPEmptyListView text="Nenhum documento adicionado"/>}
      />

      <FAB context="document" />
    </View>
  );
};
