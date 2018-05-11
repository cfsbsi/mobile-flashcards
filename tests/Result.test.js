import React from 'react';
import renderer from 'react-test-renderer';
import Result from '../components/Result';

it('renders correctly', () => {
  const state = {
    state: {
      params: {
        correctPercent: 100,
      },
    },
  };
  const tree = renderer.create(<Result navigation={state} />).toJSON();

  expect(tree).toMatchSnapshot();
});
