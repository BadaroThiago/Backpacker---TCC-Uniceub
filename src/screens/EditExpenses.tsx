import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { styles } from "../styles";

import {
  BPTextInput,
  BPDescriptionTextInput,
  BPAmountInput,
  BPDateInput,
} from "../components/inputs";
import { BPButton } from "../components/buttons";
import BPHeader from "../components/header";

import { ExpenseRoutes } from "../navigation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import moment from "moment";
import { useFocusEffect } from "@react-navigation/native";
import { editExpense, getExpense } from "../api/expenses";
import { Expense } from "../models/expenses";

export default ({ navigation, route }) => {
  const idExpense = route.params.idExpense;

  const [id, setId] = useState(0);
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<string>(moment().format("DD/MM/YYYY"));
  const [description, setDescription] = useState<string>("");

  useFocusEffect(
    useCallback(() => {
      getExpense(idExpense)
        .then(res => {
          let data: Expense = res.data;
          setName(data.nome_gasto);
          setDescription(data.descricao_gasto);
          setDate(moment(data.dt_gasto).format("DD/MM/YYYY"));
          setAmount(data.valor_gasto as string);
          setId(data.id_gasto);
        })
        .catch(err => console.log(err));
      return () => {};
    }, [])
  );

  const onEditExpense = async () => {
    let expense: Expense = {
      nome_gasto: name,
      descricao_gasto: description,
      valor_gasto: amount,
      dt_gasto: date,
      id_gasto: id,
    };
    console.log("Aqui foi chamado:", expense);
    editExpense(expense)
      .then(() => {
        navigation.navigate(ExpenseRoutes.List);
      })
      .catch(err => {
        console.log(err);
        Alert.alert("Erro ao editar o gasto", err);
      });
  };

  return (
    <View style={styles.view}>
      <BPHeader onPress={() => navigation.navigate(ExpenseRoutes.List)} />

      <Text style={styles.title2}>Editar Gastos</Text>

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

          <BPButton text="ATUALIZAR" onPress={onEditExpense} />
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};
