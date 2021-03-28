import React, { useState }from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import { Container, 
        InputArea, 
        CustomButton,
        CustomButtonText,
        SingMessageButtonLog,
        SingMessageButtonText_2,
        SingMessageButtonTextBold,
        SingMessageButton,
        SingMessageButtonText,
        LoginText,
        InputArea_2,
     } from './styles';

import SingInput from '../../components/SingInput';

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    // let login ()

    return (
        <Container>
            <InputArea_2>
                <Text>
                    <LoginText>Entrar</LoginText>
                </Text>
           </InputArea_2>

           <InputArea>

                <SingInput 
                    placeholder="Digite seu email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SingInput 
                    placeholder="Digite sua Senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={()=> navigation.navigate('EditProfile')}>
                    <CustomButtonText>LOGAR</CustomButtonText>
                </CustomButton>

           </InputArea>

           <SingMessageButtonLog onPress={()=> navigation.navigate('SingUp')}>
                <SingMessageButtonText_2>Ainda não possui uma conta?</SingMessageButtonText_2>
                <SingMessageButtonTextBold>Cadastre-se</SingMessageButtonTextBold>
           </SingMessageButtonLog>

           <SingMessageButton onPress={()=> navigation.navigate('Recover')}>
                <SingMessageButtonText>Recuperar Senha</SingMessageButtonText>
           </SingMessageButton>
        </Container>
    );
}
