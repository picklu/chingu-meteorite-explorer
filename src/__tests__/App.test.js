import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

test('App snapshot test', () => {
  const component = renderer.create(<App children="Hello, World" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('App has text "Hello, World!"', () => {
  const component = shallow(<App children="Hello, World!" />);

  expect(component.text()).toEqual('Hello, World!');
});
