import React from 'react'
import {View, Text} from 'react-native'
import Deck from './Deck'

export default function Decks({navigation}) {
    return (
        <View>
            <Deck navigation={navigation} title="udacitycards" quantity={1}></Deck>
        </View>
    )
}