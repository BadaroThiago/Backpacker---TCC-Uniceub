import React, { useState }from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Image } from 'react-native';
import { Container, 
        InputArea, 
        CustomButton,
        CustomButtonText,
        SingMessageButtonLog,
        LoginText,
        InputArea_2,
     } from './styles';

import SingInput from '../../components/SingInput';

export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [ageField, setAgeField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    return (
        <Container>

            <SingMessageButtonLog onPress={()=> navigation.navigate('SingIn')}>
                <Image source={require("../../assets/Arrow.png")}/>
            </SingMessageButtonLog>

            <InputArea_2>
                <Text>
                    <LoginText>Cadastrar</LoginText>
                </Text>
           </InputArea_2>

           <InputArea>

                <SingInput 
                    placeholder="Nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <SingInput 
                    placeholder="Data de Nascimento"
                    value={ageField}
                    onChangeText={t=>setAgeField(t)}
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

                <CustomButton onPress={()=> navigation.navigate('SingIn')}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>

           </InputArea>
        </Container>
    );
}