import React from 'react'
import {View, StatusBar} from 'react-native'
import {TabNavigator} from 'react-navigation'
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import {Constants} from 'expo'
import {black} from './utils/colors'

function AppStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}

const Tabs = TabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'DECKS'
        }
    }, addDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'ADD DECK'
        }
    },
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        style: {
            height: 56,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        },
        labelStyle: {
            fontSize: 20,
        },
    }
})

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <AppStatusBar backgroundColor={black} barStyle="light-content"/>
                <Tabs/>
            </View>
        );
    }
}