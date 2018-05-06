import React, {Component} from 'react'
import {View} from 'react-native'
import Deck from './Deck'
import {fetchDecks} from '../utils/api'

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
        return (
            <View>
                {Object.keys(data).map((deck) => (
                    <Deck key={deck} navigation={this.props.navigation} title={data[deck].title} quantity={data[deck].questions.length}></Deck>
                ))}
            </View>
        )
    }
}

export default Decks