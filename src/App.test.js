// import { render, screen } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('Counter testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('t1: renders the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain(
      'This is a counter app'
    );
    // old version:
    // render(<App />);
    // const linkElement = screen.getByText('This is a counter app');
    // expect(linkElement).toBeInTheDocument();
  });

  test('t2: render a button with text of `increment`', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });
});
