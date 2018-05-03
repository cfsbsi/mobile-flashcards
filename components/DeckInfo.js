import React from 'react';
import {View, Text} from 'react-native'
import styled from "styled-components/native/index";

export default function DeckInfo(props) {
    return (
        <ViewStyled>
            <Title>{props.navigation.state.params.title}</Title>
            <SubTitle>{props.navigation.state.params.subtitle}</SubTitle>

            <TouchableOpacityStyledWhite>
                <TextButtonBlack>Add Card</TextButtonBlack>
            </TouchableOpacityStyledWhite>

            <TouchableOpacityStyledBlack>
                <TextButtonWhite>Start Quiz</TextButtonWhite>
            </TouchableOpacityStyledBlack>
        </ViewStyled>
    )
}

const ViewStyled = styled.View`
 align-items: center;
`


const Title = styled.Text`
    font-size: 30;
    font-weight: bold;
    text-align: center;
    margin-top: 80;
`

const SubTitle = styled.Text`
    font-size: 15;
    text-align: center;
    font-weight: bold;
    color: gray;
    margin-top: 10;
`


const TouchableOpacityStyledBlack = styled.TouchableOpacity`
    background-color: black;
    border-radius: 7;
    margin-top: 15;
    width: 200;
    padding: 10px 15px;
`

const TouchableOpacityStyledWhite = styled.TouchableOpacity`
    background-color: white;
    border-radius: 7;
    border-width: 2px;
    border-color: black;
    margin-top: 80;
    padding: 10px 15px;
    width: 200;
    align-items: center;
`

const TextButtonWhite = styled.Text`
    font-size: 25;
    text-align: center;
    color: white;
`

const TextButtonBlack = styled.Text`
    font-size: 25;
    text-align: center;
    color: black;
`

