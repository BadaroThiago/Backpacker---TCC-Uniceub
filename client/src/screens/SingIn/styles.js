import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #27323E;
    flex: 1;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 19px;
    height: 240px;
    margin-top: 2px;
    justify-content: center;
    align-items: center;
`;

export const CustomButton = styled.TouchableOpacity`
    width: 100%;
    height: 52px;
    background-color: #1DA1F2;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #000000;
    font-weight: bold;
`;

export const SingMessageButtonLog = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 8px;
    margin-top: 5px;
`;


export const SingMessageButtonText_2 = styled.Text`
    font-size: 14px;    
    color: #FFF
    margin: 1px;
`;

export const SingMessageButtonTextBold = styled.Text`
    font-size: 16px;    
    color: #FFF
    font-weight: bold;
    margin-left: 4px;
`;

export const SingMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
`;

export const SingMessageButtonText = styled.Text`
    font-size: 12px;
    color: #FFF
    margin: 1px;
`;

export const InputArea_2 = styled.View`
    margin-left: 18px;
    margin-top: 70px;
`;

export const LoginText = styled.Text`
    font-size: 36px;
    font-weight: bold;
    color: #FFF
`;
