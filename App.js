import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Decks from './components/Decks';
import DeckCreation from './components/DeckCreation';
import CardCreation from './components/CardCreation';
import DeckInfo from './components/DeckInfo';
import Card from './components/Card';
import Result from './components/Result';
import AppStatusBar from './components/AppStatusBar';
import styled from 'styled-components/native/index';
import { setLocalNotification } from './utils/helpers';


const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'DECKS',
    },
  },
  addDeck: {
    screen: DeckCreation,
    navigationOptions: {
      tabBarLabel: 'ADD DECK',
    },
  },
}, {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    style: {
      height: 56,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
    labelStyle: {
      fontSize: 20,
    },
  },
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckInfo: {
    screen: DeckInfo,
    navigationOptions: {
      title: 'Deck',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
  },
  CardCreation: {
    screen: CardCreation,
    navigationOptions: {
      title: 'Create Card',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
  },
  Card: {
    screen: Card,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
  },
  Result: {
    screen: Result,
    navigationOptions: {
      title: 'Your Result',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
  },

});

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <AppView>
        <AppStatusBar barStyle="light-content" />
        <MainNavigator />
      </AppView>
    );
  }
}

const AppView = styled.View`
    flex: 1;
`;
