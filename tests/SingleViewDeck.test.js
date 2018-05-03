import React from 'react';
import renderer from 'react-test-renderer';
import SingleViewDeck from "../components/SingleViewDeck";

it('renders correctly', () => {
    const state = {state: {params: {title: 'title', subtitle: 'subtitle'}}};
    const tree = renderer.create(<SingleViewDeck navigation={state}/>).toJSON();
    expect(tree).toMatchSnapshot();
});