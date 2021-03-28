import React, { useState }from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Image } from 'react-native';
import { Container, 
        InputArea, 
        CustomButton,
        CustomButtonText,
        SingMessageButtonLog,
        LoginText,
        LoginText_2,
        InputArea_2,
     } from './styles';

import SingInput from '../../components/SingInput';

export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');


    return (
        <Container>

            <SingMessageButtonLog onPress={()=> navigation.navigate('Recover')}>
                <Image source={require("../../assets/Arrow.png")}/>
            </SingMessageButtonLog>
            
            <InputArea_2>
                <Text>
                    <LoginText>Recuperar Senha</LoginText>
                </Text>
           </InputArea_2>
           <InputArea>

                <Text>
                    <LoginText_2>Insira o código enviado por e-mail a baixo</LoginText_2>
                </Text>

                <SingInput 
                    placeholder="Digite o código enviado"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <CustomButton onPress={()=> navigation.navigate('NewPassword')}>
                    <CustomButtonText>PRÓXIMO</CustomButtonText>
                </CustomButton>

           </InputArea>
        </Container>
    );
}