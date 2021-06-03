import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { FAB, Portal, Provider } from "react-native-paper";

import { ExpenseRoutes, SpotRoutes, TravelRoutes, UserRoutes } from "../navigation";
import { Alert } from "react-native";

import { deleteTravel } from "../api/travel";
import { TravelContext } from "../context";

type FABContext = "travel" | "spot" | "expense";

interface Props {
  context: FABContext;
}

const MyComponent = ({ context }: Props) => {
  const navigation = useNavigation();
  const { idViagem } = useContext(TravelContext);
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  const mainActions = [
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
  ]

  const selectActions = () => {
    switch (context) {
      case "travel":
        return [...mainActions, ...travelActions];
      case "spot":
        return [...mainActions, ...spotActions];
      case "expense":
        return [...mainActions, ...expenseActions];
      default:
        return mainActions;
    }
  };

  return (
    <Provider>
      <Portal>
        <FAB.Group
          visible={true}
          open={open}
          icon={open ? "minus" : "plus"}
          actions={selectActions()}
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
