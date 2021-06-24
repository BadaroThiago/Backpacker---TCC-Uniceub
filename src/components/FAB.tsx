import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FAB, Portal, Provider } from "react-native-paper";

import {
  AuthRoutes,
  ExpenseRoutes,
  SpotRoutes,
  TravelRoutes,
  UserRoutes,
} from "../navigation";
import { Alert } from "react-native";

import { deleteTravel } from "../api/travel";
import { TravelContext } from "../context";
import firebase from "firebase";

type FABContext = "travel" | "spot" | "expense" | "home";

interface Props {
  context: FABContext;
}

const MyComponent = ({ context }: Props) => {
  const navigation = useNavigation();
  const { idViagem } = useContext(TravelContext);
  const [open, setOpen] = useState(false);

  // fecha o FAB quando a tela sair de foco
  useEffect(() => {
    navigation.addListener("blur", () => setOpen(false));
  }, [navigation]);

  const mainActions = [
    {
      icon: "logout",
      label: "Sair",
      onPress: () => {
        firebase.auth().signOut();
        navigation.navigate(AuthRoutes.SignIn);
      },
    },
    {
      icon: "account-edit",
      label: "Editar Perfil",
      onPress: () => navigation.navigate(UserRoutes.Edit),
    },
  ];

  const travelActions = [
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
                .catch(err => {
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
      icon: "account-multiple-plus",
      label: "Adicionar Viajante",
      onPress: () => navigation.navigate(TravelRoutes.Traveler),
    },
    {
      icon: "plus",
      label: "Adicionar Viagem",
      onPress: () => navigation.navigate(TravelRoutes.Add),
      small: false,
    },
  ];

  const spotActions = [
    {
      icon: "plus",
      label: "Adicionar Local",
      onPress: () => navigation.navigate(SpotRoutes.Add),
      small: false,
    },
  ];

  const expenseActions = [
    {
      icon: "plus",
      label: "Adicionar Gasto",
      onPress: () => navigation.navigate(ExpenseRoutes.Add),
      small: false,
    },
  ];

  const homeActions = [
    {
      icon: "plus",
      label: "Adicionar Viagem",
      onPress: () => navigation.navigate(TravelRoutes.Add),
      small: false,
    },
  ];

  const selectActions = () => {
    switch (context) {
      case "travel":
        return [...mainActions, ...travelActions];
      case "spot":
        return [...mainActions, ...spotActions];
      case "expense":
        return [...mainActions, ...expenseActions];
      case "home":
        return [...mainActions, ...homeActions];
      default:
        return mainActions;
    }
  };

  return (
    <Provider>
      <Portal>
        <FAB.Group
          fabStyle={{ zIndex: 1 }}
          visible={true}
          open={open}
          icon={open ? "minus" : "plus"}
          actions={selectActions()}
          onStateChange={({ open }) => setOpen(open)}
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
