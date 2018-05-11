import React from 'react';
import Decks from '../components/Decks';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Decks />).toJSON();

  expect(tree).toMatchSnapshot();
});
