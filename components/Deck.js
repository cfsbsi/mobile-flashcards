import React, {Component} from 'react'
import {View, Text} from 'react-native'
import styled from 'styled-components/native';


export default function Deck({title, quantity}) {
    return (
        <DeckStyled>
            <Title>{title}</Title>
            <Text>{quantity} {quantity==1?'card':'cards'}</Text>
        </DeckStyled>
    )
}

const DeckStyled = styled.View`
    align-items: center;
    padding-top: 20;
    padding-bottom: 20;
    border-bottom-color: black;
    border-bottom-width: 2;
`

const Title = styled.Text`
    font-size: 30;
    font-weight: bold;
`

