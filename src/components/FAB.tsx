import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { FAB, Portal, Provider } from "react-native-paper";

import { TravelRoutes, UserRoutes } from "../navigation";

const MyComponent = () => {
  const navigation = useNavigation();

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          visible={true}
          open={open}
          icon={open ? "minus" : "plus"}
          actions={[
            {
              icon: "account-edit",
              label: "Editar Perfil",
              onPress: () => navigation.navigate(UserRoutes.Edit),
            },
            {
              icon: "delete",
              label: "Deletar Viagem",
              onPress: () => navigation.navigate("DetailTrip"),
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
          ]}
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
