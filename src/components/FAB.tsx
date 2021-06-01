import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { FAB, Portal, Provider } from "react-native-paper";

import { TravelRoutes, UserRoutes } from "../navigation";
import { Alert } from "react-native";
import { Travel } from "../models/travel";

import { deleteTravel } from "../api/travel";
import { TravelContext } from "../context";

const MyComponent = () => {
  const navigation = useNavigation();
  const { idViagem } = useContext(TravelContext);

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const actions = [
    {
      icon: "account-edit",
      label: "Editar Perfil",
      onPress: () => navigation.navigate(UserRoutes.Edit),
    },
    {
      icon: "delete",
      label: "Deletar Viagem",
      onPress: () => {
        Alert.alert("Deletar viagem", "Deseja mesmo deletar a viagem atual?", [
          {
            onPress: async () => {
              deleteTravel(idViagem)
                .then(() => {
                  navigation.navigate(TravelRoutes.List);
                })
                .catch((err) => {
                  console.log(err);
                  Alert.alert("Erro ao deletar viagem");
                });
            },
            text: "Sim",
            style: "destructive",
          },
          { onPress: () => console.log("Não"), text: "Não" },
        ]);
      },
    },
    {
      icon: "pencil",
      label: "Editar Viagem",
      onPress: () => navigation.navigate(TravelRoutes.Edit),
    },
    {
      icon: "plus",
      label: "Adicionar Viagem",
      onPress: () => navigation.navigate(TravelRoutes.Add),
      small: false,
    },
  ];

  return (
    <Provider>
      <Portal>
        <FAB.Group
          visible={true}
          open={open}
          icon={open ? "minus" : "plus"}
          actions={actions}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default MyComponent;
