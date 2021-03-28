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

            <SingMessageButtonLog onPress={()=> navigation.navigate('SingIn')}>
                <Image source={require("../../assets/Arrow.png")}/>
            </SingMessageButtonLog>
            
            <InputArea_2>
                <Text>
                    <LoginText>Recuperar Senha</LoginText>
                </Text>
           </InputArea_2>
           <InputArea>

                <Text>
                    <LoginText_2>Será enviado um codigo para seu endereço de e-mail para a redefinição da sua senha.</LoginText_2>
                </Text>

                <SingInput 
                    placeholder="Digite seu email para confirmação"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <CustomButton onPress={()=> navigation.navigate('Recover_Code')}>
                    <CustomButtonText>PRÓXIMO</CustomButtonText>
                </CustomButton>

           </InputArea>
        </Container>
    );
}