import React, {Component} from 'react'
import {NavigationActions} from 'react-navigation'
import {View} from 'react-native'
import styled from "styled-components/native/index"
import {submitEntry, fetchDecks} from '../utils/api'

class CardCreation extends Component {

    constructor(props) {
        super(props);
        this.state = {question: '', answer: '', deck: {}};
    }

    componentDidMount() {
        const {title} = this.props.navigation.state.params;
        fetchDecks()
            .then((data) => this.setState({deck: data[title]}));

    }

    createCard = () => {
        if (this.state.question.trim().length === 0 || this.state.answer.trim().length === 0) {
            return
        }

        const {navigation} = this.props;

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Home'}),
            ],
        });

        navigation.dispatch(resetAction);

        const {question, answer} = this.state;

        this.state.deck.questions.push({question, answer});

        submitEntry({title: this.state.deck.title, questions: this.state.deck.questions}, this.state.deck.title);

        navigation.navigate('DeckInfo', {
            title: this.state.deck.title,
            cardsQuantity: this.state.deck.questions.length
        });

        this.setState({question: '', answer: ''})
    }

    render() {
        return (
            <AddDeckStyled>
                <View>
                        <Question>Question</Question>
                    <TextInputStyled onChangeText={(question) => this.setState({question})}
                                     value={this.state.question}></TextInputStyled>
                </View>

                <View>
                        <Question>Answer</Question>
                    <TextInputStyled onChangeText={(answer) => this.setState({answer})}
                                     value={this.state.answer}></TextInputStyled>
                </View>

                <TouchableOpacityStyled>
                    <TextButton onPress={() => this.createCard()}>SUBMIT</TextButton>
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

const QuestionView = styled.View`
    margin-top: 60;
    margin-bottom: 20;
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

export default CardCreation