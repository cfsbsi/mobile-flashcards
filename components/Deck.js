import React from 'react'
import {View, Text} from 'react-native'
import styled from 'styled-components/native';


export default function Deck(props) {
    const {quantity, title} = props;
    const cardQuantitiesLiteral = `${quantity} ${quantity===1?'card':'cards'}`;

    return (
        <DeckStyled>
            <Title onPress={() => props.navigation.navigate('SingleViewDeck', {title: title, subtitle: cardQuantitiesLiteral})} >{title}</Title>
            <Text>{cardQuantitiesLiteral}</Text>
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

