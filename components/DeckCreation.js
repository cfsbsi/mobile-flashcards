import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styled from "styled-components/native/index";

class DeckCreation extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <AddDeckStyled>
                <QuestionView>
                    <Question>What is the title</Question>
                    <Question>of your new</Question>
                    <Question>deck?</Question>
                </QuestionView>
                <TextInputStyled onChangeText={(text) => this.setState({text})}
                                 value={this.state.text}></TextInputStyled>
                <TouchableOpacityStyled>
                    <TextButton>SUBMIT</TextButton>
                </TouchableOpacityStyled>
            </AddDeckStyled>
        )
    }

}

const AddDeckStyled = styled.View`
    align-items: center;
`

const QuestionView = styled.View`
    margin-top: 70;
    margin-bottom: 20;
`

const TextInputStyled = styled.TextInput`
    margin-top: 40;
    height: 50;
    width: 300;
    border-color: gray;
    border-width: 2;
    border-radius: 7;
`

const Question = styled.Text`
    font-size: 30;
    font-weight: bold;
    text-align: center;
`

const TextButton = styled.Text`
    font-size: 30;
    text-align: center;
    color: white;
`

const TouchableOpacityStyled = styled.TouchableOpacity`
    background-color: black;
    border-radius: 7;
    margin-top: 80;
    padding: 10px 15px;
`

export default DeckCreation