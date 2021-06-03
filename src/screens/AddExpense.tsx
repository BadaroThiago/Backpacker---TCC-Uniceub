import moment from "moment";
import React, { useContext, useState } from "react";
import { Alert, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createExpense } from "../api/expenses";
import { BPButton } from "../components/buttons";
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

export default ({ navigation }) => {
  const { idViagem } = useContext(TravelContext);

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
        id_viagem: idViagem 
      }
      console.log(expense);
      await createExpense(expense);
      navigation.navigate(ExpenseRoutes.List);
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao adicionar gasto", err);
    }
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

          <BPButton
            text="Adicionar"
            onPress={onAddExpense}
          />
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};
