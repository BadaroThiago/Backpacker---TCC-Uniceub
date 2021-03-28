import React, { useState }from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Image } from 'react-native';
import { Container, 
        InputArea, 
        CustomButton,
        CustomButtonText,
        LoginText,
        InputArea_2,
        SingMessageButtonLog,
        CustomButtonTextDelete,
        CustomButtonDelete,
     } from './styles';

import SingInput from '../../components/SingInput';

export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [ConfirmpasswordField, setConfirmpasswordField] = useState('');

    return (
        <Container>

            <SingMessageButtonLog onPress={()=> navigation.navigate('Home')}>
                <Image source={require("../../assets/Arrow.png")}/>
            </SingMessageButtonLog>

            <InputArea_2>
                <Text>
                    <LoginText>Editar Perfil</LoginText>
                </Text>
           </InputArea_2>
           <InputArea>

                <SingInput 
                    placeholder="Nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <SingInput 
                    placeholder="Email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SingInput 
                    placeholder="Senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <SingInput 
                    placeholder="Confirmar Senha"
                    value={ConfirmpasswordField}
                    onChangeText={t=>setConfirmpasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={()=> navigation.navigate('MainTab')}>
                    <CustomButtonText>SALVAR</CustomButtonText>
                </CustomButton>

                <CustomButtonDelete onPress={()=> navigation.navigate('Home')}>
                    <CustomButtonTextDelete>EXCLUIR CONTA</CustomButtonTextDelete>
                </CustomButtonDelete>

           </InputArea>
        </Container>
    );
}