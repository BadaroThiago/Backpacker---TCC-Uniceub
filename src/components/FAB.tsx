import * as React from 'react';
import { useNavigation } from "@react-navigation/native";
import { FAB, Portal, Provider } from 'react-native-paper';

const MyComponent = () => {
  const navigation = useNavigation();
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'plus' : 'plus'}
          actions={[
            {
              icon: 'account-edit',
              label: 'Editar Perfil',
              onPress: () => navigation.navigate('EditProfile'),
            },
            {
              icon: 'account-cog',
              label: 'Editar Viajante',
              onPress: () => navigation.navigate('AddTravel'),
            },
            {
              icon: 'account-plus',
              label: 'Adicionar Viajante',
              onPress: () => navigation.navigate('DetailTrip'),
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