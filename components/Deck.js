import React, {Component} from 'react'
import styled from 'styled-components/native'
import {Animated} from 'react-native'
import {cardQuantitiesLiteral} from '../utils/helpers'


export default class Deck extends Component {

    constructor(props){
        super(props)

        this.state = {fontSize: new Animated.Value(1)}
    }

    titlePressed = () => {
        const {fontSize} = this.state
        const {deck} = this.props;

        Animated.sequence([
          Animated.timing(fontSize, {duration: 200, toValue: 1.30}),
          Animated.spring(fontSize, {friction: 4, toValue: 1})
        ]).start()

        setTimeout(() => this.props.navigation.navigate('DeckInfo', {deck}), 350)

    }

    render() {
        const {deck} = this.props;

        return (
            <DeckStyled>
                <Animated.Text style={[{fontWeight: 'bold', fontSize: 30}, {transform: [{scale: this.state.fontSize}]}]}
                               onPress={() => this.titlePressed()}>{deck.title}</Animated.Text>
                <Subtitle>{cardQuantitiesLiteral(deck.questions.length)}</Subtitle>
            </DeckStyled>
        )
    }
}

const DeckStyled = styled.View`
    align-items: center;
    padding-top: 20;
    padding-bottom: 20;
    border-bottom-color: black;
    border-bottom-width: 2;
`

const Subtitle = styled.Text`
    font-weight: bold;
    color: gray;
`


