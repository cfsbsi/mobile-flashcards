import React from 'react';
import Deck from '../components/Deck';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<Deck quantity={1}/>).toJSON();
    expect(tree).toMatchSnapshot();
});