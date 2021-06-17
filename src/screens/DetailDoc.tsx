import React, { useCallback, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

import {
  BPButton,
  BPButtonDelete,
  BPButtonDelete2,
} from "../components/buttons";

import { Document } from "../models/document";

import BPHeader from "../components/header";
import { DocRoutes } from "../navigation";
import { BPCardDocDetail } from "../components/cards/BPCardDocDetail";
import { useFocusEffect } from "@react-navigation/native";
import { getDocument } from "../api/document";

export default ({ navigation, route }) => {
  const idDoc = route.params.id_doc;

  const [doc, setDoc] = useState<Document>();

  useFocusEffect(
    useCallback(() => {
      getDocument(idDoc)
        .then((data) => setDoc(data))
        .catch((err) => console.log(err));
      return () => {};
    }, [])
  );

  return doc === undefined ? (
    <View style={styles.view}></View>
  ) : (
    <View style={styles.view}>
      <BPHeader onPress={() => navigation.goBack()} />

      <Text style={styles.title2}>{doc.nome_documento}</Text>

      <BPCardDocDetail doc={doc} />

      <BPButton
        text="VISUALIZAR ANEXO"
        onPress={() => console.log("Mostra imagem")}
      />
      <BPButtonDelete2
        text="EDITAR"
        onPress={() =>
          navigation.navigate(DocRoutes.Edit, { idDoc: doc.id_documento })
        }
      />
      <BPButtonDelete text="EXCLUIR" onPress={() => console.log("Excluir")} />
    </View>
  );
};
