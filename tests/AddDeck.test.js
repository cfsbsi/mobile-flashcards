import React from 'react';
import renderer from 'react-test-renderer';
import AddDeck from "../components/AddDeck";

it('renders correctly', () => {
    const tree = renderer.create(<AddDeck />).toJSON();
    expect(tree).toMatchSnapshot();
});