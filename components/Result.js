import React from 'react';
import styled from 'styled-components/native/index';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

export default function Result(props) {
  clearLocalNotification().then(setLocalNotification);

  return (
    <MainView>
      <TextStyled>You accepted {props.navigation.state.params.correctPercent}%</TextStyled>
      <TextStyled>of the questions!!</TextStyled>
    </MainView>
  );
}

const MainView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const TextStyled = styled.Text`
   font-size: 40;
   font-weight: bold;
`;
