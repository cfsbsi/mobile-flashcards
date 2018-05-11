import React from 'react';
import renderer from 'react-test-renderer';
import DeckInfo from '../components/DeckInfo';

it('renders correctly', () => {
  const state = {
    state: {
      params: {
        deck: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces',
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event',
            },
          ],
        },
      },
    },
  };

  const tree = renderer.create(<DeckInfo navigation={state} />).toJSON();

  expect(tree).toMatchSnapshot();
});
