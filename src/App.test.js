import React from 'react';
import App from './App';
import {shallow, mount, render} from 'enzyme';

describe('App', () => {
  it('renders hello', () => {
    expect(shallow(<App />).text()).toContain('Welcome')
  })
})