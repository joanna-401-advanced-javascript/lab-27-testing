import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter';

describe('<Counter />', () => {
  it('is rendered at application start', () => {
    let app = shallow(<Counter />);
    expect(app.find('.counter').exists()).toBe(true);
    expect(app.find('.upClicker').exists()).toBe(true);
    expect(app.find('.downClicker').exists()).toBe(true);
  });

  it('is incremented when up clicker is clicked', () => {
    let app = mount(<Counter />);
    let upButton = app.find('.upClicker');
    upButton.simulate('click');
    expect(app.state('count')).toEqual(1);
  });

  it('is decremented when up clicker is clicked', () => {
    let app = mount(<Counter />);
    let downButton = app.find('.downClicker');
    downButton.simulate('click');
    downButton.simulate('click');
    expect(app.state('count')).toEqual(-2);
  });

  it('snapshot is rendered correctly', () => {
    const count = renderer
      .create(<Counter />)
      .toJSON();
    expect(count).toMatchSnapshot();
  });
});