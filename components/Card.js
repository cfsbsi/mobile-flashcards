import React, {Component} from 'react'
import {View} from 'react-native'
import {AppLoading} from 'expo'
import {NavigationActions} from 'react-navigation'
import styled from 'styled-components/native/index'

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            screen: 'Answer',
            disabledButtons: true,
            rightAnswers: 0,
            deckLength: props.navigation.state.params.deck.questions.length
        };
    }

    correctAnswer = () => {
        this.setState((prev) => {
            return {
                rightAnswers: prev.rightAnswers + 1,
                index: prev.index + 1,
                screen: 'Answer',
                disabledButtons: true,
            }
        }, () => this.sendToResultIfDone())
    }

    sendToResultIfDone = () => {
        const {index, rightAnswers, deckLength} = this.state;

        if (index === deckLength) {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Home'}),
                ],
            });

            this.props.navigation.dispatch(resetAction);

            this.props.navigation.navigate('Result', {correctPercent: Math.floor(rightAnswers / deckLength * 100),
            deck: this.props.navigation.state.params.deck})
        }
    }

    incorrectAnswer = () => {
        this.setState((prev) => {
            return {
                index: prev.index + 1,
                screen: 'Answer',
                disabledButtons: true,
            }
        }, () => this.sendToResultIfDone())
    }

    showAnswer = () => {
        this.setState({screen: 'Question', disabledButtons: false})
    }

    showQuestion = () => {
        this.setState({screen: 'Answer', disabledButtons: true})
    }

    render() {

        const {deck} = this.props.navigation.state.params;
        const {index, screen, deckLength} = this.state;

        if (index + 1 > deckLength) {
            return (<AppLoading/>)
        }

        return (
            <MainView>
                <PageMaker>{this.state.index + 1}/{deck.questions.length}</PageMaker>
                <ScreenView>
                    <View>
                        {this.state.disabledButtons ?
                            (<QuestionAndAnswer>{deck.questions[index].question}</QuestionAndAnswer>) :
                            (<QuestionAndAnswer>{deck.questions[index].answer}</QuestionAndAnswer>)
                        }
                        <ViewAnswer
                            onPress={() => this.state.disabledButtons ?
                                this.showAnswer() :
                                this.showQuestion()}>{screen}</ViewAnswer>
                    </View>

                    <View>
                        {this.state.disabledButtons ?
                            (
                                <GreenDisabledButton
                                    disabled={true}><TextButton>Correct</TextButton></GreenDisabledButton>
                            ) :
                            (
                                <GreenButton
                                    onPress={() => this.correctAnswer()}><TextButton>Correct</TextButton></GreenButton>
                            )
                        }

                        {this.state.disabledButtons ?
                            (
                                <RedDisabledButton
                                    disabled={true}><TextButton>Incorrect</TextButton></RedDisabledButton>
                            ) :
                            (
                                <RedButton
                                    onPress={() => this.incorrectAnswer()}><TextButton>Incorrect</TextButton></RedButton>
                            )
                        }
                    </View>
                </ScreenView>
            </MainView>
        )
    }
}

const MainView = styled.View`
    flex: 1;
`

const ScreenView = styled.View`
    align-items: center;
    justify-content: space-around;
    flex: 1;
`

const PageMaker = styled.Text`
    align-self: flex-start;
    font-size: 17;
    margin-top: 2;
    margin-left: 4;
`


const QuestionAndAnswer = styled.Text`
    align-self: center;
    justify-content: center;
    font-size: 50;
    text-align: center;
`

const ViewAnswer = styled.Text`
    color: red;
    font-weight: bold;
    font-size: 25;
    text-align: center;
`

const GreenButton = styled.TouchableOpacity`
    background-color: green;
    border-radius: 7;
    width: 200;
    padding: 10px 15px;
`

const GreenDisabledButton = styled.TouchableOpacity`
    background-color: green;
    border-radius: 7;
    width: 200;
    padding: 10px 15px;
    opacity: 0.4;
`

const RedButton = styled.TouchableOpacity`
    margin-top: 10;
    background-color: red;
    border-radius: 7;
    width: 200;
    padding: 10px 15px;
`

const RedDisabledButton = styled.TouchableOpacity`
    margin-top: 10;
    background-color: red;
    border-radius: 7;
    width: 200;
    padding: 10px 15px;
    opacity: 0.4
`


const TextButton = styled.Text`
    font-size: 25;
    text-align: center;
    color: white;
`

export default Card;