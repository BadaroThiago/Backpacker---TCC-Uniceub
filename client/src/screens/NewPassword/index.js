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

    const [passwordField, setPasswordField] = useState('');
    const [ConfirmpasswordField, setConfirmpasswordField] = useState('');


    return (
        <Container>

            <SingMessageButtonLog onPress={()=> navigation.navigate('Recover_Code')}>
                <Image source={require("../../assets/Arrow.png")}/>
            </SingMessageButtonLog>
            
            <InputArea_2>
                <Text>
                    <LoginText>Nova Senha</LoginText>
                </Text>
           </InputArea_2>
           <InputArea>

                <Text>
                    <LoginText_2>Digite sua nova Senha</LoginText_2>
                </Text>

                <SingInput 
                    placeholder="Nova Senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <SingInput 
                    placeholder="Confirmar Nova Senha"
                    value={ConfirmpasswordField}
                    onChangeText={t=>setConfirmpasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={()=> navigation.navigate('SingIn')}>
                    <CustomButtonText>CONFIRMAR</CustomButtonText>
                </CustomButton>

           </InputArea>
        </Container>
    );
}