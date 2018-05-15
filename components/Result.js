import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native/index';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

export default function Result(props) {
  clearLocalNotification().then(setLocalNotification);

  return (
    <MainView>
      <View>
        <TextStyled>You accepted {props.navigation.state.params.correctPercent}%</TextStyled>
        <TextStyled>of the questions!!</TextStyled>
      </View>
      <View>
        <TouchableOpacityStyledWhite>
          <TextButtonBlack onPress={() => props.navigation.navigate('Card',
              { deck: props.navigation.state.params.deck },)}>
                    Restart Quiz
          </TextButtonBlack>
        </TouchableOpacityStyledWhite>

        <TouchableOpacityStyledBlack>
          <TextButtonWhite onPress={() => props.navigation.navigate('DeckInfo',
                    { deck: props.navigation.state.params.deck },)}>
                    Back to Deck
          </TextButtonWhite>
        </TouchableOpacityStyledBlack>
      </View>
    </MainView>
  );
}

const MainView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;

const TextStyled = styled.Text`
   font-size: 40;
   font-weight: bold;
`;

const TouchableOpacityStyledBlack = styled.TouchableOpacity`
    background-color: black;
    border-radius: 7;
    margin-top: 15;
    width: 200;
    padding: 10px 15px;
`;

const TouchableOpacityStyledWhite = styled.TouchableOpacity`
    background-color: white;
    border-radius: 7;
    border-width: 2px;
    border-color: black;
    padding: 10px 15px;
`;

const TextButtonWhite = styled.Text`
    font-size: 25;
    text-align: center;
    color: white;
`;

const TextButtonBlack = styled.Text`
    font-size: 25;
    text-align: center;
    color: black;
`;
