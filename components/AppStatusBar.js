import React from 'react'
import {StatusBar} from 'react-native'
import {Constants} from "expo";
import styled from "styled-components/native/index";

export default function AppStatusBar({...props}) {
    return (
        <ViewBar>
            <StatusBar translucent {...props}/>
        </ViewBar>
    )
}

const ViewBar = styled.View`
    background-color: black;
    height: ${Constants.statusBarHeight};
`;