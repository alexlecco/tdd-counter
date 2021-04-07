// import { render, screen } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './components/Counter';

configure({ adapter: new Adapter() });

describe('Counter testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  test('t1: renders the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain(
      'This is a counter app'
    );
    // old version:
    // render(<Counter />);
    // const linkElement = screen.getByText('This is a counter app');
    // expect(linkElement).toBeInTheDocument();
  });

  test('t2: render a button with text of `increment`', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });

  test('t3: render initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });

  test('t4: render the click event of increment button and increment counter value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1');
  });

  test('t5: render the click of decrement button and decrement counter value', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1');
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });
});
