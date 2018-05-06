import React, {Component} from 'react'
import {View} from 'react-native'
import { NavigationActions } from 'react-navigation';
import styled from "styled-components/native/index";
import {submitEntry} from '../utils/api'

class DeckCreation extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    createDeck = () => {
        if(this.state.text.trim().length === 0){
            return
        }

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' }),
            ],
        });
        this.props.navigation.dispatch(resetAction);

        submitEntry({title: this.state.text, questions: []}, this.state.text);

        this.props.navigation.navigate('DeckInfo', {deck: {title: this.state.text, questions: []}})

        this.setState({text: ''})
    }

    render() {
        return (
            <AddDeckStyled>
                <View>
                    <Question>What is the title</Question>
                    <Question>of your new</Question>
                    <Question>deck?</Question>
                </View>
                <TextInputStyled onChangeText={(text) => this.setState({text})}
                                 value={this.state.text}></TextInputStyled>
                <TouchableOpacityStyled onPress={() => this.createDeck()}>
                    <TextButton>SUBMIT</TextButton>
                </TouchableOpacityStyled>
            </AddDeckStyled>
        )
    }

}

const AddDeckStyled = styled.View`
    align-items: center;
    flex: 1;
    justify-content: space-around;
`

const TextInputStyled = styled.TextInput`
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
    padding: 10px 15px;
`

export default DeckCreation