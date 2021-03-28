import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 50px;
    background-color: #fff
    flex-direction: row;
    padding-left: 10px;
    align-items: center;
    margin-top: 10px;
    border-width: 2px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #333C47;
`;


export default ({placeholder, value, onChangeText, password}) => {
    return(
        <InputArea>
            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}