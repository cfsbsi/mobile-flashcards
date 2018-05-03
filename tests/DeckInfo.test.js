import React from 'react';
import renderer from 'react-test-renderer';
import DeckInfo from "../components/DeckInfo";

it('renders correctly', () => {
    const state = {state: {params: {title: 'title', subtitle: 'subtitle'}}};
    const tree = renderer.create(<DeckInfo navigation={state}/>).toJSON();
    expect(tree).toMatchSnapshot();
});