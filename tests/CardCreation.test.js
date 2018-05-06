import React from 'react';
import renderer from 'react-test-renderer';
import CardCreation from "../components/CardCreation";

it('renders correctly', () => {
    const navigation = { state: {params: {title: 'title'}} };

    const tree = renderer.create(<CardCreation navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
});