import React, { useEffect } from 'react';
import { StyleSheet, Image} from 'react-native';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

export default () => {  

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () =>{
            const token = await AsyncStorage.getItem('token');
            if (token) {

            } else {
                navigation.navigate('SingIn');
            }
        }
        checkToken();
    }, []);

    return (    

        <Container>
        <Image source={require("../../assets/Logo_Fundo_Transparente_Versão_Branca.png")}/>
        <LoadingIcon size="large" color="#1DA1F2"/>
        </Container>
    );
}

