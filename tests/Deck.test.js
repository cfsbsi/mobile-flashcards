import React from 'react';
import Deck from '../components/Deck';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const deck = {title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]};

    const tree = renderer.create(<Deck deck={deck}/>).toJSON();

    expect(tree).toMatchSnapshot();
});