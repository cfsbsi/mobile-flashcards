import React, {Component} from 'react';
import {View, Alert} from 'react-native'
import styled from "styled-components/native/index";
import {cardQuantitiesLiteral} from '../utils/helpers'

class DeckInfo extends Component {

    startQuiz = () => {
        const {deck} = this.props.navigation.state.params;

        if (deck.questions.length > 0) {
            this.props.navigation.navigate('Card', {deck})
        } else {
            Alert.alert(
                'Empty Deck',
                'Please create a card before start the Quiz',
                [{text: 'OK'}]
            )
        }
    }

    render() {

        const {deck} = this.props.navigation.state.params;

        return (
            <ViewStyled>
                <View>
                    <Title>{deck.title}</Title>
                    <SubTitle>{cardQuantitiesLiteral(deck.questions.length)}</SubTitle>
                </View>
                <View>
                    <TouchableOpacityStyledWhite>
                        <TextButtonBlack onPress={() => this.props.navigation.navigate('CardCreation', {deck})}>
                            Add Card</TextButtonBlack>
                    </TouchableOpacityStyledWhite>

                    <TouchableOpacityStyledBlack>
                        <TextButtonWhite onPress={() => this.startQuiz()}>
                            Start Quiz</TextButtonWhite>
                    </TouchableOpacityStyledBlack>
                </View>
            </ViewStyled>
        )
    }
}

const ViewStyled = styled.View`
    align-items: center;
    flex: 1;
    justify-content: space-around;
`


const Title = styled.Text`
    font-size: 30;
    font-weight: bold;
    text-align: center;
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
    padding: 10px 15px;
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

export default DeckInfo
