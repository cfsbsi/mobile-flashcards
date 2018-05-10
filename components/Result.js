import React from 'react'
import styled from "styled-components/native/index";

export default function Result(props) {
    return (
        <MainView>
            <TextStyled>You accepted {props.navigation.state.params.correctPercent}%</TextStyled>
            <TextStyled>of the questions!!</TextStyled>
        </MainView>
    )

}

const MainView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const TextStyled = styled.Text`
   font-size: 40;
   font-weight: bold;
`