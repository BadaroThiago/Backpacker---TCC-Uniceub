import moment from "moment";
import React, { useContext, useState, useEffect } from "react";
import {
  Alert,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createExpense } from "../api/expenses";
import { BPButton, PickerImage } from "../components/buttons";
import BPHeader from "../components/header";
import {
  BPAmountInput,
  BPDateInput,
  BPDescriptionTextInput,
  BPTextInput,
} from "../components/inputs";
import { TravelContext } from "../context";
import { Expense } from "../models/expenses";
import { ExpenseRoutes } from "../navigation";
import { styles } from "../styles";

import * as ImagePicker from "expo-image-picker";

export default ({ navigation }) => {
  const { idViagem } = useContext(TravelContext);

  const [image, setImage] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<string>(moment().format("DD/MM/YYYY"));
  const [description, setDescription] = useState<string>("");

  const onAddExpense = async () => {
    try {
      let expense: Expense = {
        nome_gasto: name,
        dt_gasto: date,
        descricao_gasto: description,
        valor_gasto: amount,
        id_viagem: idViagem,
        link_imagem_gasto: image,
      };
      console.log(expense);
      await createExpense(expense);
      navigation.navigate(ExpenseRoutes.List);
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao adicionar gasto", err.message);
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Desculpe, precisamos de acesso a galeria para armazenar os anexos.");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      // @ts-ignore
      setImage(result.uri);
    }
  };

  const imagePlaceholder = () => {
    if (image) {
      let n = image.split("/")
      return n[n.length-1]
    }
    return "Anexar imagem"
  }

  return (
    <View style={styles.view}>
      <BPHeader onPress={() => navigation.navigate(ExpenseRoutes.List)} />

      <Text style={styles.title2}>Adicionar Gasto</Text>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView>
          <BPTextInput
            value={name}
            placeholder="Nome"
            onChangeText={(t: string) => setName(t)}
          />

          <BPAmountInput
            value={amount}
            placeholder="Valor"
            onChangeText={(t: string) => setAmount(t)}
          />

          <BPDateInput
            value={date}
            placeholder="Data do gasto (DD/MM/YYYY)"
            onChangeText={(t: string) => setDate(t)}
          />

          <BPDescriptionTextInput
            value={description}
            placeholder="Descrição (Opcional)"
            onChangeText={(t: string) => setDescription(t)}
          />

          <PickerImage
            text={imagePlaceholder()}
            onPress={pickImage}
          />

          <BPButton text="Adicionar" onPress={onAddExpense} />
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};
