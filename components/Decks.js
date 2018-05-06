import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Deck from './Deck'
import {fetchDecks} from '../utils/api'
import styled from "styled-components/native/index";

class Decks extends Component {

    constructor(props) {
        super(props);
        this.state = {data: {}};
    }

    componentDidMount() {
        fetchDecks()
            .then((data) => this.setState({data}))
    }

    render() {

        const {data} = this.state;

        if (data === null) {
            return (
                <MainView>
                    <Info>You have no Deck please add one on the right tab</Info>
                </MainView>
            )
        }
        return (
            <View>
                {Object.keys(data).map((deck) => (
                    <Deck key={deck} navigation={this.props.navigation} deck={data[deck]}></Deck>
                ))}
            </View>
        )
    }
}


const Info = styled.Text`
    font-size: 30;
    font-weight: bold;
    text-align: center;
`

const MainView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export default Decks