import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from "./Components/Display.js";

import { render, cleanup, fireEvent } from 'react-testing-library';

import 'jest-dom/extend-expect';
import Dashboard from './Components/Dashboard';

afterEach(cleanup);

// https://medium.com/@antonybudianto/react-testing-with-react-testing-library-3b8554f6acfd
describe('<App/>', () => {

  it('renders successfully', () => {
      render(<App/>);
  });
  

  it('check balls', () => {
    const { getByText } = render(<Display balls="0"/>)
    console.log(getByText);
    const balls = getByText('0')
  })

  it('check strikes', () => {
    const { getByText } = render(<Display strikes="0"/>)
    const strikes = getByText('0')
  })

  it("checked for fired event", () => {
    const { container } = render(<Dashboard/>)
    fireEvent.click(container);
  });

});
