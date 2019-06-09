import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('Test App', () => {
  const component = shallow(<App />);
  it('App snapshot test', async done => {
    expect(component).toMatchSnapshot();
    done();
  });
});
