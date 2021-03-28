import React, { useState }from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Image, Alert } from 'react-native';
import { Container, 
        InputArea, 
        CustomButton,
        CustomButtonText,
        SingMessageButtonLog,
        LoginText,
        InputArea_2,
     } from './styles';

import SingInput from '../../components/SingInput';
import firebase from 'firebase';
import { createUser } from '../../Api';

export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [dateField, setDateField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    let signUp = () => {
        createUser(nameField, emailField, dateField, passwordField)
        .then(() => {
            console.log("HEY");
            navigation.navigate('SingIn');
        })
        .catch((err) => {
            Alert.alert('Erro no cadastro', err.message);
        });
    }

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
                    value={dateField}
                    onChangeText={t=>setDateField(t)}
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

                <CustomButton onPress={signUp}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>

           </InputArea>
        </Container>
    );
}
