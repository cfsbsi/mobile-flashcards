import React from 'react'
import styled from 'styled-components/native';
import {cardQuantitiesLiteral} from '../utils/helpers'


export default function Deck(props) {
    const {quantity, title} = props;

    return (
        <DeckStyled>
            <Title onPress={() => props.navigation.navigate('DeckInfo', {title: title, cardsQuantity: quantity})} >{title}</Title>
            <Subtitle>{cardQuantitiesLiteral(quantity)}</Subtitle>
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


const Subtitle = styled.Text`
    font-weight: bold;
    color: gray;
`


