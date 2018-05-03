import React from 'react';
import renderer from 'react-test-renderer';
import DeckCreation from "../components/DeckCreation";

it('renders correctly', () => {
    const tree = renderer.create(<DeckCreation />).toJSON();
    expect(tree).toMatchSnapshot();
});